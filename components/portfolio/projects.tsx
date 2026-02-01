"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ExternalLink, Github, ChevronLeft, ChevronRight, Pause, Play, Monitor, Smartphone, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactIcon, DotNetIcon, SqlIcon, RestApiIcon, JavaIcon, NextJsIcon, NodeJsIcon, PostgreSQLIcon, MongoDBIcon, TypeScriptIcon, CSharpIcon, DockerIcon, FlutterIcon, DartIcon } from "./tech-icons";

const projects = [
  {
    title: "Employee & Hiring Management Dashboard",
    type: "Full-Stack Application (Freelance)",
    description:
      "A fully dynamic and scalable dashboard built for Anpri Connetra Pvt. Ltd to manage employee administration, candidate communication, and hiring records through a centralized system.",
    highlights: [
      "Employee administration and role management",
      "Candidate tracking and communication workflows",
      "Secure role-based access control",
      "High-performance data handling for 100+ active employees",
    ],
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "REST APIs", icon: RestApiIcon },
    ],
    metrics: { employees: "100+", modules: "8+", workflows: "12+" },
    image: "/projects/anpri-dashboard.png",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
  title: "E-Commerce Backend System",
  type: "Backend System (UK Client)",
  description:
    "A robust and scalable backend system developed for a UK-based e-commerce client to handle orders, payments, users, and inventory operations.",
  highlights: [
    "Secure and scalable API architecture",
    "Order and inventory management",
    "Authentication and authorization system",
    "Optimized for high transaction volumes",
  ],
  techStack: [
    { name: "Node.js", icon: NodeJsIcon },
    { name: "MongoDB", icon: MongoDBIcon },
    { name: "REST APIs", icon: RestApiIcon },
  ],
  metrics: { endpoints: "40+", orders: "10K+", uptime: "99.9%" },
  image: "/projects/ecommerce-backend.png",
  color: "from-emerald-500/20 to-green-500/20",
}

  ,
  {
    title: "Jewelry E-Commerce Platform",
    type: "Full-Stack Web Application",
    description:
      "A premium e-commerce platform designed for an online jewelry brand, featuring secure payments, product management, and a seamless shopping experience.",
    highlights: [
      "End-to-end e-commerce functionality",
      "Secure payment gateway integration",
      "Product catalog and order management",
      "Responsive and performance-optimized UI",
    ],
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: "Node.js", icon: NodeJsIcon },
      { name: "MongoDB", icon: MongoDBIcon },
      { name: "REST APIs", icon: RestApiIcon },
    ],
    metrics: { products: "500+", orders: "1K+", payments: "Live" },
    image: "/projects/jewelry-preview.png",
    color: "from-pink-500/20 to-rose-500/20",
  }
  ,
  {
    title: "Optibyte Analytics & Monitoring Platform",
    type: "Enterprise Analytics Dashboard",
    description:
      "A real-time analytics platform built for Optibyte to monitor live data streams, visualize trends, and provide actionable insights through interactive dashboards.",
    highlights: [
      "Real-time data visualization and analytics",
      "Advanced charts, trends, and performance metrics",
      "High-performance backend services",
      "Containerized deployment for scalability",
    ],
    techStack: [
      { name: ".NET", icon: DotNetIcon },
      { name: "C#", icon: CSharpIcon },
      { name: "SQL Server", icon: SqlIcon },
      { name: "Docker", icon: DockerIcon },
      { name: "Next.js", icon: NextJsIcon },
    ],
    metrics: { dataPoints: "1M+", dashboards: "12+", uptime: "99.9%" },
    image: "/projects/optibyte-analytics.png",
    color: "from-cyan-500/20 to-blue-500/20",
  }
  ,
  {
    title: "Diesel Monitoring & Maintenance Application",
    type: "Mobile Application",
    description:
      "A real-time monitoring and maintenance application developed to track diesel usage, performance metrics, and operational status through live visualizations.",
    highlights: [
      "Real-time data monitoring and alerts",
      "Performance visualization dashboards",
      "Cross-platform mobile application",
      "Secure backend integration",
    ],
    techStack: [
      { name: "Flutter", icon: FlutterIcon },
      { name: "Dart", icon: DartIcon },
      { name: ".NET", icon: DotNetIcon },
    ],
    metrics: { devices: "50+", alerts: "Live", platforms: "Android & iOS" },
    image: "/projects/diesel-monitoring.png",
    color: "from-teal-500/20 to-emerald-500/20",
  }
  ,
  {
    title: "Official Workshop Applications",
    type: "Enterprise & Internal Systems",
    description:
      "Developed multiple internal web and mobile applications as part of official workshop and enterprise projects, supporting operational workflows and business automation.",
    highlights: [
      "Web and mobile application development",
      "Internal tools and dashboards",
      "Process automation and reporting",
      "Enterprise-grade security practices",
    ],
    techStack: [
      { name: "Next.js", icon: NextJsIcon },
      { name: ".NET", icon: DotNetIcon },
      { name: "SQL", icon: SqlIcon },
      { name: "REST APIs", icon: RestApiIcon },
    ],
    metrics: { applications: "10+", teams: "Multiple", usage: "Daily" },
    image: "/projects/workshop-apps.png",
    color: "from-gray-500/20 to-slate-500/20",
  }

];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const project = projects[currentIndex];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Real-world applications I&apos;ve built that solve business problems
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors ml-2"
              aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
            >
              {isAutoPlaying ? (
                <Pause className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Play className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Project Card */}
          <div
            className="relative overflow-hidden rounded-2xl bg-card border border-border"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Image Preview Widget */}
              <div className={`lg:col-span-2 relative bg-gradient-to-br ${project.color} p-6 flex items-center justify-center min-h-[300px] lg:min-h-[450px]`}>
                <div className="relative w-full max-w-sm">
                  {/* Browser Frame */}
                  <div className="bg-card/90 backdrop-blur rounded-xl border border-border overflow-hidden">
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/70" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                        <div className="w-3 h-3 rounded-full bg-green-400/70" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="h-6 bg-muted/50 rounded-md flex items-center px-3">
                          <span className="text-xs text-muted-foreground truncate">app.example.com/{project.title.toLowerCase().replace(/ /g, '-')}</span>
                        </div>
                      </div>
                    </div>
                    {/* Content Preview */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Layout className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-muted rounded w-3/4 mb-2" />
                          <div className="h-2 bg-muted/50 rounded w-1/2" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="p-2 rounded-lg bg-secondary/50 text-center">
                            <p className="text-sm font-bold text-primary">{value}</p>
                            <p className="text-[10px] text-muted-foreground capitalize">{key}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-muted rounded w-full" />
                        <div className="h-2 bg-muted/70 rounded w-5/6" />
                        <div className="h-2 bg-muted/50 rounded w-4/6" />
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 bg-primary/20 rounded-md flex-1" />
                        <div className="h-8 bg-muted rounded-md w-20" />
                      </div>
                    </div>
                  </div>
                  {/* Device Icons */}
                  <div className="absolute -bottom-2 -right-2 flex gap-1">
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                      <Monitor className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center">
                      <Smartphone className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3 p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">
                    {currentIndex + 1} / {projects.length}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border"
                      >
                        <tech.icon className="w-4 h-4" />
                        <span className="text-sm font-medium text-foreground">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
