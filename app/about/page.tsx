import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Lightbulb, UserCheck } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About HealthCheck</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Our mission is to empower individuals with personalized health insights through accessible and comprehensive
          assessments.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold">Our Approach</h2>
          <p className="mb-4 text-muted-foreground">
            HealthCheck provides a structured question-and-answer system that evaluates various aspects of your health,
            from heart and lung function to dental and hair health.
          </p>
          <p className="mb-4 text-muted-foreground">
            Our assessment is designed to help you identify potential health concerns early and provide actionable
            recommendations to improve your overall wellness.
          </p>
          <p className="text-muted-foreground">
            While our platform offers valuable insights, it's important to note that HealthCheck is not a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Holistic Health</h3>
              <p className="text-sm text-muted-foreground">
                We assess multiple body systems for a comprehensive health overview.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Privacy First</h3>
              <p className="text-sm text-muted-foreground">
                Your health data remains private and is stored locally on your device.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Actionable Insights</h3>
              <p className="text-sm text-muted-foreground">
                Receive practical recommendations based on your assessment results.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <UserCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">User-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Simple interface designed for accessibility and ease of use.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-center text-3xl font-bold">Meet the Developer</h2>
        <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 text-card-foreground shadow">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="h-32 w-32 overflow-hidden rounded-full">
              <Image
                src="/images/developer-profile.png"
                alt="Pratham Kumar"
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold">Developer - Pratham Kumar</h3>
              <p className="mb-4 text-muted-foreground">
                Full-stack developer passionate about creating accessible health technology solutions that empower users
                to take control of their wellbeing.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Link href="https://github.com/rajpratham1" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    GitHub
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/pratham-kumar-2a4b151a7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://www.facebook.com/pratham.shrivastava.549" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/pratham.shrivastaw" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                </Link>
                <Link href="https://x.com/prathamshriva18" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    X
                  </Button>
                </Link>
                <Link href="https://wa.me/916200892887" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    WhatsApp
                  </Button>
                </Link>
                <Link href="mailto:rajpratham40@gmail.com">
                  <Button variant="outline" size="sm">
                    Email
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-6 text-3xl font-bold">Ready to Check Your Health?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Take our comprehensive health assessment to receive personalized insights and recommendations.
        </p>
        <Link href="/assessment">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Start Your Health Check
          </Button>
        </Link>
      </div>
    </div>
  )
}
