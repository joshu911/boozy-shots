"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        asChild
        size="lg"
        className="gradient-gold text-white font-semibold shadow-lg hover:scale-105 transition-transform rounded-full"
      >
        <Link href="/book" className="flex items-center space-x-2 px-6 py-3">
          <Calendar size={20} />
          <span>Book Now</span>
        </Link>
      </Button>
    </div>
  )
}
