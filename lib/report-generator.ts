import { HealthAssessment, healthCategories, getRiskColor } from "./health-data"

export interface ReportData {
  assessment: HealthAssessment
  timestamp: string
  letterContent: string
}

export const generateReportLetter = (assessment: HealthAssessment): string => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const getOverallRisk = (): string => {
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
  const categoryDetails = Object.entries(assessment)
    .map(([categoryId, data]) => {
      const category = healthCategories.find((c) => c.id === categoryId)
      if (!category) return ""

      return `
${category.title}: ${data.riskLevel}
Score: ${data.score}/${data.maxScore} points
Status: ${
        data.riskLevel === "Low Risk"
          ? "Good - Keep up the healthy lifestyle"
          : data.riskLevel === "Mild Risk"
            ? "Fair - Some areas need attention"
            : data.riskLevel === "Moderate Risk"
              ? "Needs Attention - Consider lifestyle improvements"
              : "High Priority - Consult a healthcare professional"
      }
`
    })
    .join("\n")

  const recommendations = `
IMPORTANT SUGGESTIONS FOR YOUR WELLBEING:

1. LIFESTYLE IMPROVEMENTS
   • Maintain regular physical activity (at least 30 minutes daily)
   • Follow a balanced diet rich in vegetables, fruits, and whole grains
   • Get adequate sleep (7-9 hours per night)
   • Manage stress through meditation, yoga, or hobbies
   • Limit alcohol and avoid smoking

2. MONITORING YOUR HEALTH
   • Keep track of your health metrics regularly
   • Retake this assessment every 30 days to monitor progress
   • Note any significant changes in your health status
   • Maintain a health journal

3. WHEN TO SEEK PROFESSIONAL HELP
   ${
     overallRisk === "High Risk"
       ? "• You should schedule a consultation with a healthcare professional soon\n"
       : ""
   }   • If symptoms worsen or new concerns arise
   • For persistent health issues lasting more than 2 weeks
   • Before starting any new exercise or medication regimen
   • If you have a family history of specific health conditions

4. PREVENTIVE MEASURES
   • Regular health check-ups (annually or as recommended)
   • Vaccinations as per your age and health status
   • Regular health screenings appropriate for your age group
   • Maintain healthy weight and BMI
`

  const disclaimer = `
═══════════════════════════════════════════════════════════════

IMPORTANT DISCLAIMER & LEGAL NOTICE:

This health assessment is a SELF-EVALUATION TOOL ONLY and NOT a substitute for 
professional medical advice, diagnosis, or treatment. 

• This tool provides general health suggestions based on your responses
• Results are NOT medical diagnoses or medical advice
• All suggestions are general wellness recommendations only
• Individual health needs vary greatly from person to person
• Your healthcare provider knows your complete medical history
• Always consult a qualified healthcare professional about your health

The creators of this tool assume NO LIABILITY for any health decisions 
made based on this assessment.

═══════════════════════════════════════════════════════════════
`

  const letterContent = `
PERSONAL HEALTH ASSESSMENT LETTER
Generated on: ${currentDate}

────────────────────────────────────────────────────────────────

Dear User,

Thank you for completing our health assessment questionnaire. This letter 
contains personalized health suggestions based on your responses.

EXECUTIVE SUMMARY:
Your overall health assessment indicates: ${overallRisk}

DETAILED ASSESSMENT BY CATEGORY:
${categoryDetails}

${recommendations}

${disclaimer}

NEXT STEPS:
1. Review these suggestions with your healthcare provider
2. Implement healthy lifestyle changes gradually
3. Retake this assessment monthly to track progress
4. Schedule a professional health check-up if needed
5. Contact our health advisors for guidance (not medical advice)

Remember: Your health is your most valuable asset. These suggestions 
are meant to encourage wellness, not to replace professional medical care.

Best wishes for your health and wellbeing,

Health Assessment Team
Generated on: ${currentDate}

────────────────────────────────────────────────────────────────
This is an automated suggestion letter, not a medical prescription.
Always consult healthcare professionals for medical decisions.
────────────────────────────────────────────────────────────────
`

  return letterContent
}

export const generatePDF = (letterContent: string, filename: string = "health-assessment-report.pdf") => {
  // Use jsPDF to create a simple PDF (dynamic import to avoid SSR issues)
  ;(async () => {
    try {
      const { jsPDF } = await import("jspdf")
      const doc = new jsPDF({ unit: "pt", format: "letter" })
      const lines = doc.splitTextToSize(letterContent, 540)
      let cursorY = 40
      doc.setFontSize(11)
      for (const line of lines) {
        doc.text(line, 40, cursorY)
        cursorY += 14
        if (cursorY > 720) {
          doc.addPage()
          cursorY = 40
        }
      }
      doc.save(filename)
    } catch (err) {
      // Fallback: download as text
      console.error("PDF generation failed, falling back to text:", err)
      downloadTextReport(letterContent, filename.replace(/\.pdf$/, ".txt"))
    }
  })()
}

export const downloadTextReport = (
  content: string,
  filename: string = "health-assessment-report.txt"
) => {
  const element = document.createElement("a")
  const file = new Blob([content], { type: "text/plain;charset=utf-8" })
  element.href = URL.createObjectURL(file)
  element.download = filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export const shareReport = async (letterContent: string) => {
  // Check if Web Share API is available
  if (navigator.share) {
    try {
      await navigator.share({
        title: "My Health Assessment Report",
        text: letterContent.substring(0, 500) + "\n\n... (See attached report for full details)",
        url: window.location.href,
      })
    } catch (err) {
      console.log("Share cancelled or failed:", err)
      // Fallback: copy to clipboard
      copyToClipboard(letterContent)
    }
  } else {
    // Fallback: copy to clipboard
    copyToClipboard(letterContent)
  }
}

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Report copied to clipboard! You can now paste it into emails or messages.")
  })
}

export const generateCSVExport = (assessment: HealthAssessment): string => {
  const rows: string[] = ["Health Category,Risk Level,Score,Max Score,Percentage"]

  Object.entries(assessment).forEach(([categoryId, data]) => {
    const category = healthCategories.find((c) => c.id === categoryId)
    if (category) {
      const percentage = Math.round((data.score / data.maxScore) * 100)
      rows.push(`${category.title},${data.riskLevel},${data.score},${data.maxScore},${percentage}%`)
    }
  })

  return rows.join("\n")
}

export const downloadCSVReport = (assessment: HealthAssessment) => {
  const csvContent = generateCSVExport(assessment)
  const element = document.createElement("a")
  const file = new Blob([csvContent], { type: "text/csv;charset=utf-8" })
  element.href = URL.createObjectURL(file)
  element.download = `health-assessment-data-${new Date().toISOString().split("T")[0]}.csv`
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}
