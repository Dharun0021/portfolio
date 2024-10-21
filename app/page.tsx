import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import Skills from "@/components/Skills";
import FloatingNav from "@/components/ui/floating-navbar";
import navItems from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex items-center justify-center flex-col 
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Experience />
        <RecentProject />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
