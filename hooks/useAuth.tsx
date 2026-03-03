"use client"

import { useEffect, useState } from "react"
import { auth, googleProvider, db } from "@/lib/firebase"
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u)
    })
    return () => unsubscribe()
  }, [])

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error("Google sign-in failed", err)
    }
  }

  const registerWithEmail = async (email: string, password: string, displayName?: string) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password)
      const u = cred.user
      // create minimal user doc
      try {
        await setDoc(doc(db, "users", u.uid), {
          email: u.email,
          displayName: displayName || null,
          createdAt: new Date(),
          assessmentsCount: 0,
          streak: 0,
          badges: [],
        })
      } catch (e) {
        console.warn("Could not create user doc", e)
      }
      return u
    } catch (err) {
      console.error("Registration failed", err)
      throw err
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      return cred.user
    } catch (err) {
      console.error("Email sign-in failed", err)
      throw err
    }
  }

  const signOutUser = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error("Sign out failed", err)
    }
  }

  return { user, signInWithGoogle, signOutUser, registerWithEmail, signInWithEmail }
}
