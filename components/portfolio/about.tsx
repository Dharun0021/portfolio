"use client";

import { Briefcase, Code2, MapPin, Target, Zap, Users } from "lucide-react";

const infoCards = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "2+ Years",
    description: "Industry Experience",
  },
  {
    icon: Code2,
    label: "Role",
    value: "Software Developer",
    description: "Full Stack",
  },
  {
    icon: Target,
    label: "Focus",
    value: "Scalable Systems",
    description: "Performance Driven",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    description: "Remote Friendly",
  },
];

const stats = [
  { icon: Zap, value: "10+", label: "Projects Completed" },
  { icon: Users, value: "5+", label: "Happy Clients" },
  { icon: Code2, value: "50K+", label: "Lines of Code" },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get to know me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              About Me
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a <span className="text-foreground font-medium">Software Developer</span> focused on building reliable and
                  scalable software systems that solve real operational and
                  business problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My experience spans backend services, secure APIs, real-time
                  dashboards, and full software development lifecycle activities
                  including requirement analysis, system design, development,
                  testing, deployment, and post-release support.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I enjoy working on systems where{" "}
                  <span className="text-primary font-semibold">performance</span>,{" "}
                  <span className="text-primary font-semibold">security</span>, and{" "}
                  <span className="text-primary font-semibold">clarity</span>{" "}
                  matter.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-primary mr-2" />
                      <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Info cards */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div
                  key={card.label}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <card.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">
                    {card.label}
                  </p>
                  <p className="text-foreground font-bold text-lg mb-1">{card.value}</p>
                  <p className="text-xs text-muted-foreground">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
