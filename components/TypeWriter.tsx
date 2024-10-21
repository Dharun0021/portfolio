"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "I am a",
    },
    {
      text: "Front-End Maestro,",
    },
    {
      text: "Let's",
    },
    {
      text: "Collaborate!",
      className: "text-violet-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
        
    </div>
  );
}
