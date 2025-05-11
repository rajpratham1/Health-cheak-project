import { Stethoscope } from "lucide-react"

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.03] dark:opacity-[0.02] pointer-events-none">
      <div className="absolute inset-0 flex flex-wrap gap-20 p-10">
        {Array.from({ length: 60 }).map((_, i) => (
          <Stethoscope key={i} className="h-12 w-12 text-blue-500" />
        ))}
      </div>
    </div>
  )
}
