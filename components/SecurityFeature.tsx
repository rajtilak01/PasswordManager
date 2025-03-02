import { CheckCircle2 } from "lucide-react"

export function SecurityFeature({ title, children } : {
    title: string,
    children: React.ReactNode
}) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-muted-foreground">{children}</p>
      </div>
    </li>
  )
}