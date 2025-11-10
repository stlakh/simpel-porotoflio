"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { config } from "@/lib/site-config"
import { MapPin, Clock, Mail, Phone } from "lucide-react"

export default function LocationPage() {
  const { location, email, phone } = config.personal

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Location</h1>
              <p className="text-lg text-muted-foreground">
                Based in Malang, Indonesia. Always open to collaborating with teams remotely or meeting in person.
              </p>
            </div>
          </div>
        </section>

        {/* Location Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map/Info Section */}
              <div className="space-y-8">
                {/* Location Card */}
                <div className="rounded-lg border border-border bg-card/50 p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Primary Location</h3>
                      <p className="text-muted-foreground">{location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Currently based in East Java, Indonesia. I work with clients worldwide and am flexible with time
                    zones.
                  </p>
                </div>

                {/* Work Hours */}
                <div className="rounded-lg border border-border bg-card/50 p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Availability</h3>
                    </div>
                  </div>
                  <div className="space-y-3 ml-16">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Weekday (Mon-Fri)</span>
                      <span className="text-sm font-medium text-foreground">9 AM - 6 PM WIB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Weekend</span>
                      <span className="text-sm font-medium text-foreground">Limited Availability</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Response Time</span>
                      <span className="text-sm font-medium text-foreground">Within 24 hours</span>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="rounded-lg border border-border bg-card/50 p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-accent" />
                      <span className="text-sm text-foreground">{email}</span>
                    </a>
                    <a
                      href={`tel:${phone}`}
                      className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors"
                    >
                      <Phone className="h-5 w-5 text-accent" />
                      <span className="text-sm text-foreground">{phone}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="flex flex-col gap-8">
                <div className="rounded-lg border border-border overflow-hidden bg-card h-96 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                      <MapPin className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Malang, Indonesia</h4>
                      <p className="text-sm text-muted-foreground">East Java, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="rounded-lg border border-border bg-card/50 p-6 space-y-4">
                  <h4 className="font-semibold text-foreground">Why Malang?</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Malang offers a perfect blend of vibrant tech community, comfortable living conditions, and
                    inspiring cultural environment. It's an ideal base for developing innovative digital products.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Time Zone</h4>
                    <p className="text-sm text-muted-foreground">
                      <strong>WIB (Western Indonesia Time)</strong> - UTC+7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
