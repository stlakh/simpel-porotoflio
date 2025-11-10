"use client"

import { config } from "@/lib/site-config"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  const { email, phone, location } = config.personal
  const socials = config.socialMedia

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: location,
      href: "#",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Contact Items */}
      <div className="space-y-6">
        {contactItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label}>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{item.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-11">{item.value}</p>
            </div>
          )
        })}
      </div>

      {/* Social Links */}
      <div>
        <h3 className="font-semibold text-foreground mb-4">Connect on Social Media</h3>
        <div className="space-y-3">
          {Object.entries(socials).map(([key, social]) => (
            <a
              key={key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <span className="text-sm text-foreground capitalize">{key}</span>
              <span className="text-xs text-muted-foreground">@{social.username}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
