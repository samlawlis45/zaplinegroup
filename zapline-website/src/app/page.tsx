"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Network, 
  Shield, 
  TrendingUp,
  Users,
  Globe,
  Clock,
  Award
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Zapline Group</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <Button>Get Started</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6">
              Supply Chain Integration Experts
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bridge Legacy EDI with Modern APIs
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your supply chain connectivity with expert EDI and API integration services. 
              Accelerate partner onboarding and reduce compliance complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Our Work
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partners Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4">Expert Integration Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From legacy EDI modernization to cutting-edge API architectures, 
              we deliver comprehensive supply chain connectivity solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Network,
                title: "EDI Connectivity Projects",
                description: "Trading partner onboarding, supplier compliance, and ERP integration for SAP, Oracle, D365, and NetSuite.",
                features: ["850, 810, 856 transactions", "Carrier compliance programs", "ERP/TMS/WMS integration"]
              },
              {
                icon: Zap,
                title: "API Integration & Middleware",
                description: "Design API-led connectivity strategies with middleware selection and cloud integration patterns.",
                features: ["Cleo, Boomi, MuleSoft", "Azure/AWS iPaaS", "API-first architectures"]
              },
              {
                icon: TrendingUp,
                title: "Data Modernization",
                description: "Legacy EDI to API modernization roadmaps with integration observability and monitoring.",
                features: ["Migration strategies", "Performance monitoring", "Real-time analytics"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future SaaS Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
            <h2 className="text-4xl font-bold mb-4">Zapline Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our upcoming SaaS platform for partner onboarding automation. 
              Self-service document testing, API + EDI hybrid flows, and visibility dashboards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Revolutionary Partner Onboarding</h3>
              <p className="text-xl mb-8 opacity-90">
                Transform your partner onboarding from weeks to minutes with our intelligent automation platform.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold">Fast Setup</div>
                  <div className="text-sm opacity-80">Minutes, not weeks</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold">Secure Testing</div>
                  <div className="text-sm opacity-80">Built-in certification</div>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold">Universal Compatibility</div>
                  <div className="text-sm opacity-80">EDI + API hybrid</div>
                </div>
              </div>

              <Button size="lg" variant="secondary" className="text-lg px-8">
                Join Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Why Zapline Group</Badge>
            <h2 className="text-4xl font-bold mb-4">The Integration Experts You Can Trust</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine decades of supply chain expertise with modern integration technologies 
              to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Deep Expertise",
                description: "Specialized knowledge in EDI and API integration with proven methodologies."
              },
              {
                icon: Users,
                title: "Personal Attention",
                description: "Direct partner involvement in every project, not junior consultants."
              },
              {
                icon: Zap,
                title: "Hybrid Approach",
                description: "Bridge legacy EDI systems with modern API-first architectures."
              },
              {
                icon: Shield,
                title: "Proven Results",
                description: "95% on-time delivery with measurable ROI for every client."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can accelerate your partner onboarding and modernize your integration architecture.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Download Case Study
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-semibold text-foreground mb-1">Consulting Rates</div>
                <div>$150-250/hr blended rates</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Project Range</div>
                <div>$25K-250K depending on scope</div>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Response Time</div>
                <div>Within 24 hours</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">Zapline Group</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Supply chain consulting and technology services firm specializing in EDI, API, 
                and partner connectivity for modern enterprises.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline">zapline.io</Badge>
                <Badge variant="outline">zaplineconsulting.com</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>EDI Connectivity</li>
                <li>API Integration</li>
                <li>Data Modernization</li>
                <li>Partner Onboarding</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Zapline Group, LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}