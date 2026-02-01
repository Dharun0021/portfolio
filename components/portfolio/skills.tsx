"use client";

import {
  JavaIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  DotNetIcon,
  PostgreSQLIcon,
  MongoDBIcon,
  SqlIcon,
  InfluxDBIcon,
  RestApiIcon,
  JwtIcon,
  GitIcon,
  FlutterIcon,
  DockerIcon,
} from "./tech-icons";
import { Code, Database, Globe, Lock, Server, Wrench } from "lucide-react";

const technologies = [
  { name: "Java", icon: JavaIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: ".NET", icon: DotNetIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Node.js", icon: NodeJsIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "SQL", icon: SqlIcon },
  { name: "InfluxDB", icon: InfluxDBIcon },
  { name: "REST APIs", icon: RestApiIcon },
  { name: "JWT Auth", icon: JwtIcon },
  { name: "Git", icon: GitIcon },
  { name: "Docker", icon: DockerIcon },
];

const expertiseAreas = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
    color: "text-yellow-400",
  },
  {
    icon: Globe,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    color: "text-blue-400",
  },
  {
    icon: Server,
    title: "Backend",
    skills: [".NET", "Node.js", "REST APIs", "GraphQL"],
    color: "text-green-400",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "InfluxDB", "Redis"],
    color: "text-orange-400",
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "CI/CD", "AWS"],
    color: "text-purple-400",
  },
  {
    icon: Lock,
    title: "Security",
    skills: ["JWT Auth", "OAuth", "RBAC", "Encryption"],
    color: "text-red-400",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Technical Proficiency
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Technologies and tools I work with to build reliable software solutions
            </p>
          </div>

          {/* Technologies with Icons */}
          <div className="mb-20">
            <h3 className="text-lg font-semibold text-foreground mb-8 text-center">Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-0.5"
                >
                  <tech.icon className="w-6 h-6" />
                  <span className="text-sm font-medium text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Expertise - Card Grid */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8 text-center">Core Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {expertiseAreas.map((area) => (
                <div 
                  key={area.title} 
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors text-center"
                >
                  <div className={`w-10 h-10 mx-auto mb-3 rounded-lg bg-secondary flex items-center justify-center ${area.color}`}>
                    <area.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    {area.title}
                  </h4>
                  <div className="space-y-1.5">
                    {area.skills.map((skill) => (
                      <p key={skill} className="text-xs text-muted-foreground">
                        {skill}
                      </p>
                    ))}
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
