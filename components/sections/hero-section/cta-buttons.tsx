import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTAButtons() {
  return (
    <div className="space-x-4">
      <Button asChild>
        <Link href="/career">View Resume</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/contact">Get in Touch</Link>
      </Button>
    </div>
  )
}