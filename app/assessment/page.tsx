"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { healthCategories, type HealthAssessment } from "@/lib/health-data"
import { saveAssessment } from "@/lib/firestore-utils"
import { useAuth } from "@/hooks/useAuth"
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
  ArrowLeft,
  ArrowRight,
  Check,
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

export default function AssessmentPage() {
  const router = useRouter()
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, Record<string, string>>>({})
  const [progress, setProgress] = useState(0)
  const [demographics, setDemographics] = useState<{ age?: string; gender?: string; height?: string; weight?: string } | null>(null)
  const { user } = useAuth()

  const currentCategory = healthCategories[currentCategoryIndex]
  const totalCategories = healthCategories.length

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentCategory.id]: {
        ...(prev[currentCategory.id] || {}),
        [questionId]: value,
      },
    }))
  }

  const isCurrentCategoryComplete = () => {
    if (!answers[currentCategory.id]) return false
    return currentCategory.questions.every((question) => answers[currentCategory.id][question.id])
  }

  const handleNext = () => {
    if (currentCategoryIndex < totalCategories - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1)
      setProgress(Math.round(((currentCategoryIndex + 1) / totalCategories) * 100))
    } else {
      // Calculate assessment results
      const assessment: HealthAssessment = {}

      healthCategories.forEach((category) => {
        const categoryAnswers = answers[category.id] || {}
        let score = 0
        let maxScore = 0

        category.questions.forEach((question) => {
          const answer = categoryAnswers[question.id]
          if (answer) {
            const option = question.options.find((opt) => opt.value === answer)
            if (option) {
              score += option.score
            }
          }

          // Calculate max possible score for this question
          const maxOptionScore = Math.max(...question.options.map((opt) => opt.score))
          maxScore += maxOptionScore
        })

        // Calculate risk level based on score percentage
        const riskLevel =
          score < maxScore * 0.25
            ? "Low Risk"
            : score < maxScore * 0.5
              ? "Mild Risk"
              : score < maxScore * 0.75
                ? "Moderate Risk"
                : "High Risk"

        assessment[category.id] = {
          answers: categoryAnswers,
          score,
          maxScore,
          riskLevel,
        }
      })

      // Store assessment in localStorage
      localStorage.setItem("healthAssessment", JSON.stringify(assessment))

      // Save to Firestore (if available)
      try {
        saveAssessment(assessment, demographics, user?.uid)
      } catch (err) {
        console.error("Error saving assessment to Firestore:", err)
      }

      // Navigate to results page
      router.push("/assessment/results")
    }
  }

  const handlePrevious = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1)
      setProgress(Math.round(((currentCategoryIndex - 1) / totalCategories) * 100))
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Health Assessment</h1>
        <p className="text-muted-foreground">Answer the following questions to get personalized health insights.</p>
      </div>

      {/* Demographics form for better personalization */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>About You (optional)</CardTitle>
          <CardDescription>Provide age and basic info to improve recommendations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                min={1}
                value={demographics?.age || ""}
                onChange={(e) => setDemographics({ ...(demographics || {}), age: e.target.value })}
                className="mt-1 w-full rounded border px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                value={demographics?.gender || ""}
                onChange={(e) => setDemographics({ ...(demographics || {}), gender: e.target.value })}
                className="mt-1 w-full rounded border px-2 py-1"
              >
                <option value="">Prefer not to say</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Height (cm)</label>
              <input
                type="number"
                value={demographics?.height || ""}
                onChange={(e) => setDemographics({ ...(demographics || {}), height: e.target.value })}
                className="mt-1 w-full rounded border px-2 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Weight (kg)</label>
              <input
                type="number"
                value={demographics?.weight || ""}
                onChange={(e) => setDemographics({ ...(demographics || {}), weight: e.target.value })}
                className="mt-1 w-full rounded border px-2 py-1"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">
            Section {currentCategoryIndex + 1} of {totalCategories}
          </span>
          <span className="text-sm font-medium">{progress}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center gap-4">
          {iconMap[currentCategory.icon]}
          <div>
            <CardTitle>{currentCategory.title}</CardTitle>
            <CardDescription>{currentCategory.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentCategory.questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <h3 className="font-medium">{question.text}</h3>
              <RadioGroup
                value={answers[currentCategory.id]?.[question.id] || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                <div className="grid gap-2">
                  {question.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                      <Label htmlFor={`${question.id}-${option.value}`} className="cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentCategoryIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <Button onClick={handleNext} disabled={!isCurrentCategoryComplete()}>
            {currentCategoryIndex < totalCategories - 1 ? (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Complete
                <Check className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
