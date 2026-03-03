"use client"

import { db } from "./firebase"
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
  updateDoc,
  increment,
} from "firebase/firestore"
import type { HealthAssessment } from "./health-data"

export const saveAssessment = async (
  assessment: HealthAssessment,
  demographics: Record<string, any> | null = null,
  userId?: string
) => {
  try {
    const payload = {
      assessment,
      demographics,
      createdAt: serverTimestamp(),
      userId: userId || null,
    }

    const ref = await addDoc(collection(db, "assessments"), payload)

    // Basic gamification: increment user's assessmentsCount, manage streak and badges
    if (userId) {
      const userRef = doc(db, "users", userId)
      const userSnap = await getDoc(userRef)
      const now = new Date()

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          assessmentsCount: 1,
          lastAssessment: serverTimestamp(),
          streak: 1,
          badges: ["First Assessment"],
        })
      } else {
        const userData = userSnap.data() as any
        const updates: any = {}
        const prevTime = userData.lastAssessment?.toDate ? userData.lastAssessment.toDate() : null
        if (prevTime) {
          const diff = now.getTime() - prevTime.getTime()
          const oneDay = 1000 * 60 * 60 * 24
          if (diff <= oneDay * 7) {
            // within a week -> continue streak
            updates.streak = (userData.streak || 0) + 1
          } else {
            updates.streak = 1
          }
        } else {
          updates.streak = 1
        }

        // pick up additional badges based on counts or streaks
        const newCount = (userData.assessmentsCount || 0) + 1
        updates.assessmentsCount = increment(1)
        updates.lastAssessment = serverTimestamp()

        const badgeSet = new Set(userData.badges || [])
        if (newCount === 5) badgeSet.add("5 Assessments")
        if (newCount === 10) badgeSet.add("10 Assessments")
        if (updates.streak === 3) badgeSet.add("3 Day Streak")
        if (updates.streak === 7) badgeSet.add("7 Day Streak")
        if (newCount === 1) badgeSet.add("First Assessment")

        updates.badges = Array.from(badgeSet)
        await updateDoc(userRef, updates)
      }
    }

    return { id: ref.id }
  } catch (err) {
    console.error("saveAssessment error", err)
    throw err
  }
}
