import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact Our Doctor</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          For more detailed medical advice, you can directly contact our healthcare professional.
        </p>
      </div>

      <div className="mx-auto mb-16 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Healthcare Professional</CardTitle>
            <CardDescription>
              Our doctor is a pharmacist with over a year of experience and currently works in the ICU of Medicity
              Hospital, Uttrakhand.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Consultation Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <MessageSquare className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">WhatsApp Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        Discuss your health concerns directly via WhatsApp messaging or call.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">
                        Usually responds within 24 hours, depending on availability.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Medicity Hospital, Uttrakhand</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold">Contact Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <Link
                        href="https://wa.me/916398559572"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        +91 6398559572
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link href="mailto:Arjunsarkar6398@gmail.com" className="text-blue-600 hover:underline">
                        Arjunsarkar6398@gmail.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
              <h3 className="mb-2 font-semibold text-amber-800 dark:text-amber-400">Important Note</h3>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Please discuss consultation charges directly with the doctor. Charges may vary based on the complexity
                of your health concerns and the duration of the consultation.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="https://wa.me/916398559572" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact via WhatsApp
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-bold">When to Consult a Doctor</h2>
        <p className="mb-8 text-muted-foreground">
          While our health assessment provides valuable insights, it's important to consult a healthcare professional
          if:
        </p>
        <ul className="mx-auto mb-8 max-w-xl space-y-2 text-left">
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
            <span>You have persistent symptoms that don't improve with time</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
            <span>Your assessment results show multiple "High Risk" categories</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
            <span>You have a family history of serious health conditions</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
            <span>You're experiencing severe pain or discomfort</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-600"></div>
            <span>You need personalized medical advice for your specific situation</span>
          </li>
        </ul>
        <Link href="/assessment">
          <Button variant="outline">Return to Assessment</Button>
        </Link>
      </div>
    </div>
  )
}
