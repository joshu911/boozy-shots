import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Heart, Users, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marcus Chen",
      role: "Head Chef & Owner",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Chen",
      bio: "With over 15 years of culinary excellence, Marcus brings innovative techniques and passion for perfection to every dish.",
      specialties: ["Modern Cuisine", "Wine Pairing", "Seasonal Menus"],
    },
    {
      name: "Isabella Rodriguez",
      role: "Master Mixologist",
      image: "/placeholder.svg?height=300&width=300&text=Isabella+Rodriguez",
      bio: "Isabella's artistry behind the bar has earned international recognition, crafting cocktails that tell stories through flavor.",
      specialties: ["Craft Cocktails", "Molecular Mixology", "Rare Spirits"],
    },
    {
      name: "James Thompson",
      role: "Sommelier",
      image: "/placeholder.svg?height=300&width=300&text=James+Thompson",
      bio: "A certified sommelier with an exceptional palate, James curates our wine collection and creates perfect pairings.",
      specialties: ["Wine Selection", "Food Pairing", "Vintage Collections"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Every cocktail, every dish, every moment is crafted with unwavering dedication to perfection.",
    },
    {
      icon: Users,
      title: "Community Connection",
      description: "We believe in creating spaces where people connect, celebrate, and create lasting memories.",
    },
    {
      icon: Award,
      title: "Artisanal Craftsmanship",
      description: "From hand-selected ingredients to meticulous preparation, we honor the art of hospitality.",
    },
    {
      icon: Star,
      title: "Innovative Experience",
      description: "We constantly evolve, bringing fresh perspectives while respecting timeless traditions.",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where passion meets perfection, and every evening becomes an unforgettable experience
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">The Beginning</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Boozy Shots was born from a simple yet profound vision: to create a space where exceptional
                    cocktails meet culinary artistry, where every guest feels like they're part of something
                    extraordinary.
                  </p>
                  <p>
                    Founded in 2019 by Marcus Chen, our establishment has grown from a passionate dream into a
                    celebrated destination for those who appreciate the finer things in life. We believe that great
                    hospitality is an art form, and every evening at Boozy Shots is a carefully orchestrated
                    performance.
                  </p>
                  <p>
                    Our commitment to excellence extends beyond just food and drinks. We've created an atmosphere that
                    celebrates sophistication while remaining warmly welcoming, where business deals are sealed over
                    perfectly crafted cocktails and romantic evenings unfold over candlelit dinners.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="glass border-[var(--warm-gold)]/20 overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src="/placeholder.svg?height=400&width=600&text=Restaurant+Interior"
                      alt="Elegant restaurant interior"
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Our Philosophy</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Four core values that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="glass border-[var(--warm-gold)]/20 text-center group hover:scale-105 transition-transform"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center group-hover:bg-[var(--warm-gold)] transition-all">
                      <Icon size={32} className="text-[var(--warm-gold)] group-hover:text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate professionals who bring our vision to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="glass border-[var(--warm-gold)]/20 overflow-hidden group hover:scale-105 transition-transform"
              >
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-[var(--warm-gold)] font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[var(--warm-gold)]/10 text-[var(--warm-gold)] text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground text-lg">Honored to be recognized by industry leaders</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass border-[var(--warm-gold)]/20 text-center">
              <CardContent className="p-6">
                <Award size={32} className="text-[var(--warm-gold)] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-primary mb-2">Best Cocktail Bar 2023</h3>
                <p className="text-muted-foreground text-sm">City Restaurant Awards</p>
              </CardContent>
            </Card>

            <Card className="glass border-[var(--warm-gold)]/20 text-center">
              <CardContent className="p-6">
                <Star size={32} className="text-[var(--warm-gold)] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-primary mb-2">5-Star Rating</h3>
                <p className="text-muted-foreground text-sm">Hospitality Excellence</p>
              </CardContent>
            </Card>

            <Card className="glass border-[var(--warm-gold)]/20 text-center">
              <CardContent className="p-6">
                <Users size={32} className="text-[var(--warm-gold)] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-primary mb-2">People's Choice</h3>
                <p className="text-muted-foreground text-sm">Local Dining Awards</p>
              </CardContent>
            </Card>

            <Card className="glass border-[var(--warm-gold)]/20 text-center">
              <CardContent className="p-6">
                <Heart size={32} className="text-[var(--warm-gold)] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-bold text-primary mb-2">Community Impact</h3>
                <p className="text-muted-foreground text-sm">Local Business Recognition</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--charcoal)] to-[var(--espresso)] text-[var(--ivory)] noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Experience Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us for an evening where every detail reflects our passion for excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
            >
              <Link href="/book">Reserve Your Experience</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--ivory)] text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--charcoal)] px-8 py-4 text-lg transition-all bg-transparent"
            >
              <Link href="/menu">Explore Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
