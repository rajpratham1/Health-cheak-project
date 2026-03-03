import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TipsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Wellness Tips</h1>
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Stay Hydrated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Drink at least 8 glasses of water each day to maintain proper hydration.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Take Walks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Incorporate a 30-minute walk into your daily routine to support circulation and mood.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
