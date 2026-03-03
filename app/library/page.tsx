import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LibraryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Health Library</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Condition Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Short, research-backed articles about common conditions.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Video Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Guided workouts, breathing exercises and tutorials.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Myth Busters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Short facts that counter common health myths.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
