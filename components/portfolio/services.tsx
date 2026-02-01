"use client";

import { Code, BarChart3, Server, Layers, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Application Development",
    description:
      "End-to-end development of scalable web applications with clean architecture, secure authentication, and maintainable codebases.",
    features: ["Clean Architecture", "Scalable Solutions", "Secure Auth"],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "Design and development of real-time dashboards that transform raw data into meaningful business insights.",
    features: ["Real-time Data", "Business Insights", "Interactive UI"],
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    description:
      "Building reliable, secure, and high-performance backend systems and APIs tailored to business needs.",
    features: ["RESTful APIs", "High Performance", "Security First"],
  },
  {
    icon: Layers,
    title: "System Design & Integration",
    description:
      "Translating business requirements into robust technical architectures and integrating software with hardware or third-party platforms.",
    features: ["System Architecture", "Third-party Integration", "Technical Planning"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              My Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              What I Do
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Specialized services to help bring your ideas to life with quality and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                {/* Number Badge */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-muted/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 rounded-md bg-secondary text-xs font-medium text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
