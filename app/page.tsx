"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { ArrowRight, Star, Award, Zap, Users, Code2, Sparkles } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end web development dengan teknologi modern dan best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized applications dengan loading cepat dan user experience terbaik",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "User Centric",
      description: "Design yang intuitif dan responsive untuk semua device dan platform",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality Code",
      description: "Clean, maintainable code dengan testing dan documentation lengkap",
      color: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "25+", label: "Technologies" }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Enhanced Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-500/20 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Available for Freelance Work</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-foreground">Creative</span>
                <span className="block gradient-text">Developer</span>
              </h1>

              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Transforming ideas into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold">
                  exceptional digital experiences
                </span>{" "}
                dengan passion dan precision
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Full Stack Developer dari Malang, Indonesia. Spesialis dalam membangun aplikasi web modern, 
                scalable, dan user-friendly dengan teknologi terkini.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-border bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Why Choose <span className="gradient-text">My Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Komitmen terhadap kualitas, innovation, dan client satisfaction dalam setiap project
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10 }}
                    className="group p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:from-card/80 hover:to-card/60 transition-all hover:shadow-2xl"
                  >
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 md:py-32 border-y border-border bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                My <span className="gradient-text">Work Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pendekatan terstruktur untuk memastikan project success dari awal sampai launch
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Planning", desc: "Understanding your vision and requirements" },
                { step: "02", title: "Design & Prototyping", desc: "Creating wireframes and design mockups" },
                { step: "03", title: "Development", desc: "Building with modern technologies and best practices" },
                { step: "04", title: "Launch & Support", desc: "Deployment and ongoing maintenance" }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Client <span className="gradient-text">Testimonials</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Apa kata client tentang pengalaman bekerja sama dengan saya
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Product Manager",
                  company: "TechStart Inc",
                  content: "Yilzi delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
                  rating: 5
                },
                {
                  name: "Alex Rodriguez",
                  role: "Startup Founder",
                  company: "Nexus Labs",
                  content: "Working with Yilzi was a game-changer for our business. He transformed our complex requirements into a beautiful, functional product.",
                  rating: 5
                },
                {
                  name: "Maya Patel",
                  role: "Creative Director",
                  company: "Design Studio",
                  content: "Professional, reliable, and incredibly talented. Yilzi's ability to understand design intent and translate it into code is remarkable.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:shadow-2xl transition-all group"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-accent/5 to-background"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Ready to <span className="gradient-text">Start Your Project</span>?
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Mari berkolaborasi untuk menghadirkan ide Anda menjadi kenyataan dengan solusi web yang modern, 
                scalable, dan impactful.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  Start Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-primary text-primary rounded-2xl font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  View Portfolio
                </motion.a>
              </div>

              <p className="text-sm text-muted-foreground pt-8">
                Response dalam 24 jam • Free consultation • No commitment required
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}