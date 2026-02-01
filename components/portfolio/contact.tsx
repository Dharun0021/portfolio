"use client";

import { Mail, Linkedin, Github, ArrowRight, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dharunk026@gmail.com",
    href: "mailto:dharunk026@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India (Remote Friendly)",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dharunkumar-k21/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Dharun0021",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dharunkumark913@gmail.com",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Have a project, opportunity, or collaboration in mind? Let&apos;s build
              something reliable, scalable, and impactful.
            </p>
          </div>

          {/* Contact Card */}
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left - Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with me
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.label !== "Email" ? "_blank" : undefined}
                        rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                        className="w-12 h-12 rounded-lg bg-secondary border border-transparent flex items-center justify-center hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - CTA */}
              <div className="flex flex-col justify-center items-center text-center p-8 rounded-xl bg-secondary border border-border">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Ready to start a project?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Drop me an email and let&apos;s discuss how I can help bring your ideas to life.
                </p>
                <Button
                  size="lg"
                  className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium"
                  asChild
                >
                  <a href="mailto:dharunkumark913@gmail.com">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
