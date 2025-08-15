"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wine } from "lucide-react"

export function AgeGateModal() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem("boozy-shots-age-verified")
    if (!hasVisited) {
      setIsVisible(true)
      document.body.style.overflow = "hidden"
    }
  }, [])

  const handleConfirm = () => {
    localStorage.setItem("boozy-shots-age-verified", "true")
    setIsVisible(false)
    document.body.style.overflow = "unset"
  }

  const handleDecline = () => {
    window.location.href = "https://www.google.com"
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="glass border-[var(--warm-gold)]/30 max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
            <Wine size={32} className="text-white" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-primary mb-4">Welcome to Boozy Shots</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            You must be 18 years or older to enter this website. Please confirm your age to continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleConfirm}
              className="flex-1 gradient-gold text-white font-semibold hover:scale-105 transition-transform"
            >
              I am 18 or older
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white bg-transparent"
            >
              I am under 18
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
