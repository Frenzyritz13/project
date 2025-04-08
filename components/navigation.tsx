"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Palette, Map, Waves, Briefcase, Code, Mic } from "lucide-react"

const navigation = [
  { name: "Art", href: "/art", icon: Palette },
  { name: "Travel", href: "/travel", icon: Map },
  { name: "Scuba", href: "/scuba", icon: Waves },
  { name: "Career", href: "/career", icon: Briefcase },
  { name: "Tech", href: "/tech", icon: Code },
  { name: "Talks", href: "/talks", icon: Mic },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
          <span className="font-bold">Ritvi FYI</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}