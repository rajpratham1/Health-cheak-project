import Link from "next/link"
import { Heart } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "@/components/ui/button"

export default function Header() {
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
          <ModeToggle />
          <Link href="/assessment">
            <Button variant="outline" className="hidden md:inline-flex">
              Start Assessment
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
