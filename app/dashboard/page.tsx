"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"
import { useAuth } from "@/hooks/useAuth"
import { doc, getDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"

export default function DashboardPage() {
  const { user } = useAuth()
  const [userData, setUserData] = useState<any>(null)
  const [historyData, setHistoryData] = useState<Array<{ name: string; score: number }>>([])

  useEffect(() => {
    const load = async () => {
      if (!user) return
      const ref = doc(db, "users", user.uid)
      const snap = await getDoc(ref)
      if (snap.exists()) setUserData(snap.data())
      // Load user's assessment history
      try {
        const assessmentsRef = collection(db, "assessments")
        const q = query(assessmentsRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"))
        const snapA = await getDocs(q)
        const points: Array<{ name: string; score: number }> = []
        snapA.forEach((d) => {
          const data = d.data() as any
          if (data && data.assessment) {
            const categories = Object.values(data.assessment)
            let totalScore = 0
            let totalMax = 0
            categories.forEach((c: any) => {
              totalScore += c.score || 0
              totalMax += c.maxScore || 0
            })
            const percent = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0
            const date = data.createdAt?.toDate ? data.createdAt.toDate().toISOString().split("T")[0] : d.id
            points.push({ name: date, score: percent })
          }
        })
        setHistoryData(points.slice(0, 12).reverse())
      } catch (err) {
        console.error("Error loading assessments:", err)
      }
    }
    load()
  }, [user])

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

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
                  className="rounded bg-blue-600 px-3 py-1 text-white text-sm"
                  onClick={async () => {
                    if (!historyData || historyData.length === 0) return alert("No assessments to export")
                    // Export latest assessment to PDF
                    try {
                      // fetch latest assessment document again to get full details
                      const assessmentsRef = collection(db, "assessments")
                      const q = query(assessmentsRef, where("userId", "==", user.uid), orderBy("createdAt", "desc"))
                      const snapA = await getDocs(q)
                      const first = snapA.docs[0]
                      if (!first) return alert("No assessments found")
                      const data = first.data() as any
                      const letter = generateReportLetter(data.assessment)
                      generatePDF(letter, `health-report-${first.id}.pdf`)
                    } catch (err) {
                      console.error(err)
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
            <Link href="/assessment">
              <p className="mt-4 text-sm text-blue-600 hover:underline">Start Assessment</p>
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
            <div style={{ width: "100%", height: 200 }} className="mt-4">
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
            <p className="text-sm text-muted-foreground">Track streaks and badges you earn while using the app.</p>            {userData?.badges && userData.badges.length > 0 ? (
              <ul className="mt-2 space-y-1 text-sm">
                {userData.badges.map((b: string) => (
                  <li key={b} className="inline-block rounded bg-blue-100 px-2 py-1">
                    {b}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm">No badges yet.</p>
            )}            <Link href="/guide">
              <p className="mt-4 text-sm text-blue-600 hover:underline">Explore health tips</p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
