"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import maplibregl from "maplibre-gl"
import "maplibre-gl/dist/maplibre-gl.css"
import { useAuth } from "@/hooks/useAuth"
import { db } from "@/lib/firebase"
import { addDoc, collection, doc, getDocs, onSnapshot, query, serverTimestamp, setDoc, where } from "firebase/firestore"
import * as turf from "@turf/turf"

type LngLatTuple = [number, number]
type FirestorePoint = { lng: number; lat: number }

function normalizePolygon(points: Array<[number, number]>) {
  if (points.length < 3) return null
  const first = points[0]
  const last = points[points.length - 1]
  if (first[0] === last[0] && first[1] === last[1]) return points
  return [...points, first]
}

function buildTerritoryRingFromPath(points: Array<[number, number]>) {
  if (points.length < 2) return null

  try {
    const line = turf.lineString(points)
    const buffered = turf.buffer(line, 0.02, { units: "kilometers", steps: 16 })

    if (buffered?.geometry?.type === "Polygon") {
      const ring = buffered.geometry.coordinates[0] as Array<[number, number]>
      return normalizePolygon(ring)
    }

    if (buffered?.geometry?.type === "MultiPolygon") {
      const polygons = buffered.geometry.coordinates
      if (!polygons.length) return null

      let bestRing: Array<[number, number]> | null = null
      let bestArea = 0

      polygons.forEach((poly) => {
        const ring = poly[0] as Array<[number, number]>
        const area = turf.area(turf.polygon([ring]))
        if (area > bestArea) {
          bestArea = area
          bestRing = ring
        }
      })

      return bestRing ? normalizePolygon(bestRing) : null
    }
  } catch (error) {
    console.error("Buffer polygon creation failed", error)
  }

  // Fallback: try a convex hull from visited points.
  try {
    const pointFeatures = points.map((p) => turf.point(p))
    const hull = turf.convex(turf.featureCollection(pointFeatures))
    if (hull?.geometry?.type === "Polygon") {
      const ring = hull.geometry.coordinates[0] as Array<[number, number]>
      return normalizePolygon(ring)
    }
  } catch (error) {
    console.error("Convex hull creation failed", error)
  }

  return normalizePolygon(points)
}

function toFirestorePoints(points: LngLatTuple[]): FirestorePoint[] {
  return points
    .filter((p) => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]))
    .map(([lng, lat]) => ({ lng, lat }))
}

function fromFirestorePoints(points: unknown): LngLatTuple[] {
  if (!Array.isArray(points)) return []
  return points
    .map((p: any) => {
      const lng = Number(p?.lng)
      const lat = Number(p?.lat)
      if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null
      return [lng, lat] as LngLatTuple
    })
    .filter((p): p is LngLatTuple => Boolean(p))
}

function Leaderboard({ userId }: { userId?: string }) {
  const [leaders, setLeaders] = useState<Array<{ name: string; distance: number }>>([])

  useEffect(() => {
    async function load() {
      try {
        const snapshot = await getDocs(collection(db, "users"))
        const rows: Array<{ name: string; distance: number }> = []
        snapshot.forEach((entry) => {
          const data: any = entry.data()
          const distance = data?.stats?.walking?.distance || 0
          if (distance > 0) {
            rows.push({
              name: data.displayName || data.email || entry.id,
              distance,
            })
          }
        })
        rows.sort((a, b) => b.distance - a.distance)
        setLeaders(rows.slice(0, 5))
      } catch (error) {
        console.error("Failed to load leaderboard, using local fallback", error)
        if (userId) {
          const local = Number(localStorage.getItem(`walking_distance_${userId}`) || "0")
          if (local > 0) setLeaders([{ name: "You (local)", distance: local }])
        }
      }
    }
    load()
  }, [userId])

  return (
    <div className="mt-4 rounded bg-white/70 p-2 text-xs backdrop-blur">
      <div className="font-semibold">Weekly Leaderboard</div>
      {leaders.length ? (
        <ol className="list-inside list-decimal">
          {leaders.map((item, idx) => (
            <li key={`${item.name}-${idx}`}>{item.name}: {item.distance.toFixed(2)} km</li>
          ))}
        </ol>
      ) : (
        <div>No data yet</div>
      )}
    </div>
  )
}

export default function TerritoryPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapRef = useRef<maplibregl.Map | null>(null)
  const watchIdRef = useRef<number | null>(null)
  const [distance, setDistance] = useState(0)
  const distanceRef = useRef(0)
  const [coords, setCoords] = useState<Array<[number, number]>>([])
  const [alertMsg, setAlertMsg] = useState<string | null>(null)
  const [territories, setTerritories] = useState<Record<string, Array<[number, number]>>>({})
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    if (!loading && !user) router.push("/login")
  }, [loading, user, router])

  useEffect(() => {
    if (loading || !user || mapRef.current || !mapContainer.current) return

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://tiles.openfreemap.org/styles/liberty",
      center: [77.209, 28.6139],
      zoom: 13,
    })
    mapRef.current = map
    map.addControl(new maplibregl.NavigationControl())

    map.on("load", () => setMapReady(true))

    if (navigator.geolocation) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) => {
          const lng = pos.coords.longitude
          const lat = pos.coords.latitude
          setCoords((prev) => {
            const next = [...prev, [lng, lat] as [number, number]]
            calculateDistance(next)
            updateWalkLine(next)
            checkEntry(lat, lng)
            return next
          })
          map.flyTo({ center: [lng, lat], zoom: 16, speed: 0.8, essential: true })
        },
        (err) => console.error("Geolocation error", err),
        { enableHighAccuracy: true, maximumAge: 0, timeout: 20000 }
      )
    }

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current)
      }
      map.remove()
      mapRef.current = null
      setMapReady(false)
    }
  }, [loading, user])

  useEffect(() => {
    if (!user) return
    const loadLocalAndFallback = async () => {
      const localDistance = Number(localStorage.getItem(`walking_distance_${user.uid}`) || "0")
      if (localDistance > 0) {
        distanceRef.current = localDistance
        setDistance(localDistance)
      }

      const localTerritoryRaw = localStorage.getItem(`territory_${user.uid}`)
      if (localTerritoryRaw) {
        try {
          const localTerritory = JSON.parse(localTerritoryRaw) as Array<[number, number]>
          const ring = normalizePolygon(localTerritory)
          if (ring) setCoords(ring)
        } catch (error) {
          console.error("Failed to parse local territory", error)
        }
      }

      // If writes to users/{uid} are blocked, try loading latest territory saved in assessments.
      try {
        const fallbackQ = query(
          collection(db, "assessments"),
          where("userId", "==", user.uid),
          where("entryType", "==", "territory")
        )
        const fallbackSnap = await getDocs(fallbackQ)
        const docs = fallbackSnap.docs
        if (!docs.length) return
        const latest = docs[docs.length - 1].data() as any
        const fallbackCoords = fromFirestorePoints(latest?.territory?.rawPath || latest?.territory?.coordinates)
        if (fallbackCoords.length) setCoords(fallbackCoords)
      } catch (error) {
        console.error("Could not load territory fallback from assessments", error)
      }
    }

    loadLocalAndFallback()
  }, [user])

  useEffect(() => {
    if (loading || !user) return
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "removed") return
          const data = change.doc.data() as any
          const coords = fromFirestorePoints(data?.territory?.coordinates)
          if (coords.length) {
            drawTerritory(change.doc.id, coords)
          }
        })
      },
      (error) => {
        console.error("Territories listener failed, using local only", error)
      }
    )
    return () => unsub()
  }, [loading, user, mapReady])

  const calculateDistance = (points: Array<[number, number]>) => {
    if (!user || points.length < 2) return
    const current = points[points.length - 1]
    const previous = points[points.length - 2]
    const delta = turf.distance(turf.point(previous), turf.point(current), { units: "kilometers" })
    const nextDistance = distanceRef.current + delta
    distanceRef.current = nextDistance
    setDistance(nextDistance)

    setDoc(
      doc(db, "users", user.uid),
      {
        stats: {
          walking: {
            distance: nextDistance,
            lastUpdated: serverTimestamp(),
          },
        },
      },
      { merge: true }
    ).catch((error) => {
      console.error("Failed to save walking stats, using local fallback", error)
      localStorage.setItem(`walking_distance_${user.uid}`, String(nextDistance))
    })
  }

  const updateWalkLine = (points: Array<[number, number]>) => {
    if (!mapRef.current || !mapReady) return
    const data = {
      type: "Feature",
      geometry: { type: "LineString", coordinates: points },
      properties: {},
    } as const

    if (mapRef.current.getSource("walk")) {
      ;(mapRef.current.getSource("walk") as maplibregl.GeoJSONSource).setData(data as any)
      return
    }

    mapRef.current.addSource("walk", { type: "geojson", data: data as any })
    mapRef.current.addLayer({
      id: "walk-layer",
      type: "line",
      source: "walk",
      paint: { "line-color": "#ef4444", "line-width": 4 },
    })
  }

  const drawTerritory = (ownerId: string, points: Array<[number, number]>) => {
    if (!mapRef.current || !mapReady || !ownerId) return
    const ring = normalizePolygon(points)
    if (!ring) return

    setTerritories((prev) => ({ ...prev, [ownerId]: ring }))

    const sourceId = `territory-${ownerId}`
    const data = {
      type: "Feature",
      geometry: { type: "Polygon", coordinates: [ring] },
      properties: {},
    } as const

    if (mapRef.current.getSource(sourceId)) {
      ;(mapRef.current.getSource(sourceId) as maplibregl.GeoJSONSource).setData(data as any)
      return
    }

    mapRef.current.addSource(sourceId, { type: "geojson", data: data as any })
    mapRef.current.addLayer({
      id: sourceId,
      type: "fill",
      source: sourceId,
      paint: { "fill-color": ownerId === user?.uid ? "#22c55e55" : "#3b82f655" },
    })
  }

  const checkEntry = (lat: number, lng: number) => {
    const point = turf.point([lng, lat])
    Object.entries(territories).forEach(([ownerId, ring]) => {
      if (ownerId === user?.uid || ring.length < 4) return
      const polygon = turf.polygon([ring])
      if (turf.booleanPointInPolygon(point, polygon)) {
        setAlertMsg(`You entered ${ownerId}'s territory!`)
        setTimeout(() => setAlertMsg(null), 5000)
      }
    })
  }

  const saveTerritory = async () => {
    if (!user) return
    if (coords.length < 2 || distanceRef.current < 0.01) {
      alert("Walk a bit more before saving territory.")
      return
    }
    const ring = buildTerritoryRingFromPath(coords)
    if (!ring) {
      alert("Could not create territory area yet. Walk a wider loop and try again.")
      return
    }

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          territory: {
            coordinates: toFirestorePoints(ring),
            rawPath: toFirestorePoints(coords),
            lastUpdated: serverTimestamp(),
          },
        },
        { merge: true }
      )
      drawTerritory(user.uid, ring)
      alert("Territory saved.")
    } catch (error) {
      console.error("Users doc save failed, trying assessments fallback", error)
      try {
        await addDoc(collection(db, "assessments"), {
          userId: user.uid,
          entryType: "territory",
          territory: {
            coordinates: toFirestorePoints(ring),
            rawPath: toFirestorePoints(coords),
          },
          createdAt: serverTimestamp(),
        })
        drawTerritory(user.uid, ring)
        alert("Territory saved to Firestore fallback.")
      } catch (fallbackError: any) {
        console.error("Failed to save territory, using local fallback", fallbackError)
        localStorage.setItem(`territory_${user.uid}`, JSON.stringify(ring))
        drawTerritory(user.uid, ring)
        const code = fallbackError?.code || "unknown"
        alert(`Territory saved locally (Firestore blocked: ${code}).`)
      }
    }
  }

  if (loading || !user) {
    return <div className="p-6 text-sm">Checking your session...</div>
  }

  return (
    <div className="relative h-screen w-screen">
      <div ref={mapContainer} className="h-full w-full" />
      <div className="absolute left-4 top-4 max-w-xs rounded-lg bg-white/80 p-3 backdrop-blur">
        <div className="text-sm">Distance: {distance.toFixed(2)} km</div>
        <div className="text-xs text-slate-600">Walk a loop, then tap Save Territory.</div>
        <button className="mt-2 rounded bg-blue-600 px-3 py-1 text-white" onClick={saveTerritory}>
          Save Territory
        </button>
        <Leaderboard userId={user?.uid} />
      </div>
      {alertMsg && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded bg-red-500 px-4 py-2 text-white">
          {alertMsg}
        </div>
      )}
    </div>
  )
}
