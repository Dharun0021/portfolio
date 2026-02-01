"use client";

import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeCTA() {
  const resumePath = "/DharunKumar K (Final Resume).pdf";

  const handleDownload = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "DharunKumar_K_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Download My Resume
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Get a detailed overview of my experience and skills
                </p>
              </div>
            </div>
            <div className="flex gap-3 pointer-cursor">
              <Button
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a
                  href={resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Online
                </a>
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4 mr-2 pointer-cursor" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
