"use client";

import { Github, GitCommit, GitPullRequest, Star, Folder, Code2 } from "lucide-react";

const stats = [
  { icon: Folder, label: "Repositories", value: "25+" },
  { icon: GitCommit, label: "Commits", value: "500+" },
  { icon: GitPullRequest, label: "Pull Requests", value: "50+" },
  { icon: Star, label: "Stars Earned", value: "100+" },
];

const contributions = [
  { day: "Mon", level: 2 },
  { day: "Tue", level: 3 },
  { day: "Wed", level: 1 },
  { day: "Thu", level: 4 },
  { day: "Fri", level: 3 },
  { day: "Sat", level: 2 },
  { day: "Sun", level: 1 },
];

const languages = [
  { name: "Java", percentage: 35, color: "bg-orange-500" },
  { name: "JavaScript", percentage: 30, color: "bg-yellow-500" },
  { name: "TypeScript", percentage: 20, color: "bg-blue-500" },
  { name: "C#", percentage: 10, color: "bg-purple-500" },
  { name: "Other", percentage: 5, color: "bg-gray-500" },
];

export function GithubStats() {
  return (
    <section id="github" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Open Source
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              GitHub Activity
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              My contributions and activity on GitHub
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border text-center"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contribution Graph */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Github className="h-5 w-5 text-foreground" />
                <h3 className="font-semibold text-foreground">Weekly Activity</h3>
              </div>
              
              <div className="flex justify-between gap-2">
                {contributions.map((day, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className="flex flex-col gap-1">
                      {[4, 3, 2, 1].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-4 rounded-sm ${
                            day.level >= level ? "bg-primary" : "bg-secondary"
                          }`}
                          style={{ opacity: day.level >= level ? 0.25 * level : 1 }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-end gap-2 mt-4">
                <span className="text-xs text-muted-foreground">Less</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className="w-3 h-3 rounded-sm bg-primary"
                      style={{ opacity: 0.25 * level }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">More</span>
              </div>
            </div>

            {/* Language Stats */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="h-5 w-5 text-foreground" />
                <h3 className="font-semibold text-foreground">Most Used Languages</h3>
              </div>

              {/* Progress bar */}
              <div className="flex rounded-full overflow-hidden h-3 mb-6">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className={`${lang.color}`}
                    style={{ width: `${lang.percentage}%` }}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${lang.color}`} />
                    <span className="text-sm text-muted-foreground">{lang.name}</span>
                    <span className="text-sm text-foreground font-medium ml-auto">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GitHub Profile Link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 text-foreground font-medium transition-colors"
            >
              <Github className="h-5 w-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
