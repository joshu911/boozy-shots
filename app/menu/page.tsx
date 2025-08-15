"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wine, Coffee, Utensils, Sparkles } from "lucide-react"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("cocktails")

  const categories = [
    { id: "cocktails", name: "Signature Cocktails", icon: Sparkles },
    { id: "wine", name: "Wine Selection", icon: Wine },
    { id: "spirits", name: "Premium Spirits", icon: Coffee },
    { id: "food", name: "Culinary Delights", icon: Utensils },
  ]

  const menuItems = {
    cocktails: [
      {
        name: "Golden Manhattan",
        description: "Premium bourbon, sweet vermouth, gold leaf garnish",
        ingredients: ["Bourbon", "Sweet Vermouth", "Angostura Bitters", "Gold Leaf"],
        price: "250 Ksh",
        featured: true,
      },
      {
        name: "Smoky Old Fashioned",
        description: "Aged whiskey with house-made bitters and smoked cherry",
        ingredients: ["Aged Whiskey", "House Bitters", "Smoked Cherry", "Orange Peel"],
        price: "300 Ksh",
      },
      {
        name: "Lime Gin Fizz",
        description: "Artisanal gin, lime syrup, fresh citrus foam",
        ingredients: ["Artisanal Gin", "Lime Syrup", "Citrus Foam", "Fresh Herbs"],
        price: "200 Ksh",
      },
      {
        name: "Espresso Martini Royale",
        description: "Premium vodka, fresh espresso, coffee liqueur, gold rim",
        ingredients: ["Premium Vodka", "Fresh Espresso", "Coffee Liqueur", "Gold Sugar"],
        price: "250 Ksh",
      },
      {
        name: "Rose Garden Negroni",
        description: "Gin, Campari, sweet vermouth, rose water, dried petals",
        ingredients: ["London Dry Gin", "Campari", "Sweet Vermouth", "Rose Water"],
        price: "300 Ksh",
      },
      {
        name: "Midnight in Tokyo",
        description: "Japanese whisky, yuzu, black sesame, bamboo charcoal",
        ingredients: ["Japanese Whisky", "Yuzu", "Black Sesame", "Bamboo Charcoal"],
        price: "400 Ksh",
      },
    ],
    wine: [
      {
        name: "Château Margaux 2015",
        description: "Exceptional Bordeaux with notes of blackcurrant and cedar",
        ingredients: ["Cabernet Sauvignon", "Merlot", "Petit Verdot", "Cabernet Franc"],
        price: "450 Ksh",
        featured: true,
      },
      {
        name: "Dom Pérignon Vintage",
        description: "Prestigious champagne with elegant bubbles and complexity",
        ingredients: ["Chardonnay", "Pinot Noir"],
        price: "350 Ksh",
      },
      {
        name: "Barolo Brunate 2018",
        description: "Full-bodied Italian red with truffle and cherry notes",
        ingredients: ["Nebbiolo"],
        price: "280 Ksh",
      },
      {
        name: "Sancerre Loire Valley",
        description: "Crisp Sauvignon Blanc with mineral finish",
        ingredients: ["Sauvignon Blanc"],
        price: "220 Ksh",
      },
    ],
    spirits: [
      {
        name: "Macallan 25 Year",
        description: "Exceptional single malt with rich sherry oak influence",
        ingredients: ["Single Malt Whisky", "Sherry Oak"],
        price: "8500 Ksh",
        featured: true,
      },
      {
        name: "Hennessy Paradis",
        description: "Premium cognac blend of exceptional eaux-de-vie",
        ingredients: ["Cognac Blend"],
        price: "6500 Ksh",
      },
      {
        name: "Grey Goose Magnum",
        description: "Ultra-premium French vodka, smooth and refined",
        ingredients: ["French Wheat", "Spring Water"],
        price: "2500 Ksh",
      },
      {
        name: "Clase Azul Reposado",
        description: "Artisanal tequila aged in oak barrels",
        ingredients: ["Blue Agave", "Oak Barrel Aged"],
        price: "3500 Ksh",
      },
    ],
    food: [
      {
        name: "Wagyu Beef Tartare",
        description: "Premium wagyu with quail egg, truffle oil, and microgreens",
        ingredients: ["Wagyu Beef", "Quail Egg", "Truffle Oil", "Microgreens"],
        price: "3200 Ksh",
        featured: true,
      },
      {
        name: "Lobster Thermidor",
        description: "Fresh lobster in rich cream sauce with gruyère",
        ingredients: ["Fresh Lobster", "Cream Sauce", "Gruyère", "Fresh Herbs"],
        price: "4800 Ksh",
      },
      {
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique",
        ingredients: ["Duck Leg", "Cherry Gastrique", "Seasonal Vegetables"],
        price: "3800 Ksh",
      },
      {
        name: "Truffle Risotto",
        description: "Creamy arborio rice with black truffle shavings",
        ingredients: ["Arborio Rice", "Black Truffle", "Parmesan", "White Wine"],
        price: "2800 Ksh",
      },
    ],
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">Our Menu</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium cocktails, fine wines, exceptional spirits, and culinary
            masterpieces
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                    activeCategory === category.id
                      ? "gradient-gold text-white"
                      : "glass hover:bg-[var(--warm-gold)] hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <Card
                key={index}
                className="group glass border-[var(--warm-gold)]/20 hover:border-[var(--warm-gold)] transition-all hover:scale-105 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-serif text-xl font-bold text-primary">{item.name}</h3>
                        {item.featured && <Badge className="gradient-gold text-white text-xs">Featured</Badge>}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <span className="font-serif text-2xl font-bold text-[var(--warm-gold)] ml-4">{item.price}</span>
                  </div>

                  {/* Ingredients - shown on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="border-t border-[var(--warm-gold)]/20 pt-4">
                      <p className="text-xs font-medium text-[var(--warm-gold)] mb-2">INGREDIENTS</p>
                      <div className="flex flex-wrap gap-1">
                        {item.ingredients.map((ingredient, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-[var(--warm-gold)]/30">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
