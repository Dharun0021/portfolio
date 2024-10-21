"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Next.Js",
    designation: "nextjs",
    image:
      "https://imgs.search.brave.com/rPc0MIwXC7DBG2kQyDgHU1uD8bveYGF2jlF7eUknZV8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25leHRq/czc2ODUubG9nb3dp/ay5jb20ud2VicA",
  },
  {
    id: 2,
    name: "Tailwind Css",
    designation: "tailwaindcss",
    image:
      "https://imgs.search.brave.com/60rV0Keugghen4UoTpA7gnGy897m_sIHzchRGRaj58c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3RhaWx3/aW5kLWNzczMyMzIu/bG9nb3dpay5jb20u/d2VicA",
  },
  {
    id: 3,
    name: "FireBase",
    designation: "firebase",
    image:
      "https://imgs.search.brave.com/a_rPZiE5iJ8cO02gt_CXght_zvhSXtj5p2pCh8xqFrY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maXJl/YmFzZS5nb29nbGUu/Y29tL3N0YXRpYy9p/bWFnZXMvYnJhbmQt/Z3VpZGVsaW5lcy9s/b2dvLXZlcnRpY2Fs/LnBuZw",
  },
  {
    id: 4,
    name: "Mongo Db",
    designation: "Database",
    image:
      "https://imgs.search.brave.com/KFSaiOWbWy8zW3Rlc6w6Mn_gTZYLHpf6qNDsIJiwS8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NTgyMDQyMzg5Njct/M2E4MWEwNjNkMTYy/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1ueDhiVzl1/WjI5a1lueGxibnd3/Zkh3d2ZIeDhNQT09",
  },
  {
    id: 5,
    name: "React.Js",
    designation: "reactjs",
    image:
      "https://imgs.search.brave.com/UyOtX07f9m0XgDpkMW5qj6hvQAYtTI81pb15Nsj-wYQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy84NjA3ODgt/YmFzaWMtZnVuZGFt/ZW50YWxzLW9mLXJl/YWN0anMtd2hhdC1p/cy1yZWFjdGpzLS5w/bmc",
  },
  {
    id: 6,
    name: "Aceternity UIComponents",
    designation: "UI components",
    image:
      "https://imgs.search.brave.com/yCIKMatK2wA3VwregtI-pvP166QaPAwK-ANtMHSOwg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hY2V0/ZXJuaXR5LnN2ZWx0/ZWtpdC5pby9fYXBw/L2ltbXV0YWJsZS9h/c3NldHMvc3Bhcmts/ZXMuUXFLUjZTUlMu/cG5n",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <AnimatedTooltip items={people} />
    </div>
  );
}
