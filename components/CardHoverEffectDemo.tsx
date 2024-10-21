"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
        {
          title: "UI/UX Design",
          description:
            "With a strong focus on user experience and user interface design, I craft intuitive and engaging digital interfaces. I prioritize both form and function to create user-friendly designs that drive business success.",
          link: "#ui-ux-design",
        },
        {
          title: "Web Application Development",
          description:
            "Proficient in building responsive and interactive web applications using modern technologies like React, JavaScript, and Next.js. I bring ideas to life through clean code and efficient functionality.",
          link: "#web-development",
        },
        {
          title: "GitHub Collaboration",
          description:
            "Experienced in version control with Git and GitHub, I collaborate effectively on projects, managing codebases, and contributing to open-source. My GitHub profile showcases various projects that demonstrate my skills.",
          link: "https://github.com/your-profile",
        },
        {
          title: "Personal Projects",
          description:
            "I have completed several projects that reflect my growth and passion for web development. These projects range from simple to complex, and they show my ability to solve real-world problems using web technologies.",
          link: "#projects",
        },
        {
          title: "Hands-On Experience",
          description:
            "I believe in learning by doing. Through hands-on coding and practical implementation, I have built applications and interfaces that solve user-centric problems, gaining real-world experience.",
          link: "#hands-on",
        },
        {
          title: "Development Tools",
          description:
            "I am skilled in using a wide range of tools, including VS Code, Figma, and Git, which enhance my productivity and allow me to deliver high-quality work. I continuously explore new tools to improve my workflow.",
          link: "#tools",
        },
    ];

export default CardHoverEffectDemo;