"use client";

import { PageLayout } from "@/components/layout/page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Music, ChefHat, Wine } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const upcomingEvents = [
    {
      title: "Jazz & Cocktails Night",
      date: "Every Friday",
      time: "8:00 PM - 12:00 AM",
      description:
        "Live jazz performances paired with our signature cocktails in an intimate setting",
      type: "Music",
      icon: Music,
      featured: true,
      capacity: "Limited seating",
      image: "/poster1.jpg",
    },
    {
      title: "Wine Tasting Experience",
      date: "First Saturday of Month",
      time: "6:00 PM - 9:00 PM",
      description:
        "Guided tasting of premium wines from renowned vineyards around the world",
      type: "Wine",
      icon: Wine,
      capacity: "20 guests",
      image: "/poster2.jpg",
    },
    {
      title: "Chef's Table Experience",
      date: "Every Wednesday",
      time: "7:00 PM - 10:00 PM",
      description:
        "Exclusive multi-course dining experience with wine pairings",
      type: "Culinary",
      icon: ChefHat,
      capacity: "8 guests only",
      image: "/poster1.jpg",
    },
    {
      title: "Mixology Masterclass",
      date: "Second Thursday",
      time: "7:30 PM - 9:30 PM",
      description:
        "Learn the art of cocktail making from our expert mixologists",
      type: "Workshop",
      icon: Users,
      capacity: "12 participants",
      image: "/poster2.jpg",
    },
  ];

  const seasonalEvents = [
    {
      title: "Winter Warmth Collection",
      date: "December - February",
      description:
        "Seasonal cocktails featuring warm spices, aged spirits, and comfort flavors",
      type: "Seasonal Menu",
    },
    {
      title: "Spring Awakening",
      date: "March - May",
      description:
        "Fresh botanical cocktails celebrating the renewal of spring",
      type: "Seasonal Menu",
    },
    {
      title: "Summer Solstice Celebration",
      date: "June 21st",
      description:
        "Special event celebrating the longest day with exclusive cocktails and live music",
      type: "Special Event",
    },
    {
      title: "Harvest Moon Dinner",
      date: "September",
      description:
        "Farm-to-table dinner featuring seasonal ingredients and harvest-inspired cocktails",
      type: "Special Event",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
            Events & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for unforgettable evenings of exceptional entertainment,
            culinary adventures, and exclusive experiences
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground text-lg">
              Regular events and experiences at Boozy Shots
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => {
              const Icon = event.icon;
              return (
                <Card
                  key={index}
                  className={`group glass border-[var(--warm-gold)]/20 hover:border-[var(--warm-gold)] transition-all hover:scale-105 overflow-hidden ${
                    event.featured ? "ring-2 ring-[var(--warm-gold)]/30" : ""
                  }`}
                >
                  <div className="relative h-auto overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    {event.featured && (
                      <Badge className="absolute top-4 right-4 gradient-gold text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full glass">
                          <Icon size={24} className="text-[var(--warm-gold)]" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-primary">
                            {event.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar
                          size={16}
                          className="text-[var(--warm-gold)]"
                        />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Clock size={16} className="text-[var(--warm-gold)]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users size={16} className="text-[var(--warm-gold)]" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="border-[var(--warm-gold)]/30 text-[var(--warm-gold)]"
                      >
                        {event.type}
                      </Badge>
                      <Button
                        asChild
                        size="sm"
                        className="gradient-gold text-white hover:scale-105 transition-transform"
                      >
                        <Link href="/book">Reserve Spot</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasonal Events */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Seasonal Specials
            </h2>
            <p className="text-muted-foreground text-lg">
              Limited-time experiences throughout the year
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalEvents.map((event, index) => (
              <Card
                key={index}
                className="glass border-[var(--warm-gold)]/20 hover:border-[var(--warm-gold)] transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[var(--warm-gold)] font-medium text-sm mb-3">
                    {event.date}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <Badge
                    variant="outline"
                    className="border-[var(--warm-gold)]/30 text-[var(--warm-gold)] text-xs"
                  >
                    {event.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[var(--charcoal)] to-[var(--espresso)] text-[var(--ivory)] noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reserve your spot for any of our exclusive events and create
            unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-gold text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform"
            >
              <Link href="/book">Make Reservation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[var(--ivory)] text-[var(--ivory)] hover:bg-[var(--ivory)] hover:text-[var(--charcoal)] px-8 py-4 text-lg transition-all bg-transparent"
            >
              <Link href="/contact">Contact for Private Events</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
