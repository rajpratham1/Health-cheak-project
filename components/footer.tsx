import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">HealthCheck</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Personalized health insights based on a structured question-and-answer system.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
                  Healthy Living Guide
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact Doctor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Health Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Health Articles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Wellness Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://wa.me/916398559572"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rajpratham40@gmail.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Email Developer
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
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 HealthCheck. All rights reserved. Developed by Pratham Kumar.</p>
        </div>
      </div>
    </footer>
  )
}
