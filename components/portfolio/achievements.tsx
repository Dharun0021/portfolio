"use client";

import { Award, TrendingUp, Users, Clock, CheckCircle, Star } from "lucide-react";

const achievements = [
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Reduced API response time by 40% through query optimization and caching strategies",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Successfully collaborated with cross-functional teams to deliver projects on time",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Consistently delivered features ahead of schedule while maintaining code quality",
  },
  {
    icon: CheckCircle,
    title: "Bug-Free Releases",
    description: "Maintained 95%+ test coverage resulting in minimal production issues",
  },
];

const metrics = [
  { value: "50K+", label: "Lines of Code", description: "Written in production" },
  { value: "15+", label: "REST APIs", description: "Designed & Implemented" },
  { value: "99.9%", label: "Uptime", description: "System Reliability" },
  { value: "40%", label: "Faster", description: "Performance Gains" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Key Accomplishments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Achievements & Impact
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Measurable results and milestones from my professional journey
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
