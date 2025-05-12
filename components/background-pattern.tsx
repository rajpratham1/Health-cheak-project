import { Stethoscope } from "lucide-react"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.05] dark:opacity-[0.03] pointer-events-none">
      <div className="absolute inset-0 flex flex-wrap gap-32 p-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <Stethoscope key={i} className="h-16 w-16 text-blue-600" />
        ))}
      </div>
    </div>
  )
}
