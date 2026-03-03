import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Brain, Apple, Dumbbell, Droplet, Moon, Smile, Leaf, Clock, Sparkles, AlertCircle, CheckCircle } from "lucide-react"

export default function HealthyLivingGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">🧠 Healthy Living Guide</h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">Practical Knowledge for a Long, Active Life</p>
      </div>

      {/* IMPORTANT DISCLAIMERS AND SAFETY INFORMATION */}
      <div className="mb-12 space-y-4">
        <Alert className="border-amber-500 bg-amber-50 dark:bg-amber-950/30">
          <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-900 dark:text-amber-200">
            <strong>Important Medical Disclaimer:</strong> This guide provides general health and wellness information 
            only. It is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a 
            qualified healthcare provider before making significant health changes or if you have health concerns.
          </AlertDescription>
        </Alert>

        <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle className="h-5 w-5" />
              When to See a Healthcare Professional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold mb-3 text-sm text-emerald-900 dark:text-emerald-100">Seek Immediate Care For:</h4>
                <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <li>• Severe chest pain or pressure</li>
                  <li>• Difficulty breathing or shortness of breath</li>
                  <li>• Signs of stroke (facial drooping, arm weakness, speech difficulty)</li>
                  <li>• Severe allergic reactions</li>
                  <li>• Severe bleeding or injuries</li>
                  <li>• Loss of consciousness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm text-emerald-900 dark:text-emerald-100">Schedule an Appointment For:</h4>
                <ul className="space-y-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <li>• Persistent symptoms lasting 2+ weeks</li>
                  <li>• Uncontrolled pain or discomfort</li>
                  <li>• Significant weight changes</li>
                  <li>• Recurring headaches or dizziness</li>
                  <li>• Sleep problems or fatigue</li>
                  <li>• Annual health check-ups</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="mb-8 flex w-full flex-wrap justify-center gap-2">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="diet" className="flex items-center gap-2">
            <Apple className="h-4 w-4" />
            <span>Diet</span>
          </TabsTrigger>
          <TabsTrigger value="exercise" className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4" />
            <span>Exercise</span>
          </TabsTrigger>
          <TabsTrigger value="hydration" className="flex items-center gap-2">
            <Droplet className="h-4 w-4" />
            <span>Hydration</span>
          </TabsTrigger>
          <TabsTrigger value="hygiene" className="flex items-center gap-2">
            <Smile className="h-4 w-4" />
            <span>Hygiene</span>
          </TabsTrigger>
          <TabsTrigger value="mindful" className="flex items-center gap-2">
            <Brain className="h-4 w-4" />
            <span>Mindful Eating</span>
          </TabsTrigger>
          <TabsTrigger value="superfoods" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span>Superfoods</span>
          </TabsTrigger>
          <TabsTrigger value="routine" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Routine</span>
          </TabsTrigger>
          <TabsTrigger value="mental" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>Mental Health</span>
          </TabsTrigger>
          <TabsTrigger value="sleep" className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            <span>Sleep</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Why Health Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Health is not just the absence of disease, it's a state of complete physical, mental, and social
                well-being. A healthy body supports your goals, boosts productivity, and prolongs your life span.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow">
                  <div className="mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Physical Health</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Proper nutrition, regular exercise, and adequate rest keep your body functioning optimally.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow">
                  <div className="mb-2 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Mental Health</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Managing stress, practicing mindfulness, and maintaining social connections support cognitive
                    function.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow">
                  <div className="mb-2 flex items-center gap-2">
                    <Smile className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold">Social Health</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building meaningful relationships and engaging with your community contributes to overall wellbeing.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="mb-4 text-muted-foreground">
                  This guide provides practical knowledge to help you maintain and improve your health in all aspects of
                  life.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diet">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">The Role of Diet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Food is fuel for your body. Eating right helps maintain energy levels, strengthen immunity, and support
                brain and muscle function.
              </p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">What a Good Diet Includes</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                      <p>
                        <span className="font-medium">Proteins (build muscle):</span> lentils, tofu, chicken, eggs
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                      <p>
                        <span className="font-medium">Carbs (energy):</span> brown rice, millets, sweet potatoes
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                      <p>
                        <span className="font-medium">Fats (hormonal health):</span> nuts, ghee, seeds
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                      <p>
                        <span className="font-medium">Vitamins & Minerals:</span> vegetables, fruits, whole grains
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Seasonal Diet in India</h3>

                <div className="mb-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-400">🌸 Spring (Feb–Apr)</h4>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Eat:</span> Green leafy veggies, amla, carrots
                  </p>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Why:</span> Detox the body post-winter
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Avoid:</span> Heavy, oily food
                  </p>
                </div>

                <div className="mb-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                  <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-400">🔥 Summer (May–Jul)</h4>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Eat:</span> Curd, cucumber, watermelon, mint
                  </p>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Why:</span> Cool the body and stay hydrated
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Avoid:</span> Excess spice, fried food
                  </p>
                </div>

                <div className="mb-4 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-950/30">
                  <h4 className="mb-2 font-semibold text-emerald-800 dark:text-emerald-400">🌧 Monsoon (Aug–Sep)</h4>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Eat:</span> Ginger, turmeric milk, steamed veggies
                  </p>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Why:</span> Prevent infections and support immunity
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Avoid:</span> Raw foods from outside
                  </p>
                </div>

                <div className="mb-4 rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                  <h4 className="mb-2 font-semibold text-orange-800 dark:text-orange-400">🍂 Autumn (Oct–Nov)</h4>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Eat:</span> Apple, pear, sabudana, ghee
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Why:</span> Improve digestion and immunity
                  </p>
                </div>

                <div className="rounded-lg bg-slate-50 p-4 dark:bg-slate-950/30">
                  <h4 className="mb-2 font-semibold text-slate-800 dark:text-slate-400">❄ Winter (Dec–Jan)</h4>
                  <p className="mb-1 text-sm">
                    <span className="font-medium">Eat:</span> Dry fruits, jaggery, sesame, bajra
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Why:</span> Generate heat and boost strength
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Foods for Specific Body Parts</h3>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <h4 className="mb-2 font-semibold text-red-800 dark:text-red-400">Heart</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Walnuts (omega-3 fatty acids)</li>
                      <li>Oats (fiber for cholesterol)</li>
                      <li>Berries (antioxidants)</li>
                      <li>Flaxseeds (heart-healthy fats)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-400">Brain</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Fatty fish (DHA for brain cells)</li>
                      <li>Turmeric (anti-inflammatory)</li>
                      <li>Dark chocolate (blood flow)</li>
                      <li>Pumpkin seeds (zinc, magnesium)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950/30">
                    <h4 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-400">Liver</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Garlic (cleansing properties)</li>
                      <li>Green tea (antioxidants)</li>
                      <li>Beetroot (betaine)</li>
                      <li>Leafy greens (chlorophyll)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Kidneys</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Cranberries (prevent UTIs)</li>
                      <li>Cabbage (phytonutrients)</li>
                      <li>Blueberries (antioxidants)</li>
                      <li>Red bell peppers (vitamin C, A)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                    <h4 className="mb-2 font-semibold text-orange-800 dark:text-orange-400">Digestive System</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Yogurt (probiotics)</li>
                      <li>Ginger (anti-nausea)</li>
                      <li>Papaya (digestive enzymes)</li>
                      <li>Fennel seeds (reduce bloating)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-pink-50 p-4 dark:bg-pink-950/30">
                    <h4 className="mb-2 font-semibold text-pink-800 dark:text-pink-400">Skin</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Avocados (healthy fats)</li>
                      <li>Sweet potatoes (beta-carotene)</li>
                      <li>Tomatoes (lycopene)</li>
                      <li>Nuts (vitamin E)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Vegetarian vs Non-Vegetarian Diets</h3>

                <div className="mb-6">
                  <h4 className="mb-2 font-medium">Vegetarian Protein Sources</h4>
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Lentils (dal) - 9g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Chickpeas - 19g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Tofu - 8g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Paneer - 18g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Greek yogurt - 10g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Quinoa - 4g/100g</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2 font-medium">Non-Vegetarian Protein Sources</h4>
                  <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Chicken breast - 31g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Eggs - 13g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Fish - 20-25g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Lean beef - 26g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Turkey - 29g/100g</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Salmon - 20g/100g</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exercise">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Exercise & Movement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Regular movement improves cardiovascular health, flexibility, and boosts mood through endorphins.</p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Ideal Time to Exercise</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-400">Morning</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-600"></div>
                        <span>Fresh air and natural light help regulate circadian rhythm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-600"></div>
                        <span>Boosts energy and metabolism for the day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-amber-600"></div>
                        <span>Fewer distractions and interruptions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-indigo-50 p-4 dark:bg-indigo-950/30">
                    <h4 className="mb-2 font-semibold text-indigo-800 dark:text-indigo-400">Evening</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Body temperature and muscle strength peak</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Helps relieve stress accumulated during the day</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                        <span>Can improve sleep quality (if done 2-3 hours before bed)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Types of Exercise</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left font-semibold">Type</th>
                        <th className="p-2 text-left font-semibold">Examples</th>
                        <th className="p-2 text-left font-semibold">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Cardiovascular</td>
                        <td className="p-2">Running, swimming, cycling</td>
                        <td className="p-2">Heart health, fat burn</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Strength</td>
                        <td className="p-2">Weight lifting, push-ups</td>
                        <td className="p-2">Muscle growth, metabolism boost</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Flexibility</td>
                        <td className="p-2">Yoga, stretching</td>
                        <td className="p-2">Injury prevention, calm mind</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Balance</td>
                        <td className="p-2">Tai chi, one-leg stance</td>
                        <td className="p-2">Stability and posture</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">When to Join a Gym</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">1</span>
                    </div>
                    <span>You're not disciplined enough at home</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">2</span>
                    </div>
                    <span>You want muscle building with weights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">3</span>
                    </div>
                    <span>You need community support or professional guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">4</span>
                    </div>
                    <span>Your job is sedentary and needs structured physical effort</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hydration">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Hydration: Why and How</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Water is essential for detoxification, maintaining temperature, skin health, and energy transport.</p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Benefits of Proper Hydration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Droplet className="mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Improved Cognitive Function</p>
                        <p className="text-sm text-muted-foreground">
                          Even mild dehydration can impair attention, memory, and mood.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplet className="mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Physical Performance</p>
                        <p className="text-sm text-muted-foreground">
                          Proper hydration maintains blood volume and regulates body temperature during exercise.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplet className="mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Digestive Health</p>
                        <p className="text-sm text-muted-foreground">
                          Water helps dissolve nutrients and move food through the digestive tract.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Droplet className="mt-0.5 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Detoxification</p>
                        <p className="text-sm text-muted-foreground">
                          Water helps kidneys filter waste and supports liver function.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Hydration Tips</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Drink 8–10 glasses/day</p>
                        <p className="text-sm text-muted-foreground">
                          Adjust based on activity level, climate, and body size.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Start your day with warm water</p>
                        <p className="text-sm text-muted-foreground">
                          Helps activate digestive system and flush toxins.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Include coconut water, buttermilk in summers</p>
                        <p className="text-sm text-muted-foreground">
                          Natural electrolytes help maintain hydration in hot weather.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Eat water-rich fruits like watermelon, cucumber</p>
                        <p className="text-sm text-muted-foreground">
                          About 20% of daily water intake comes from food.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Signs of Dehydration</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Thirst</p>
                    <p className="text-sm">By the time you feel thirsty, you're already mildly dehydrated.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Dark Urine</p>
                    <p className="text-sm">Urine should be pale yellow; darker color indicates dehydration.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Fatigue</p>
                    <p className="text-sm">Dehydration can cause tiredness and low energy levels.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Headache</p>
                    <p className="text-sm">Dehydration can trigger or worsen headaches.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Dry Skin</p>
                    <p className="text-sm">Skin loses elasticity and may feel dry or flaky.</p>
                  </div>
                  <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <p className="font-medium text-amber-800 dark:text-amber-400">Dizziness</p>
                    <p className="text-sm">Severe dehydration can cause lightheadedness.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hygiene">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Hygiene: Physical & Mental</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Cleanliness reduces disease and increases self-confidence. Both physical and mental hygiene are
                essential for overall wellbeing.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Physical Hygiene</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Bathe daily</p>
                        <p className="text-sm text-muted-foreground">
                          Removes sweat, oil, and dead skin cells that can harbor bacteria.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Brush twice</p>
                        <p className="text-sm text-muted-foreground">
                          Morning and night brushing prevents cavities and gum disease.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Trim nails, wear clean clothes</p>
                        <p className="text-sm text-muted-foreground">
                          Prevents dirt accumulation and reduces infection risk.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Wash hands frequently</p>
                        <p className="text-sm text-muted-foreground">
                          Especially before meals and after using the restroom.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Mental Hygiene</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Avoid toxic content/people</p>
                        <p className="text-sm text-muted-foreground">
                          Limit exposure to negative influences that drain your energy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Meditate or journal regularly</p>
                        <p className="text-sm text-muted-foreground">Process emotions and clear mental clutter.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Take screen breaks</p>
                        <p className="text-sm text-muted-foreground">Reduce digital overload and eye strain.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-purple-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Practice digital detox</p>
                        <p className="text-sm text-muted-foreground">
                          Set aside time to disconnect completely from devices.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Benefits of Good Hygiene</h3>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Disease Prevention</p>
                    <p className="text-sm">Reduces risk of infections and illness.</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Social Acceptance</p>
                    <p className="text-sm">Good hygiene improves social interactions.</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Self-Confidence</p>
                    <p className="text-sm">Feeling clean improves self-image and confidence.</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Mental Clarity</p>
                    <p className="text-sm">Mental hygiene reduces stress and improves focus.</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Emotional Balance</p>
                    <p className="text-sm">Regular mental hygiene practices stabilize mood.</p>
                  </div>
                  <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                    <p className="font-medium text-blue-800 dark:text-blue-400">Better Sleep</p>
                    <p className="text-sm">Clean body and mind promote restful sleep.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mindful">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Mindful Eating</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>Eating with awareness improves digestion, weight control, and reduces overeating.</p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">How To Eat Mindfully</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                      <span className="text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Sit down, no screens</p>
                      <p className="text-sm text-muted-foreground">
                        Give your food your full attention. Avoid TV, phones, or computers while eating.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                      <span className="text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Chew 20–30 times per bite</p>
                      <p className="text-sm text-muted-foreground">
                        Thorough chewing aids digestion and helps you appreciate flavors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                      <span className="text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Pause between servings</p>
                      <p className="text-sm text-muted-foreground">
                        Wait 5-10 minutes before taking seconds to allow fullness signals to reach your brain.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                      <span className="text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Identify if you're hungry or just bored</p>
                      <p className="text-sm text-muted-foreground">
                        Before eating, ask yourself if you're physically hungry or eating for emotional reasons.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Benefits of Mindful Eating</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Better digestion and nutrient absorption</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Natural portion control without strict dieting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Reduced bloating and digestive discomfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Greater satisfaction from meals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Healthier relationship with food</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-green-600"></div>
                      <span>Weight management without counting calories</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Common Mindless Eating Triggers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Eating while watching TV or using devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Eating directly from packages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Eating too quickly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Emotional eating (stress, boredom, sadness)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Environmental cues (seeing food advertisements)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Social pressure ("clean your plate" mentality)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Mindful Eating Exercise</h3>
                <p className="mb-4">Try this simple exercise to practice mindful eating:</p>
                <ol className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">1</span>
                    </div>
                    <p>Take a small piece of food (like a raisin or slice of fruit).</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">2</span>
                    </div>
                    <p>Look at it carefully, noticing its color, texture, and shape.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">3</span>
                    </div>
                    <p>Smell it and notice any aromas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">4</span>
                    </div>
                    <p>Place it in your mouth but don't chew yet. Notice the texture and initial taste.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">5</span>
                    </div>
                    <p>Chew slowly, noticing how the flavor changes and how your body responds.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">6</span>
                    </div>
                    <p>Swallow consciously and notice the sensations as the food travels down.</p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="superfoods">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Superfoods of India</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>India has a rich tradition of nutrient-dense foods that offer exceptional health benefits.</p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Superfoods and Their Benefits</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left font-semibold">Superfood</th>
                        <th className="p-2 text-left font-semibold">Benefits</th>
                        <th className="p-2 text-left font-semibold">How to Use</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Turmeric</td>
                        <td className="p-2">Anti-inflammatory, heals wounds, improves digestion</td>
                        <td className="p-2">Add to milk, curries, or take as supplement</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Amla (Indian Gooseberry)</td>
                        <td className="p-2">Vitamin C boost, immunity, skin health</td>
                        <td className="p-2">Eat raw, juice, or as powder in water</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Sattu</td>
                        <td className="p-2">Cooling, protein-rich, gut-friendly</td>
                        <td className="p-2">Mix with water/milk, make paratha or laddoo</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Ghee</td>
                        <td className="p-2">Good fat, boosts digestion, joint health</td>
                        <td className="p-2">Use for cooking or add to warm food</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Moringa (Drumstick)</td>
                        <td className="p-2">Rich in iron, anti-oxidants, anti-inflammatory</td>
                        <td className="p-2">Add leaves to soups, make sabzi, or use powder</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">Flax Seeds</td>
                        <td className="p-2">Omega-3s, brain and heart health, fiber</td>
                        <td className="p-2">Add ground seeds to smoothies or sprinkle on food</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">Moong Dal</td>
                        <td className="p-2">Easy to digest, protein source, balances doshas</td>
                        <td className="p-2">Make dal, khichdi, or sprout for salads</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Seasonal Superfoods</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium">Summer</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                          <span>Coconut: Hydrating, cooling, electrolyte-rich</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                          <span>Mango: Vitamin A, C, antioxidants</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                          <span>Mint: Cooling, digestive aid, antimicrobial</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">Winter</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Sesame seeds: Warming, calcium-rich</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Jaggery: Iron, warming properties</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Bajra: Warming grain, high in minerals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Ayurvedic Superfoods</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-medium">For Vata Balance</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                          <span>Ghee: Lubricating, nourishing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                          <span>Almonds: Grounding, protein-rich</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                          <span>Sweet potatoes: Warming, stabilizing</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">For Pitta Balance</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                          <span>Cucumber: Cooling, hydrating</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                          <span>Coconut: Cooling, sweet</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-600"></div>
                          <span>Mint: Refreshing, digestive aid</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium">For Kapha Balance</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                          <span>Honey: Warming, detoxifying</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                          <span>Ginger: Stimulating, warming</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                          <span>Millet: Light, easy to digest</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">How to Incorporate Superfoods</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Start small</p>
                      <p className="text-sm text-muted-foreground">
                        Add one new superfood to your diet each week rather than changing everything at once.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Blend into familiar foods</p>
                      <p className="text-sm text-muted-foreground">
                        Add powders like turmeric or amla to smoothies, soups, or curries.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Prepare in advance</p>
                      <p className="text-sm text-muted-foreground">
                        Make superfood mixes like trail mix with nuts and seeds for easy snacking.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                      <span className="text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Follow seasonal wisdom</p>
                      <p className="text-sm text-muted-foreground">
                        Prioritize superfoods that are in season for maximum nutrition and affordability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="routine">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Balanced Routine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>A structured daily routine helps maintain physical health, mental clarity, and productivity.</p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Ideal Daily Schedule (Students/Working Professionals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="p-2 text-left font-semibold">Time</th>
                        <th className="p-2 text-left font-semibold">Activity</th>
                        <th className="p-2 text-left font-semibold">Benefits</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-medium">6–7 AM</td>
                        <td className="p-2">Wake up + water + walk/stretch</td>
                        <td className="p-2">Sets circadian rhythm, hydrates after sleep</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">7–8 AM</td>
                        <td className="p-2">Healthy breakfast</td>
                        <td className="p-2">Fuels body for the day, stabilizes blood sugar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">9–12 PM</td>
                        <td className="p-2">Productive work time</td>
                        <td className="p-2">Peak cognitive function for most people</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">1–2 PM</td>
                        <td className="p-2">Balanced lunch + short walk</td>
                        <td className="p-2">Refuels body, walk aids digestion</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">5–6 PM</td>
                        <td className="p-2">Light snack</td>
                        <td className="p-2">Maintains energy, prevents overeating at dinner</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">6–7 PM</td>
                        <td className="p-2">Workout/yoga</td>
                        <td className="p-2">Physical activity, stress relief</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-medium">8 PM</td>
                        <td className="p-2">Dinner (light)</td>
                        <td className="p-2">Early dinner aids digestion before sleep</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-medium">10 PM</td>
                        <td className="p-2">Sleep (device-free 30 mins before)</td>
                        <td className="p-2">Adequate rest, blue light reduction</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Morning Routine Essentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Hydration First</p>
                        <p className="text-sm text-muted-foreground">
                          Drink a glass of water before anything else to rehydrate after sleep.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Movement</p>
                        <p className="text-sm text-muted-foreground">
                          Even 5-10 minutes of stretching or walking wakes up your body.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Mindfulness</p>
                        <p className="text-sm text-muted-foreground">
                          Brief meditation or deep breathing sets a calm tone for the day.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Nutritious Breakfast</p>
                        <p className="text-sm text-muted-foreground">
                          Include protein, complex carbs, and healthy fats for sustained energy.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Evening Routine Essentials</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Digital Sunset</p>
                        <p className="text-sm text-muted-foreground">
                          Reduce screen time 1-2 hours before bed to improve sleep quality.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Light Dinner</p>
                        <p className="text-sm text-muted-foreground">
                          Eat at least 2-3 hours before bedtime for better digestion during sleep.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Reflection</p>
                        <p className="text-sm text-muted-foreground">
                          Journal or mentally review your day to process experiences.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Relaxation Ritual</p>
                        <p className="text-sm text-muted-foreground">
                          Reading, gentle stretching, or warm bath signals your body it's time to sleep.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Weekend Routine Adjustments</h3>
                <div className="space-y-4">
                  <p>
                    While it's tempting to completely break routine on weekends, maintaining some structure helps
                    prevent "social jet lag" while still allowing relaxation.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                      <h4 className="mb-2 font-semibold text-blue-800 dark:text-blue-400">Do's</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Wake up within 1 hour of your weekday time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Maintain regular meal times</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Include some form of physical activity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-blue-600"></div>
                          <span>Spend time in nature</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                      <h4 className="mb-2 font-semibold text-red-800 dark:text-red-400">Don'ts</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                          <span>Sleep in more than 2 hours past normal wake time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                          <span>Skip meals or drastically change eating patterns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                          <span>Spend the entire weekend indoors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                          <span>Stay up extremely late Sunday night</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mental">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Mental Health & Stress Relief</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Mental health is just as important as physical health. Regular practices can help manage stress and
                improve overall wellbeing.
              </p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Stress Management Techniques</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Deep Breathing</h4>
                    <p className="mb-2 text-sm">
                      Practice 4-7-8 breathing: inhale for 4 counts, hold for 7, exhale for 8.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Benefits: Activates parasympathetic nervous system, reduces anxiety.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Box Breathing</h4>
                    <p className="mb-2 text-sm">Inhale for 4 counts, hold for 4, exhale for 4, hold for 4. Repeat.</p>
                    <p className="text-sm text-muted-foreground">Benefits: Improves concentration, calms the mind.</p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Progressive Relaxation</h4>
                    <p className="mb-2 text-sm">Tense and then release each muscle group from toes to head.</p>
                    <p className="text-sm text-muted-foreground">
                      Benefits: Releases physical tension, improves body awareness.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Mindfulness Meditation</h4>
                    <p className="mb-2 text-sm">Focus on your breath or sensations without judgment.</p>
                    <p className="text-sm text-muted-foreground">
                      Benefits: Reduces rumination, improves emotional regulation.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Nature Walks</h4>
                    <p className="mb-2 text-sm">
                      Spend time walking outdoors, paying attention to natural surroundings.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Benefits: Reduces cortisol, improves mood and creativity.
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-950/30">
                    <h4 className="mb-2 font-semibold text-purple-800 dark:text-purple-400">Gratitude Practice</h4>
                    <p className="mb-2 text-sm">Write down 3 things you're grateful for each day.</p>
                    <p className="text-sm text-muted-foreground">
                      Benefits: Shifts focus from negative to positive, improves outlook.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Digital Wellbeing</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Limit Social Media Time</p>
                        <p className="text-sm text-muted-foreground">
                          Set specific times to check social media rather than constant scrolling.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Digital Sunset</p>
                        <p className="text-sm text-muted-foreground">
                          Turn off screens 1-2 hours before bedtime to improve sleep quality.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Notification Management</p>
                        <p className="text-sm text-muted-foreground">
                          Turn off non-essential notifications to reduce distractions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Digital Detox Days</p>
                        <p className="text-sm text-muted-foreground">
                          Schedule regular days (or hours) completely free from digital devices.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Social Connection</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                        <span className="text-xs">1</span>
                      </div>
                      <div>
                        <p className="font-medium">Quality Over Quantity</p>
                        <p className="text-sm text-muted-foreground">
                          Focus on meaningful interactions rather than superficial connections.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                        <span className="text-xs">2</span>
                      </div>
                      <div>
                        <p className="font-medium">Regular Check-ins</p>
                        <p className="text-sm text-muted-foreground">
                          Schedule regular time with friends and family, even if brief.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                        <span className="text-xs">3</span>
                      </div>
                      <div>
                        <p className="font-medium">Active Listening</p>
                        <p className="text-sm text-muted-foreground">
                          Practice being fully present in conversations without planning your response.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800">
                        <span className="text-xs">4</span>
                      </div>
                      <div>
                        <p className="font-medium">Community Involvement</p>
                        <p className="text-sm text-muted-foreground">
                          Join groups or volunteer for causes you care about to find like-minded people.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">When to Seek Help</h3>
                <p className="mb-4">
                  It's important to recognize when self-help strategies aren't enough. Consider professional support if
                  you experience:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                    <span>Persistent feelings of sadness, anxiety, or emptiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                    <span>Significant changes in sleep, appetite, or energy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                    <span>Difficulty performing daily tasks or enjoying activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                    <span>Withdrawal from relationships or social activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                    <span>Thoughts of harming yourself or others</span>
                  </li>
                </ul>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-950/30">
                  <p className="text-sm text-blue-800 dark:text-blue-400">
                    Remember: Seeking help is a sign of strength, not weakness. Mental health professionals are trained
                    to provide effective support and strategies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sleep">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Sleep: Nature's Healer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Sleep repairs the body and resets your mind. Quality sleep is essential for physical health, cognitive
                function, and emotional wellbeing.
              </p>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Sleep Essentials</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                      <span className="text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Aim for 7–9 hours</p>
                      <p className="text-sm text-muted-foreground">
                        Most adults need 7-9 hours of sleep for optimal health and functioning.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                      <span className="text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Go to bed and wake up same time daily</p>
                      <p className="text-sm text-muted-foreground">
                        Consistent sleep-wake times regulate your body's internal clock.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                      <span className="text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Avoid caffeine 6 hours before sleep</p>
                      <p className="text-sm text-muted-foreground">
                        Caffeine has a half-life of 5-6 hours and can disrupt sleep quality.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-800">
                      <span className="text-xs">4</span>
                    </div>
                    <div>
                      <p className="font-medium">Keep the room dark and cool</p>
                      <p className="text-sm text-muted-foreground">
                        Optimal sleep temperature is around 65-68°F (18-20°C).
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Benefits of Quality Sleep</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Improved memory and cognitive function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Enhanced immune system function</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Better emotional regulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Reduced inflammation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Balanced hormones and metabolism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Improved physical performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
                      <span>Lower risk of chronic diseases</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                  <h3 className="mb-4 text-xl font-semibold">Common Sleep Disruptors</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Blue light from screens before bedtime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Irregular sleep schedule</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Caffeine, alcohol, or heavy meals before bed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Stress and anxiety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Uncomfortable sleep environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Lack of physical activity during the day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-red-600"></div>
                      <span>Medical conditions (sleep apnea, chronic pain)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 text-card-foreground shadow">
                <h3 className="mb-4 text-xl font-semibold">Creating a Sleep-Friendly Routine</h3>
                <div className="space-y-4">
                  <h4 className="font-medium">1-2 Hours Before Bed:</h4>
                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">Dim lights to signal your body it's evening</li>
                    <li className="list-disc">Avoid screens or use blue light filters</li>
                    <li className="list-disc">Stop eating heavy meals</li>
                    <li className="list-disc">Engage in relaxing activities (reading, gentle stretching)</li>
                  </ul>

                  <h4 className="font-medium">30 Minutes Before Bed:</h4>
                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">Complete your bedtime hygiene routine</li>
                    <li className="list-disc">Practice relaxation techniques (deep breathing, meditation)</li>
                    <li className="list-disc">Keep your bedroom cool, dark, and quiet</li>
                    <li className="list-disc">Put away all electronic devices</li>
                  </ul>

                  <div className="mt-4 rounded-lg bg-amber-50 p-4 dark:bg-amber-950/30">
                    <h4 className="mb-2 font-semibold text-amber-800 dark:text-amber-400">If You Can't Sleep</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      If you can't fall asleep within 20 minutes, get up and do something relaxing in dim light until
                      you feel sleepy. Avoid checking the time repeatedly, as this can increase anxiety about not
                      sleeping.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center">
        <Link href="/assessment">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Take Health Assessment
          </Button>
        </Link>
      </div>
    </div>
  )
}
