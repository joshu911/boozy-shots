"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem("boozy-shots-cookies-accepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("boozy-shots-cookies-accepted", "true")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("boozy-shots-cookies-accepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4">
      <div className="container mx-auto">
        <div className="glass border-[var(--warm-gold)]/20 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              We use cookies to enhance your experience and analyze our traffic.{" "}
              <a href="/privacy" className="text-[var(--warm-gold)] hover:underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleAccept}
              size="sm"
              className="gradient-gold text-white hover:scale-105 transition-transform"
            >
              Accept
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
              className="border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white bg-transparent"
            >
              Decline
            </Button>
            <Button onClick={handleDecline} variant="ghost" size="sm" className="p-2">
              <X size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
