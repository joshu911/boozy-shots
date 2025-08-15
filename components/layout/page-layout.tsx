import type React from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-background ${className}`}>
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
