"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageLayout } from "@/components/layout/page-layout"
import { ChevronLeft, ChevronRight, Star, Clock, Users, Award } from "lucide-react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentDrink, setCurrentDrink] = useState(0)

  const featuredDrinks = [
    {
      name: "Golden Manhattan",
      description: "Premium bourbon, sweet vermouth, and a touch of gold leaf",
      price: "250 Ksh",
      image: "/placeholder-4ls5v.png",
    },
    {
      name: "Smoky Old Fashioned",
      description: "Aged whiskey with house-made bitters and smoked cherry",
      price: "300 Ksh",
      image: "/placeholder-rfta3 .png",
    },
    {
      name: "Lime Gin Fizz",
      description: "Artisanal gin, lavender syrup, and fresh citrus foam",
      price: "200 Ksh",
      image: "/placeholder-y47n8.png",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDrink((prev) => (prev + 1) % featuredDrinks.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [featuredDrinks.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-bg")
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5
        ;(element as HTMLElement).style.transform = `translateY(${rate}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextDrink = () => {
    setCurrentDrink((prev) => (prev + 1) % featuredDrinks.length)
  }

  const prevDrink = () => {
    setCurrentDrink((prev) => (prev - 1 + featuredDrinks.length) % featuredDrinks.length)
  }

  if (!mounted) return null

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center noise-texture overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/bg-video.mp4"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-card/80 to-background/90 backdrop-blur-sm" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--warm-gold)] rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--amber)] rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <div className="mb-8">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-gold mb-6 animate-slide-up">
              Boozy Shots
            </h1>
            <p className="font-sans text-2xl md:text-3xl text-foreground mb-8 animate-slide-up delay-200">
              Sipping and Vibing
            </p>
          </div>

          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-400">
            Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere. Where
            every sip tells a story and every moment becomes a memory.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-600">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
            >
              <Link href="/book">Reserve Your Table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white px-8 py-4 text-lg transition-all bg-transparent"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Drinks Carousel */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Signature Cocktails</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Handcrafted with premium spirits and the finest ingredients
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="glass border-[var(--warm-gold)]/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-80 md:h-96">
                    <img
                      src={featuredDrinks[currentDrink].image || "/placeholder.svg"}
                      alt={featuredDrinks[currentDrink].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="font-serif text-3xl font-bold text-gradient-gold mb-4">
                      {featuredDrinks[currentDrink].name}
                    </h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {featuredDrinks[currentDrink].description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl font-bold text-[var(--warm-gold)]">
                        {featuredDrinks[currentDrink].price}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-[var(--warm-gold)] text-[var(--warm-gold)]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Carousel Controls */}
            <button
              onClick={prevDrink}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-[var(--warm-gold)] hover:text-white transition-all"
              aria-label="Previous cocktail"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextDrink}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:bg-[var(--warm-gold)] hover:text-white transition-all"
              aria-label="Next cocktail"
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredDrinks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDrink(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentDrink ? "bg-[var(--warm-gold)]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to cocktail ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:bg-[var(--warm-gold)] transition-all">
                <Clock size={32} className="text-[var(--warm-gold)] group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Premium Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every detail crafted to perfection, from our handpicked ingredients to our elegant atmosphere.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:bg-[var(--warm-gold)] transition-all">
                <Users size={32} className="text-[var(--warm-gold)] group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Expert Mixologists</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our skilled bartenders create innovative cocktails that push the boundaries of flavor and presentation.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:bg-[var(--warm-gold)] transition-all">
                <Award size={32} className="text-[var(--warm-gold)] group-hover:text-white" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Award Winning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recognized for excellence in hospitality, cocktail innovation, and culinary artistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-[var(--charcoal)] to-[var(--espresso)] text-[var(--ivory)] noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready for an Unforgettable Evening?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us for an extraordinary dining and cocktail experience that will awaken your senses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
            >
              <Link href="/book">Make a Reservation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--ivory)] text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--charcoal)] px-8 py-4 text-lg transition-all bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
