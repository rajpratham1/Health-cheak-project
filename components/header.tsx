"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function Header() {
  const { user, signInWithGoogle, signOutUser } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">HealthCheck</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex">
            <ul className="flex gap-6">
              <li>
                <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-sm font-medium transition-colors hover:text-blue-600">
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-sm font-medium transition-colors hover:text-blue-600">
                  Healthy Living Guide
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-sm font-medium transition-colors hover:text-blue-600">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">
                  Contact Doctor
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
          <ModeToggle />
          <Link href="/assessment" className="hidden sm:inline">
            <Button variant="outline" className="text-sm">
              Assessment
            </Button>
          </Link>

          {mounted && (user ? (
            <div className="flex items-center gap-2">
              <div className="text-xs sm:text-sm hidden sm:inline">{user.displayName || user.email}</div>
              <Button variant="ghost" onClick={signOutUser} className="text-xs sm:text-sm">Sign out</Button>
            </div>
          ) : (
            <Button onClick={signInWithGoogle} className="text-xs sm:text-sm">Sign in</Button>
          ))}
        </div>
        </div>
      </div>
    </header>
  )
}
