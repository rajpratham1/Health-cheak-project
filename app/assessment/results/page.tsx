"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  healthCategories,
  getRiskColor,
  getSummaryText,
  type HealthAssessment,
  type RiskLevel,
} from "@/lib/health-data"
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
  Download,
  Share2,
  RefreshCw,
  MessageSquare,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-6 w-6 text-red-500" />,
  Lungs: <Lungs className="h-6 w-6 text-blue-500" />,
  Activity: <Activity className="h-6 w-6 text-yellow-500" />,
  Kidney: <Kidney className="h-6 w-6 text-purple-500" />,
  Utensils: <Utensils className="h-6 w-6 text-orange-500" />,
  Smile: <Smile className="h-6 w-6 text-pink-500" />,
  Brain: <Brain className="h-6 w-6 text-emerald-500" />,
  Bone: <Bone className="h-6 w-6 text-slate-500" />,
  Eye: <Eye className="h-6 w-6 text-cyan-500" />,
  Tooth: <Tooth className="h-6 w-6 text-gray-500" />,
  Scissors: <Scissors className="h-6 w-6 text-amber-500" />,
  Activity2: <Activity className="h-6 w-6 text-blue-500" />,
}

export default function ResultsPage() {
  const [assessment, setAssessment] = useState<HealthAssessment | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedAssessment = localStorage.getItem("healthAssessment")
    if (storedAssessment) {
      setAssessment(JSON.parse(storedAssessment))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>Loading your health assessment results...</p>
        </div>
      </div>
    )
  }

  if (!assessment) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>No Assessment Found</CardTitle>
            <CardDescription>You haven't completed a health assessment yet.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href="/assessment" className="w-full">
              <Button className="w-full">Start Assessment</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  const getOverallRisk = (): RiskLevel => {
    const categories = Object.keys(assessment)
    if (categories.length === 0) return "Low Risk"

    const highRiskCount = categories.filter((cat) => assessment[cat].riskLevel === "High Risk").length
    const moderateRiskCount = categories.filter((cat) => assessment[cat].riskLevel === "Moderate Risk").length

    if (highRiskCount >= 2) return "High Risk"
    if (highRiskCount === 1 || moderateRiskCount >= 3) return "Moderate Risk"
    if (moderateRiskCount >= 1) return "Mild Risk"
    return "Low Risk"
  }

  const overallRisk = getOverallRisk()
  const overallRiskColor = getRiskColor(overallRisk)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Your Health Assessment Results</h1>
        <p className="text-muted-foreground">Review your personalized health insights and recommendations.</p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Overall Health Status</CardTitle>
            <CardDescription>Based on your responses across all health categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div
                className={`h-16 w-16 rounded-full ${overallRiskColor} flex items-center justify-center text-white font-bold`}
              >
                {overallRisk === "Low Risk"
                  ? "Low"
                  : overallRisk === "Mild Risk"
                    ? "Mild"
                    : overallRisk === "Moderate Risk"
                      ? "Mod"
                      : "High"}
              </div>
              <div>
                <h3 className="text-xl font-bold">{overallRisk}</h3>
                <p className="text-sm text-muted-foreground">
                  {overallRisk === "Low Risk"
                    ? "Great job! Your overall health indicators look good."
                    : overallRisk === "Mild Risk"
                      ? "Some areas need attention, but overall you're doing well."
                      : overallRisk === "Moderate Risk"
                        ? "Several health indicators suggest you should take action."
                        : "Multiple health indicators suggest you should consult a healthcare professional."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Recommended actions based on your assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {overallRisk === "High Risk" && (
                <li className="flex items-start gap-2">
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-white">
                    <span className="text-xs">!</span>
                  </div>
                  <span>Consider consulting a healthcare professional for a thorough check-up.</span>
                </li>
              )}
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <span className="text-xs">1</span>
                </div>
                <span>Review the detailed insights for each health category.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <span className="text-xs">2</span>
                </div>
                <span>Focus on implementing the recommended activities for high-risk areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <span className="text-xs">3</span>
                </div>
                <span>Retake the assessment in 30 days to track your progress.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <span className="text-xs">4</span>
                </div>
                <span>
                  <Link href="/contact" className="text-blue-600 hover:underline">
                    Contact our doctor
                  </Link>{" "}
                  for professional medical advice.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue={healthCategories[0].id} className="mb-8">
        <TabsList className="mb-4 flex w-full flex-wrap justify-start gap-2">
          {healthCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              {iconMap[category.icon]}
              <span className="hidden sm:inline">{category.title}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {healthCategories.map((category) => {
          const categoryAssessment = assessment[category.id]
          if (!categoryAssessment) return null

          const riskLevel = categoryAssessment.riskLevel
          const riskColor = getRiskColor(riskLevel)
          const summaryText = getSummaryText(category.id, riskLevel)

          return (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {iconMap[category.icon]}
                      <CardTitle>{category.title}</CardTitle>
                    </div>
                    <div className={`px-3 py-1 rounded-full ${riskColor} text-white text-sm font-medium`}>
                      {riskLevel}
                    </div>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold">Summary</h3>
                    <p>{summaryText}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">Risk Assessment</h3>
                    <div className="h-3 w-full rounded-full bg-muted">
                      <div
                        className={`h-3 rounded-full ${riskColor}`}
                        style={{ width: `${(categoryAssessment.score / categoryAssessment.maxScore) * 100}%` }}
                      ></div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Score: {categoryAssessment.score} out of {categoryAssessment.maxScore} points
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 font-semibold">Recommended Activities</h3>
                    <ul className="space-y-2">
                      {category.recommendedActivities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
                            <span className="text-xs">{index + 1}</span>
                          </div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {riskLevel === "Moderate Risk" || riskLevel === "High Risk" ? (
                    <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                      <h3 className="mb-2 font-semibold text-amber-800 dark:text-amber-400">Health Advisory</h3>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        Your responses indicate potential health concerns in this area. Consider discussing these
                        symptoms with a healthcare professional for proper evaluation.
                      </p>
                    </div>
                  ) : null}
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Consult Doctor
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          )
        })}
      </Tabs>

      <div className="flex flex-wrap gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share2 className="h-4 w-4" />
          Share Results
        </Button>
        <Link href="/assessment">
          <Button variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Retake Assessment
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
            <MessageSquare className="h-4 w-4" />
            Contact Doctor
          </Button>
        </Link>
      </div>
    </div>
  )
}
