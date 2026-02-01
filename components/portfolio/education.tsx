"use client";

import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "Your University Name",
    year: "2019 - 2023",
    grade: "8.5 CGPA",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Background
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Education
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Academic background and qualifications
            </p>
          </div>

          {/* Education */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Academic Qualification</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-8 rounded-2xl bg-card border border-border"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">{edu.field}</p>
                    </div>
                    <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold w-fit">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications section is commented out as requested */}
          {/* 
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="...">
                  ...
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
