"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Calendar, CheckCircle, MapPin, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Velam Ai Ecosystem",
    location: "India",
    period: "Jun 2023 – Dec 2024",
    type: "Full-time",
    responsibilities: [
      "Developed responsive and interactive user interfaces using React and Next.js",
      "Implemented state management solutions and optimized component performance",
      "Collaborated with designers to translate UI/UX designs into functional code",
      "Built reusable component libraries for consistent design patterns",
      "Integrated REST APIs and handled client-side data management",
    ],
  },
  {
    title: "Software Developer",
    company: "Optibyte Ecosystem",
    location: "India",
    period: "Jan 2025 – Present",
    type: "Full-time",
    responsibilities: [
      "Designed and developed scalable backend services and REST APIs",
      "Implemented secure JWT-based authentication and role-based access control",
      "Built operational and analytics dashboards for business decision-making",
      "Integrated SQL and time-series databases for real-time data handling",
      "Collaborated with cross-functional teams including hardware and product teams",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance",
    responsibilities: [
      "Delivered custom web applications for diverse clients across industries",
      "Provided end-to-end development from requirements gathering to deployment",
      "Built and maintained long-term client relationships through quality work",
      "Managed multiple projects simultaneously with strict deadline adherence",
      "Offered technical consultation and solution architecture services",
    ],
  },
];

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const exp = experiences[currentIndex];

  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Career Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Work Experience
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              My professional journey building scalable software solutions
            </p>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              aria-label="Previous experience"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            
            <div className="flex items-center gap-3">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to experience ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              aria-label="Next experience"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          {/* Experience Card */}
          <div 
            className="relative p-8 md:p-10 rounded-2xl bg-card border border-border"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Timeline Indicator */}
            <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Building2 className="h-4 w-4" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                  exp.type === "Freelance" 
                    ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" 
                    : "bg-primary/10 text-primary border border-primary/20"
                }`}>
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-4">
              {exp.responsibilities.map((resp, respIndex) => (
                <div
                  key={respIndex}
                  className="flex items-start gap-4 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 right-6 text-sm text-muted-foreground">
              {currentIndex + 1} / {experiences.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
