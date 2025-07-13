"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, FileText, Vote, Wallet, Map, Shield, UserPlus, Menu, Leaf } from "lucide-react"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/submit-proposal", label: "Submit Proposal", icon: FileText },
  { href: "/proposals", label: "Proposals & Voting", icon: Vote },
  { href: "/wallet", label: "My Wallet", icon: Wallet },
  { href: "/map", label: "Map View", icon: Map },
  { href: "/ethics", label: "Ethics Council", icon: Shield },
  { href: "/onboarding", label: "Join as Farmer", icon: UserPlus },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-green-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-green-900">
            <Leaf className="h-6 w-6 text-green-600" />
            ClimateShield
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-50">
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center gap-2 font-bold text-green-900 mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                  ClimateShield
                </div>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-green-700 hover:text-green-900 hover:bg-green-50"
                    >
                      <item.icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
