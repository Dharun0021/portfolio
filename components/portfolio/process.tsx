"use client";

import { FileSearch, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Understand",
    description: "Gather requirements & analyze needs",
    step: "01",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "System architecture & planning",
    step: "02",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Build & integrate components",
    step: "03",
  },
  {
    icon: TestTube,
    title: "Test",
    description: "Quality assurance & optimization",
    step: "04",
  },
  {
    icon: Rocket,
    title: "Deploy",
    description: "Launch & ongoing support",
    step: "05",
  },
];

export function Process() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              How I Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Development Process
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A systematic approach to delivering quality software solutions
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-px bg-border" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    {/* Step Number */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      {step.step}
                    </span>

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mt-2">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
