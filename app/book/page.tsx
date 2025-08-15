"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { PageLayout } from "@/components/layout/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Phone, MessageCircle, CheckCircle } from "lucide-react"

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  guests: z.string().min(1, "Please select number of guests"),
  occasion: z.string().optional(),
  notes: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const watchedValues = watch()

  const timeSlots = [
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
  ]

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

  const occasionOptions = [
    "Casual Dining",
    "Date Night",
    "Business Meeting",
    "Birthday Celebration",
    "Anniversary",
    "Special Occasion",
    "Other",
  ]

  const onSubmit = (data: BookingFormData) => {
    // Create WhatsApp message
    const message = `Hello! I'd like to make a reservation at Boozy Shots:

📅 Date: ${data.date}
🕐 Time: ${data.time}
👥 Guests: ${data.guests}
👤 Name: ${data.name}
📧 Email: ${data.email}
📱 Phone: ${data.phone}
${data.occasion ? `🎉 Occasion: ${data.occasion}` : ""}
${data.notes ? `📝 Notes: ${data.notes}` : ""}

Please confirm my reservation. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <PageLayout>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="glass border-[var(--warm-gold)]/20">
                <CardContent className="p-12">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h1 className="font-serif text-3xl font-bold text-primary mb-4">Reservation Request Sent!</h1>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Your reservation request has been sent via WhatsApp. Our team will confirm your booking shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white"
                  >
                    Make Another Reservation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">Reserve Your Table</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Secure your spot for an unforgettable evening of exceptional cocktails and culinary excellence
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Reservation Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" {...register("name")} className="mt-1" placeholder="Enter your full name" />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-1"
                          placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          className="mt-1"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          {...register("date")}
                          className="mt-1"
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select onValueChange={(value) => setValue("time", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select onValueChange={(value) => setValue("guests", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {guestOptions.map((count) => (
                              <SelectItem key={count} value={count}>
                                {count} {count === "1" ? "Guest" : "Guests"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
                      </div>

                      <div>
                        <Label htmlFor="occasion">Occasion (Optional)</Label>
                        <Select onValueChange={(value) => setValue("occasion", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select occasion" />
                          </SelectTrigger>
                          <SelectContent>
                            {occasionOptions.map((occasion) => (
                              <SelectItem key={occasion} value={occasion}>
                                {occasion}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="notes">Special Requests (Optional)</Label>
                        <Textarea
                          id="notes"
                          {...register("notes")}
                          className="mt-1"
                          placeholder="Any dietary restrictions, special requests, or additional information..."
                          rows={3}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-gold text-white font-semibold py-3 hover:scale-105 transition-transform"
                    >
                      {isSubmitting ? "Sending..." : "Send Reservation Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Information Sidebar */}
              <div className="space-y-6">
                <Card className="glass border-[var(--warm-gold)]/20">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Reservation Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar size={20} className="text-[var(--warm-gold)] mt-1" />
                        <div>
                          <p className="font-medium">Operating Hours</p>
                          <p className="text-sm text-muted-foreground">
                            Mon-Thu: 5:00 PM - 12:00 AM
                            <br />
                            Fri-Sat: 5:00 PM - 2:00 AM
                            <br />
                            Sunday: 6:00 PM - 11:00 PM
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Users size={20} className="text-[var(--warm-gold)] mt-1" />
                        <div>
                          <p className="font-medium">Group Reservations</p>
                          <p className="text-sm text-muted-foreground">
                            For parties of 10 or more, please call us directly for special arrangements.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock size={20} className="text-[var(--warm-gold)] mt-1" />
                        <div>
                          <p className="font-medium">Cancellation Policy</p>
                          <p className="text-sm text-muted-foreground">
                            Please notify us at least 2 hours in advance for any changes or cancellations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-[var(--warm-gold)]/20">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-4">Need Immediate Assistance?</h3>
                    <div className="space-y-3">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white bg-transparent"
                      >
                        <a href="tel:+1234567890" className="flex items-center justify-center space-x-2">
                          <Phone size={18} />
                          <span>Call Us: (123) 456-7890</span>
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white bg-transparent"
                      >
                        <a
                          href="https://wa.me/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle size={18} />
                          <span>WhatsApp Us</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
