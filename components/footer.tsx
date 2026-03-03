import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-3 py-6 sm:px-4 sm:py-8">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="mb-3 sm:mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <span className="text-lg sm:text-xl font-bold">HealthCheck</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Personalized health insights based on a structured question-and-answer system.
            </p>
          </div>
          <div>
            <h3 className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-muted-foreground transition-colors hover:text-foreground">
                  Assessment
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-muted-foreground transition-colors hover:text-foreground">
                  Guide
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground transition-colors hover:text-foreground">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold">Resources</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/articles" className="text-muted-foreground transition-colors hover:text-foreground">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-muted-foreground transition-colors hover:text-foreground">
                  Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h3 className="mb-2 sm:mb-4 text-xs sm:text-sm font-semibold">Connect</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="https://wa.me/916398559572"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rajpratham40@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/rajpratham1"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 HealthCheck. All rights reserved. Developed by Pratham Kumar.</p>
        </div>
      </div>
    </footer>
  )
}
