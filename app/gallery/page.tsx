"use client"

import { useState } from "react"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent } from "@/components/ui/card"
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Elegant+Bar+Interior",
      alt: "Elegant bar interior with warm lighting",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Signature+Cocktails",
      alt: "Beautifully crafted signature cocktails",
      category: "Cocktails",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Fine+Dining+Setup",
      alt: "Fine dining table setup",
      category: "Dining",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Chef+at+Work",
      alt: "Chef preparing gourmet dishes",
      category: "Kitchen",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wine+Collection",
      alt: "Premium wine collection display",
      category: "Wine",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Live+Jazz+Performance",
      alt: "Live jazz performance evening",
      category: "Events",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Mixologist+Crafting",
      alt: "Expert mixologist crafting cocktails",
      category: "Cocktails",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Private+Dining+Room",
      alt: "Intimate private dining room",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Gourmet+Plating",
      alt: "Artistic gourmet food plating",
      category: "Dining",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Rooftop+Terrace",
      alt: "Elegant rooftop terrace seating",
      category: "Interior",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Whiskey+Tasting",
      alt: "Premium whiskey tasting setup",
      category: "Events",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Dessert+Presentation",
      alt: "Exquisite dessert presentation",
      category: "Dining",
    },
  ]

  const categories = ["All", "Interior", "Cocktails", "Dining", "Kitchen", "Wine", "Events"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = galleryImages.filter((image) => activeCategory === "All" || image.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = selectedImage
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(newIndex)
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into our world of elegance and sophistication through these carefully captured moments
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeCategory === category
                    ? "gradient-gold text-white"
                    : "glass hover:bg-[var(--warm-gold)] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="group glass border-[var(--warm-gold)]/20 hover:border-[var(--warm-gold)] transition-all overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <Camera
                      size={32}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white font-medium">{filteredImages[selectedImage].alt}</p>
              <p className="text-white/70 text-sm">
                {selectedImage + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  )
}
