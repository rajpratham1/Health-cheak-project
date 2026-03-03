"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useAuth } from "@/hooks/useAuth"
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { generatePDF, generateReportLetter } from "@/lib/report-generator"

type HistoryPoint = { name: string; score: number }

export default function DashboardPage() {
  const { user } = useAuth()
  const [userData, setUserData] = useState<any>(null)
  const [historyData, setHistoryData] = useState<HistoryPoint[]>([])

  useEffect(() => {
    const load = async () => {
      if (!user) return

      const userRef = doc(db, "users", user.uid)
      const userSnap = await getDoc(userRef)
      if (userSnap.exists()) setUserData(userSnap.data())

      try {
        const assessmentsRef = collection(db, "assessments")
        const historyQuery = query(assessmentsRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"))
        const assessments = await getDocs(historyQuery)
        const points: HistoryPoint[] = []

        assessments.forEach((row) => {
          const data = row.data() as any
          if (!data?.assessment) return
          const categories = Object.values(data.assessment)
          let totalScore = 0
          let totalMax = 0
          categories.forEach((entry: any) => {
            totalScore += entry.score || 0
            totalMax += entry.maxScore || 0
          })
          const percent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0
          const date = data.createdAt?.toDate ? data.createdAt.toDate().toISOString().split("T")[0] : row.id
          points.push({ name: date, score: percent })
        })

        setHistoryData(points.slice(0, 12).reverse())
      } catch (error) {
        console.error("Error loading assessments:", error)
      }
    }

    load()
  }, [user])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="mb-8 rounded-2xl bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500 p-6 text-white shadow-lg">
        <h2 className="mb-2 text-2xl font-bold">Health Territory Challenge</h2>
        <p className="mb-4 text-sm sm:text-base">Walk in real life, claim territory, and track your weekly distance.</p>
        <Link
          href={user ? "/territory" : "/login"}
          className="inline-block rounded-lg bg-white/20 px-5 py-2 backdrop-blur transition hover:bg-white/30"
        >
          {user ? "Start Playing" : "Login To Start"}
        </Link>
      </div>

      {user ? (
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Welcome, {user.displayName || user.email}</h2>
              <p className="text-sm text-muted-foreground">Member since {user.metadata?.creationTime}</p>
            </div>
            <div className="text-right">
              <div className="text-sm">Assessments: {userData?.assessmentsCount || 0}</div>
              <div className="text-sm">Streak: {userData?.streak || 0} days</div>
              <div className="text-sm">Badges: {(userData?.badges || []).length}</div>
              <div className="mt-2">
                <button
                  className="rounded bg-blue-600 px-3 py-1 text-sm text-white"
                  onClick={async () => {
                    if (!historyData.length) return alert("No assessments to export")
                    try {
                      const assessmentsRef = collection(db, "assessments")
                      const latestQuery = query(
                        assessmentsRef,
                        where("userId", "==", user.uid),
                        orderBy("createdAt", "desc")
                      )
                      const latest = await getDocs(latestQuery)
                      const first = latest.docs[0]
                      if (!first) return alert("No assessments found")
                      const data = first.data() as any
                      const letter = generateReportLetter(data.assessment)
                      generatePDF(letter, `health-report-${first.id}.pdf`)
                    } catch (error) {
                      console.error(error)
                      alert("Failed to export PDF")
                    }
                  }}
                >
                  Export Latest Report (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Not signed in</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Sign in to save your assessments and track progress.</p>
            <Link href="/login" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              Go to login
            </Link>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Assessment History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Recent assessment scores</p>
            <div className="mt-4" style={{ width: "100%", height: 200 }}>
              <ResponsiveContainer>
                <BarChart data={historyData.length ? historyData : [{ name: "No data", score: 0 }]}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Track streaks and badges you earn while using the app.</p>
            {userData?.badges?.length > 0 ? (
              <ul className="mt-2 space-y-1 text-sm">
                {userData.badges.map((badge: string) => (
                  <li key={badge} className="inline-block rounded bg-blue-100 px-2 py-1">
                    {badge}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm">No badges yet.</p>
            )}
            <Link href="/guide" className="mt-4 inline-block text-sm text-blue-600 hover:underline">
              Explore health tips
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
