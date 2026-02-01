"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Github, Linkedin, Download, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Simple grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Client Projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150 text-balance tracking-tight">
            Hi, I&apos;m{" "}
            <span className="text-primary">Dharun Kumar K</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Software Developer
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 text-pretty">
            Building <span className="text-foreground font-medium">scalable</span>, <span className="text-foreground font-medium">reliable</span> & <span className="text-foreground font-medium">user-centered</span> software solutions with 2+ years of hands-on industry experience in secure, data-driven applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-500 mb-10">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card px-8 h-12 text-base font-medium bg-transparent"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-card px-8 h-12 text-base font-medium bg-transparent"
              asChild
            >
              <a href="/DharunKumar K (Final Resume).pdf" download="DharunKumar_K_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-700">
            <a
              href="https://github.com/Dharun0021"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/dharunkumar-k21/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:dharunk026@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
