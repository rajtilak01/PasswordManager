import { Card, CardContent } from "./ui/card";

export function FeatureCard({ icon, title, description }: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6 space-y-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    )
  }
  