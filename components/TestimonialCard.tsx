import { Card, CardContent } from "./ui/card";

export function TestimonialCard({ quote, author, role }: {
  quote: string;
  author: string;
  role: string;
}) {
    return (
      <Card className="overflow-hidden border-none shadow-md">
        <CardContent className="p-6 space-y-4">
          <div className="h-10 w-10 rounded-full bg-muted mb-4"></div>
          <p className="italic text-muted-foreground">{quote}</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </CardContent>
      </Card>
    )
  }