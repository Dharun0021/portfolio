"use client";
import React from "react";
import { Button } from "./ui/moving-border"; // Assuming you're importing a styled Button component

export function MovingBorderDemo() {
  return (
    <div className="flex flex-col space-y-5"> {/* Using flexbox for vertical stacking */}
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border border-neutral-200 dark:border-slate-800 px-6 py-4 w-full" // Increased py for more vertical padding
        style={{ overflow: 'visible', lineHeight: '1.5' }}  // Adjust line height
      >
        <span>
          <span className="text-violet-500">EMAIL:</span><br />
          dharunkumark2003@<br />gmail.com
        </span>
      </Button>

      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border border-neutral-200 dark:border-slate-800 px-6 py-4 w-full"
        style={{ overflow: 'visible', lineHeight: '1.5' }}  // Adjust line height
      >
        <span>
          <span className="text-violet-500">MOBILE:</span><br />
          +91 7708727533
        </span>
      </Button>

      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border border-neutral-200 dark:border-slate-800 px-6 py-4 w-full"
        style={{ overflow: 'visible', lineHeight: '1.5' }}  // Adjust line height
      >
        <span>
          <span className="text-violet-500">ADDRESS:</span><br />
          College Road, Tiruppur
        </span>
      </Button>
    </div>
  );
}

export default MovingBorderDemo;
