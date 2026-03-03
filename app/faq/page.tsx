import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">FAQ</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Is this a medical diagnosis?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No — results are suggestions and not a substitute for professional medical advice.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How is my data stored?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Assessments are stored locally and can be saved to your account if you sign in.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
