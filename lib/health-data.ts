export type HealthCategory = {
  id: string
  title: string
  description: string
  icon: string
  questions: Question[]
  recommendedActivities: string[]
}

export type Question = {
  id: string
  text: string
  options: Option[]
}

export type Option = {
  value: string
  label: string
  score: number
}

export type HealthAssessment = {
  [key: string]: {
    answers: Record<string, string>
    score: number
    maxScore: number
    riskLevel: RiskLevel
  }
}

export type RiskLevel = "Low Risk" | "Mild Risk" | "Moderate Risk" | "High Risk"

export const healthCategories: HealthCategory[] = [
  {
    id: "heart",
    title: "Heart Health",
    description: "Cardiovascular assessment",
    icon: "Heart",
    questions: [
      {
        id: "heart-1",
        text: "How often do you experience shortness of breath?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "heart-2",
        text: "Do you feel chest pain during physical activities?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "heart-3",
        text: "Do you have a family history of heart disease?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "not-sure", label: "Not Sure", score: 1 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
      {
        id: "heart-4",
        text: "How often do you feel fatigued without exertion?",
        options: [
          { value: "rarely", label: "Rarely", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "constantly", label: "Constantly", score: 3 },
        ],
      },
      {
        id: "heart-5",
        text: "Do you monitor your blood pressure regularly?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "no", label: "No", score: 2 },
        ],
      },
    ],
    recommendedActivities: [
      "Monitor your resting heart rate each morning.",
      "Engage in light aerobic exercises (e.g., walking, cycling, skipping).",
      "Practice stress reduction techniques like meditation or deep breathing.",
    ],
  },
  {
    id: "lungs",
    title: "Lung Health",
    description: "Respiratory assessment",
    icon: "Lungs",
    questions: [
      {
        id: "lungs-1",
        text: "Do you feel breathless while climbing stairs or walking briskly?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "lungs-2",
        text: "Do you experience a persistent cough or wheezing?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "constantly", label: "Constantly", score: 3 },
        ],
      },
      {
        id: "lungs-3",
        text: "Are you exposed to smoke, dust, or pollution regularly?",
        options: [
          { value: "rarely", label: "Rarely", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "lungs-4",
        text: "Do you have a history of asthma or respiratory infections?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "not-sure", label: "Not Sure", score: 1 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
    ],
    recommendedActivities: [
      "Practice deep breathing exercises (e.g., 4-7-8 breathing technique).",
      "Blow balloons or practice holding your breath to test lung strength.",
      "Perform regular cardio to strengthen lung capacity.",
    ],
  },
  {
    id: "liver",
    title: "Liver Health",
    description: "Hepatic assessment",
    icon: "Activity",
    questions: [
      {
        id: "liver-1",
        text: "Do you often feel tired or weak even with enough sleep?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "rarely", label: "Rarely", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "liver-2",
        text: "Have you noticed any yellowing of skin or eyes?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "mild", label: "Mild", score: 2 },
          { value: "yes", label: "Yes", score: 3 },
        ],
      },
      {
        id: "liver-3",
        text: "Do you drink alcohol or take medications regularly?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "liver-4",
        text: "Have you noticed changes in your appetite, weight, or digestion?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "slight", label: "Slight", score: 1 },
          { value: "significant", label: "Significant", score: 3 },
        ],
      },
    ],
    recommendedActivities: [
      "Stay well-hydrated throughout the day.",
      "Follow a balanced diet rich in fruits and leafy greens.",
      "Avoid excessive alcohol or processed food.",
    ],
  },
  {
    id: "kidney",
    title: "Kidney Health",
    description: "Renal assessment",
    icon: "Kidney",
    questions: [
      {
        id: "kidney-1",
        text: "Have you experienced pain in your lower back or abdomen?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "kidney-2",
        text: "Do you urinate less or more frequently than usual?",
        options: [
          { value: "normal", label: "Normal", score: 0 },
          { value: "slightly-increased", label: "Slightly Increased", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "rarely", label: "Rarely", score: 3 },
        ],
      },
      {
        id: "kidney-3",
        text: "Have you noticed any swelling in legs, ankles, or feet?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "mild", label: "Mild", score: 1 },
          { value: "noticeable", label: "Noticeable", score: 2 },
          { value: "severe", label: "Severe", score: 3 },
        ],
      },
      {
        id: "kidney-4",
        text: "Is your urine color unusually dark, cloudy, or has a strong smell?",
        options: [
          { value: "clear", label: "Clear", score: 0 },
          { value: "slightly-cloudy", label: "Slightly Cloudy", score: 1 },
          { value: "often-dark", label: "Often Dark", score: 2 },
          { value: "very-dark", label: "Very Dark", score: 3 },
        ],
      },
    ],
    recommendedActivities: [
      "Track daily water intake (target: 2.5–3 liters/day).",
      "Avoid excessive salt and processed foods.",
      "Light stretching and walks to improve circulation.",
    ],
  },
  {
    id: "digestive",
    title: "Digestive Health",
    description: "Gastrointestinal assessment",
    icon: "Utensils",
    questions: [
      {
        id: "digestive-1",
        text: "Do you feel bloated or gassy after meals?",
        options: [
          { value: "rarely", label: "Rarely", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "digestive-2",
        text: "Do you experience constipation or irregular bowel movements?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "rarely", label: "Rarely", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "digestive-3",
        text: "Have you had frequent heartburn or acidity?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "after-every-meal", label: "After every meal", score: 3 },
        ],
      },
      {
        id: "digestive-4",
        text: "Do certain foods cause discomfort or intolerance?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "some", label: "Some", score: 1 },
          { value: "many", label: "Many", score: 2 },
          { value: "most", label: "Most", score: 3 },
        ],
      },
    ],
    recommendedActivities: [
      "Perform yoga poses like Cat-Cow, Wind Relieving Pose.",
      "Walk for 10–15 minutes after meals.",
      "Eat fiber-rich meals and chew food slowly.",
    ],
  },
  {
    id: "skin",
    title: "Skin Health",
    description: "Dermatological assessment",
    icon: "Smile",
    questions: [
      {
        id: "skin-1",
        text: "Have you noticed any unusual rashes, dryness, or itching?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "skin-2",
        text: "Do you experience acne, eczema, or other chronic skin conditions?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "mild", label: "Mild", score: 1 },
          { value: "moderate", label: "Moderate", score: 2 },
          { value: "severe", label: "Severe", score: 3 },
        ],
      },
      {
        id: "skin-3",
        text: "Is your skin sensitive to sunlight or cosmetics?",
        options: [
          { value: "not-sensitive", label: "Not Sensitive", score: 0 },
          { value: "slightly", label: "Slightly", score: 1 },
          { value: "very-sensitive", label: "Very Sensitive", score: 3 },
        ],
      },
      {
        id: "skin-4",
        text: "How often do you moisturize and hydrate your skin?",
        options: [
          { value: "daily", label: "Daily", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "rarely", label: "Rarely", score: 2 },
          { value: "never", label: "Never", score: 3 },
        ],
      },
    ],
    recommendedActivities: [
      "Apply moisturizer regularly.",
      "Drink at least 8 glasses of water daily.",
      "Eat foods rich in Vitamin E and omega-3.",
    ],
  },
  {
    id: "brain",
    title: "Brain Health",
    description: "Cognitive assessment",
    icon: "Brain",
    questions: [
      {
        id: "brain-1",
        text: "Do you have trouble concentrating or remembering things?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "brain-2",
        text: "Do you experience frequent headaches or migraines?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "daily", label: "Daily", score: 3 },
        ],
      },
      {
        id: "brain-3",
        text: "How many hours of sleep do you get per night?",
        options: [
          { value: "more-than-8", label: "More than 8", score: 0 },
          { value: "7-8", label: "7-8", score: 0 },
          { value: "6-7", label: "6-7", score: 1 },
          { value: "less-than-6", label: "Less than 6", score: 3 },
        ],
      },
      {
        id: "brain-4",
        text: "Do you feel stressed or anxious?",
        options: [
          { value: "rarely", label: "Rarely", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "often", label: "Often", score: 2 },
          { value: "constantly", label: "Constantly", score: 3 },
        ],
      },
      {
        id: "brain-5",
        text: "Do you engage in regular mental exercises (e.g., puzzles, reading)?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "no", label: "No", score: 2 },
        ],
      },
    ],
    recommendedActivities: [
      "Get 7-8 hours of sleep each night.",
      "Practice mindfulness or meditation.",
      "Engage in mentally stimulating activities.",
    ],
  },
  {
    id: "bones",
    title: "Bone Health",
    description: "Skeletal assessment",
    icon: "Bone",
    questions: [
      {
        id: "bones-1",
        text: "Do you experience joint pain or stiffness?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "bones-2",
        text: "Have you had any bone fractures in the past?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
      {
        id: "bones-3",
        text: "Do you consume dairy products or calcium-rich foods regularly?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "no", label: "No", score: 2 },
        ],
      },
      {
        id: "bones-4",
        text: "Do you get regular sunlight exposure?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "sometimes", label: "Sometimes", score: 1 },
          { value: "no", label: "No", score: 2 },
        ],
      },
    ],
    recommendedActivities: [
      "Ensure adequate calcium and vitamin D intake.",
      "Engage in weight-bearing exercises.",
      "Maintain a healthy weight.",
    ],
  },
  {
    id: "eyes",
    title: "Eye Health",
    description: "Visual assessment",
    icon: "Eye",
    questions: [
      {
        id: "eyes-1",
        text: "Do you experience blurry vision or difficulty seeing at night?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "eyes-2",
        text: "Do you spend a lot of time looking at screens?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
      {
        id: "eyes-3",
        text: "Do you have a family history of eye problems?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "not-sure", label: "Not Sure", score: 1 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
    ],
    recommendedActivities: [
      "Get regular eye check-ups.",
      "Take breaks from screen time.",
      "Eat foods rich in vitamins A and C.",
    ],
  },
  {
    id: "teeth",
    title: "Dental Health",
    description: "Oral assessment",
    icon: "Tooth",
    questions: [
      {
        id: "teeth-1",
        text: "Do you brush your teeth twice a day?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "no", label: "No", score: 3 },
        ],
      },
      {
        id: "teeth-2",
        text: "Do you floss your teeth daily?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "no", label: "No", score: 2 },
        ],
      },
      {
        id: "teeth-3",
        text: "Do you experience tooth sensitivity or pain?",
        options: [
          { value: "never", label: "Never", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "always", label: "Always", score: 3 },
        ],
      },
      {
        id: "teeth-4",
        text: "Do you visit the dentist regularly?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "no", label: "No", score: 2 },
        ],
      },
    ],
    recommendedActivities: ["Brush your teeth twice a day.", "Floss daily.", "Visit the dentist regularly."],
  },
  {
    id: "hair",
    title: "Hair Health",
    description: "Hair assessment",
    icon: "Scissors",
    questions: [
      {
        id: "hair-1",
        text: "Do you experience hair loss or thinning?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "mild", label: "Mild", score: 1 },
          { value: "moderate", label: "Moderate", score: 2 },
          { value: "severe", label: "Severe", score: 3 },
        ],
      },
      {
        id: "hair-2",
        text: "Do you use heat styling tools frequently?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "yes", label: "Yes", score: 2 },
        ],
      },
      {
        id: "hair-3",
        text: "Do you eat a balanced diet?",
        options: [
          { value: "yes", label: "Yes", score: 0 },
          { value: "no", label: "No", score: 2 },
        ],
      },
    ],
    recommendedActivities: ["Eat a balanced diet.", "Avoid excessive heat styling.", "Use gentle hair care products."],
  },
  {
    id: "organ-condition",
    title: "Organ Condition",
    description: "Specific organ condition assessment",
    icon: "Activity",
    questions: [
      {
        id: "organ-1",
        text: "Do you experience any pain or discomfort in your abdomen?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "mild", label: "Mild", score: 1 },
          { value: "moderate", label: "Moderate", score: 2 },
          { value: "severe", label: "Severe", score: 3 },
        ],
      },
      {
        id: "organ-2",
        text: "Have you noticed any changes in your urination pattern?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "slight", label: "Slight changes", score: 1 },
          { value: "noticeable", label: "Noticeable changes", score: 2 },
          { value: "significant", label: "Significant changes", score: 3 },
        ],
      },
      {
        id: "organ-3",
        text: "Do you have any difficulty swallowing or persistent heartburn?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "constantly", label: "Constantly", score: 3 },
        ],
      },
      {
        id: "organ-4",
        text: "Have you experienced unexplained weight loss or gain?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "slight", label: "Slight (1-3 kg)", score: 1 },
          { value: "moderate", label: "Moderate (3-5 kg)", score: 2 },
          { value: "significant", label: "Significant (>5 kg)", score: 3 },
        ],
      },
      {
        id: "organ-5",
        text: "Do you experience chronic fatigue or weakness?",
        options: [
          { value: "no", label: "No", score: 0 },
          { value: "occasionally", label: "Occasionally", score: 1 },
          { value: "frequently", label: "Frequently", score: 2 },
          { value: "constantly", label: "Constantly", score: 3 },
        ],
      },
    ],
    recommendedActivities: [
      "Consult with a healthcare professional for a thorough check-up.",
      "Keep a symptom diary to track patterns and triggers.",
      "Maintain a balanced diet and stay well-hydrated.",
      "Get regular physical activity appropriate for your condition.",
    ],
  },
]

export const getRiskLevel = (score: number, maxScore: number): RiskLevel => {
  const percentage = (score / maxScore) * 100

  if (percentage < 25) return "Low Risk"
  if (percentage < 50) return "Mild Risk"
  if (percentage < 75) return "Moderate Risk"
  return "High Risk"
}

export const getRiskColor = (riskLevel: RiskLevel): string => {
  switch (riskLevel) {
    case "Low Risk":
      return "bg-green-500"
    case "Mild Risk":
      return "bg-yellow-500"
    case "Moderate Risk":
      return "bg-orange-500"
    case "High Risk":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

export const getSummaryText = (categoryId: string, riskLevel: RiskLevel): string => {
  const summaries: Record<string, Record<RiskLevel, string>> = {
    heart: {
      "Low Risk": "Your heart health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your heart health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your heart health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your heart health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    lungs: {
      "Low Risk": "Your lung health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your lung health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your lung health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your lung health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    liver: {
      "Low Risk": "Your liver health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your liver health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your liver health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your liver health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    kidney: {
      "Low Risk": "Your kidney health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your kidney health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your kidney health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your kidney health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    digestive: {
      "Low Risk": "Your digestive health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your digestive health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk":
        "Your digestive health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk":
        "Your digestive health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    skin: {
      "Low Risk": "Your skin health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your skin health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your skin health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your skin health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    brain: {
      "Low Risk": "Your brain health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your brain health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your brain health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your brain health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    bones: {
      "Low Risk": "Your bone health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your bone health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your bone health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your bone health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    eyes: {
      "Low Risk": "Your eye health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your eye health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your eye health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your eye health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    teeth: {
      "Low Risk": "Your dental health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your dental health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your dental health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your dental health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    hair: {
      "Low Risk": "Your hair health appears to be in good condition. Continue with your healthy habits.",
      "Mild Risk": "Your hair health shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk": "Your hair health indicates several risk factors. It's advisable to make lifestyle changes.",
      "High Risk": "Your hair health shows significant concerns. Consider consulting with a healthcare professional.",
    },
    "organ-condition": {
      "Low Risk": "Your organ condition appears to be in good health. Continue with your healthy habits.",
      "Mild Risk": "Your organ condition shows some minor concerns. Consider implementing the recommended activities.",
      "Moderate Risk":
        "Your organ condition indicates several risk factors. It's advisable to make lifestyle changes and consult a healthcare professional.",
      "High Risk":
        "Your organ condition shows significant concerns. Consider consulting with a healthcare professional as soon as possible.",
    },
  }

  return summaries[categoryId]?.[riskLevel] || "Please review your health assessment results."
}
