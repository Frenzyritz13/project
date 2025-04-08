import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { LucideIcon } from "lucide-react"

interface HighlightCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function HighlightCard({ title, description, icon: Icon, href }: HighlightCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <Link href={href}>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Icon className="h-6 w-6" />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}