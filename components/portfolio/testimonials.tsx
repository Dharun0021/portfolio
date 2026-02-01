"use client";

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Anitha M",
    role: "Project Manager",
    company: "Anpri Connetra Pvt Limited",
    content:
      "Dharun delivered exceptional work on our dashboard project. His attention to detail and understanding of our requirements made the collaboration smooth and efficient. The final product exceeded our expectations.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    company: "ShopLocally",
    content:
      "Working with Dharun was a great experience. He built a robust backend system that handles our operations seamlessly. His technical expertise and communication skills are outstanding. Highly recommend!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Shopper",
    company: "Jewelry E-Commerce Platform",
    content:
      "Dharun's technical skills and problem-solving abilities are impressive. He quickly understood our complex requirements and delivered a scalable solution that continues to serve us well. A true professional.",
    rating: 5,
    avatar: "MC",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              What People Say
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Feedback from colleagues and clients I have worked with
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              {/* Large Quote */}
              <Quote className="h-12 w-12 text-primary/20 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                &quot;{testimonials[activeIndex].content}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-lg">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Small Cards Preview */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {testimonials.map((testimonial, idx) => (
              <button
                key={testimonial.name}
                onClick={() => setActiveIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  idx === activeIndex 
                    ? "bg-primary/10 border-primary/40" 
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    idx === activeIndex ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}>
                    {testimonial.avatar}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-medium text-foreground text-sm truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.company}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
