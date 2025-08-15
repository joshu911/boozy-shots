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
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    // Simulate form submission
    console.log("Contact form submitted:", data)
    setIsSubmitted(true)
    reset()

    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background to-card noise-texture">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient-gold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for reservations, private events, or any questions about your experience
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass border-[var(--warm-gold)]/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin size={24} className="text-[var(--warm-gold)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Address</p>
                      <p className="text-muted-foreground">
                        123 Elegant Street
                        <br />
                        Downtown District, City 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone size={24} className="text-[var(--warm-gold)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-muted-foreground hover:text-[var(--warm-gold)] transition-colors"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail size={24} className="text-[var(--warm-gold)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <a
                        href="mailto:info@boozyshots.com"
                        className="text-muted-foreground hover:text-[var(--warm-gold)] transition-colors"
                      >
                        info@boozyshots.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock size={24} className="text-[var(--warm-gold)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-primary">Hours</p>
                      <div className="text-muted-foreground text-sm">
                        <p>Monday - Thursday: 5:00 PM - 12:00 AM</p>
                        <p>Friday - Saturday: 5:00 PM - 2:00 AM</p>
                        <p>Sunday: 6:00 PM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full gradient-gold text-white font-semibold hover:scale-105 transition-transform"
                >
                  <a href="tel:+1234567890" className="flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Call Now: (123) 456-7890</span>
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-[var(--warm-gold)] text-[var(--warm-gold)] hover:bg-[var(--warm-gold)] hover:text-white bg-transparent"
                >
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp Us</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass border-[var(--warm-gold)]/20">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center space-x-2">
                    <CheckCircle size={20} className="text-green-600" />
                    <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      className="mt-1"
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="mt-1"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-gold text-white font-semibold py-3 hover:scale-105 transition-transform"
                  >
                    <Send size={18} className="mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-muted-foreground text-lg">Located in the heart of downtown</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass border-[var(--warm-gold)]/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-[var(--warm-gold)] mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive map would be embedded here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 Elegant Street, Downtown District, City 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
