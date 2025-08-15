import Link from "next/link"
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--ivory)] noise-texture">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="font-serif text-3xl font-bold text-gradient-gold">Boozy Shots</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the perfect blend of sophisticated cocktails, exquisite cuisine, and elegant atmosphere in our
              premium bar and restaurant.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--warm-gold)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--warm-gold)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-[var(--warm-gold)] transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[var(--warm-gold)]">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/menu" className="block text-sm hover:text-[var(--warm-gold)] transition-colors">
                Our Menu
              </Link>
              <Link href="/events" className="block text-sm hover:text-[var(--warm-gold)] transition-colors">
                Events
              </Link>
              <Link href="/book" className="block text-sm hover:text-[var(--warm-gold)] transition-colors">
                Reservations
              </Link>
              <Link href="/gallery" className="block text-sm hover:text-[var(--warm-gold)] transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="block text-sm hover:text-[var(--warm-gold)] transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[var(--warm-gold)]">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[var(--warm-gold)] mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>Maasai Square</p>
                  <p>Maasai Lodge Road, Ongata Rongai</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[var(--warm-gold)] flex-shrink-0" />
                <a href="tel:+254794790325" className="text-sm hover:text-[var(--warm-gold)] transition-colors">
                  (+254) 794790325
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[var(--warm-gold)] flex-shrink-0" />
                <a
                  href="mailto:info@boozyshots.com"
                  className="text-sm hover:text-[var(--warm-gold)] transition-colors"
                >
                  info@boozyshots.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-[var(--warm-gold)]">Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-[var(--warm-gold)] flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium">Mon - Thu</p>
                  <p className="text-gray-300">5:00 PM - 12:00 AM</p>
                </div>
              </div>
              <div className="text-sm ml-7">
                <p className="font-medium">Fri - Sat</p>
                <p className="text-gray-300">5:00 PM - 2:00 AM</p>
              </div>
              <div className="text-sm ml-7">
                <p className="font-medium">Sunday</p>
                <p className="text-gray-300">6:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Boozy Shots. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-[var(--warm-gold)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[var(--warm-gold)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
