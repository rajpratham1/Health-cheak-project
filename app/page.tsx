import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  TreesIcon as Lungs,
  Activity,
  BabyIcon as Kidney,
  Utensils,
  Smile,
  Brain,
  Bone,
  Eye,
  SmileIcon as Tooth,
  Scissors,
  BarChart,
} from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Your Personal Health Assessment
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground md:text-xl">
          Get personalized health insights based on a structured question-and-answer system for various body parts.
        </p>
        <Link href="/assessment">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Health Check
          </Button>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Answer Questions</h3>
              <p className="text-muted-foreground">
                Complete our comprehensive health assessment questionnaire covering various body systems.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Get Insights</h3>
              <p className="text-muted-foreground">
                Receive personalized health insights based on your responses with risk indicators.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-100 p-3">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Take Action</h3>
              <p className="text-muted-foreground">
                Follow recommended activities and lifestyle changes tailored to your health profile.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Health Categories</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Heart className="h-8 w-8 text-red-500" />
              <div>
                <h3 className="font-bold">Heart Health</h3>
                <p className="text-sm text-muted-foreground">Cardiovascular assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Lungs className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-bold">Lung Health</h3>
                <p className="text-sm text-muted-foreground">Respiratory assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Activity className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="font-bold">Liver Health</h3>
                <p className="text-sm text-muted-foreground">Hepatic assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Kidney className="h-8 w-8 text-purple-500" />
              <div>
                <h3 className="font-bold">Kidney Health</h3>
                <p className="text-sm text-muted-foreground">Renal assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Utensils className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-bold">Digestive Health</h3>
                <p className="text-sm text-muted-foreground">Gastrointestinal assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Smile className="h-8 w-8 text-pink-500" />
              <div>
                <h3 className="font-bold">Skin Health</h3>
                <p className="text-sm text-muted-foreground">Dermatological assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Brain className="h-8 w-8 text-emerald-500" />
              <div>
                <h3 className="font-bold">Brain Health</h3>
                <p className="text-sm text-muted-foreground">Cognitive assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Bone className="h-8 w-8 text-slate-500" />
              <div>
                <h3 className="font-bold">Bone Health</h3>
                <p className="text-sm text-muted-foreground">Skeletal assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Eye className="h-8 w-8 text-cyan-500" />
              <div>
                <h3 className="font-bold">Eye Health</h3>
                <p className="text-sm text-muted-foreground">Visual assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Tooth className="h-8 w-8 text-gray-500" />
              <div>
                <h3 className="font-bold">Dental Health</h3>
                <p className="text-sm text-muted-foreground">Oral assessment</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Scissors className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="font-bold">Hair Health</h3>
                <p className="text-sm text-muted-foreground">Hair assessment</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="text-center">
        <h2 className="mb-6 text-3xl font-bold">Ready to Check Your Health?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Take our comprehensive health assessment to receive personalized insights and recommendations.
        </p>
        <Link href="/assessment">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Start Your Health Check
          </Button>
        </Link>
      </div>
    </div>
  )
}
