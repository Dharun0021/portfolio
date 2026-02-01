import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Achievements } from "@/components/portfolio/achievements";
import { Education } from "@/components/portfolio/education";
import { GithubStats } from "@/components/portfolio/github-stats";
import { ResumeCTA } from "@/components/portfolio/resume-cta";
import { Process } from "@/components/portfolio/process";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { AnimatedSection } from "@/components/portfolio/animated-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AnimatedSection id="home">
        <Hero />
      </AnimatedSection>
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="experience">
        <Experience />
      </AnimatedSection>
      <AnimatedSection id="skills">
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection>
        <Achievements />
      </AnimatedSection>
      {/* <Education /> */}
      <AnimatedSection>
        <GithubStats />
      </AnimatedSection>
      <AnimatedSection>
        <ResumeCTA />
      </AnimatedSection>
      <AnimatedSection>
        <Process />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
