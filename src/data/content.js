// ============================================================
// src/data/content.js — Add these projects to your portfolio
// ============================================================

import hero_img from "../assets/hero_img.png";

export const profile = {
  name: "Muhammad Ibrahim",
  title: "Full Stack Web Developer & AI Engineer",
  tagline: "Building scalable web applications and AI software.",
  email: "mi6054342@gmail.com",
  phone: "+92-317-591-7636",
  photo: hero_img,
  socials: {
    github: "https://github.com/ibrahim-xdev",
    linkedin: "https://www.linkedin.com/in/muhammad-ibrahim-22b0332b7",
  },
};

export const about = {
  paragraphs: [
    "Full Stack and AI-Powered Web Applications with hands-on experience, focused on building scalable applications end-to-end, from database design and backend APIs to polished, responsive interfaces.",
    "Strong Foundation in React, Express.js & PostgreSQL with proven expertise in frontend and backend",
    "Passionate about creating AI-powered products that solve real-world problems and drive measurable business impact.",
  ],
};

export const experiences = [
  {
    role: "Full Stack Web Developer (Intern)",
    company: "Decode Labs",
    period: "August 2026 — Present",
    description:
      "Building Scalable Web Apps & Improving Team Collaborative Work",
    tags: ["React", "Node.js", "PostgreSQL", "Express.js, etc"],
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C/C++", "Java", "Python", "JavaScript"],
  },
  {
    label: "Web & Frameworks",
    skills: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "FastAPI",
      "HTML5",
      "CSS",
    ],
  },
  {
    label: "Tools & Data",
    skills: ["Git", "GitHub", "VS Code", "DBMS"],
  },
];

// ============================================================
//  PROJECTS — Add your work here
// ============================================================
//  Each project supports:
//    title       — string (required)
//    description — string (required)
//    tags        — string[] (optional)
//    link        — string (optional) live demo URL
//    repo        — string (optional) GitHub repo URL
// ============================================================

export const projects = [
  {
    title: "Job Application Form",
    description:
      "Simple job application form with an Express backend that scores applicants by experience level and returns an eligibility status.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Node.js",
      "Express.js",
      "File system (built-in path)",
      "In‑memory storage",
    ],
    link: "https://application-form-ra86.onrender.com/",
    repo: "https://github.com/ibrahim-xdev/application-form",
  },
  // ────────────────────────────────────────────────────────────────
  //  1. TrustNet — Recruitment & Candidate Verification
  // ────────────────────────────────────────────────────────────────
  {
    title: "ResumeCraft",
    description:
      "A live, browser-based resume builder with instant template switching, a resume strength meter, and a built-in analyzer — pure HTML, CSS & JS.",
    tags: ["HTML5", "CSS3", "JavaScript(ES6+)", "localStorage"],
    link: "https://ibrahim-xdev.github.io/resume-craft/",
    repo: "https://github.com/ibrahim-xdev/resume-craft",
  },

  // ────────────────────────────────────────────────────────────────
  //  2. AI Resume Analyzer — Smart CV Parsing
  // ────────────────────────────────────────────────────────────────
  {
    title: "Gratitude Jar",
    description:
      "A cozy digital gratitude jar - write down things you're thankful for, watch them collect as gems in a jar, and pull a random one anytime you need a lift. Built with HTML + CSS + JS.",
    tags: ["HTML5", "CSS3", "JavaScript(ES6+)", "localStorage"],
    link: "https://ibrahim-xdev.github.io/gratitude-jar/",
    repo: "https://github.com/ibrahim-xdev/gratitude-jar",
  },

  // ────────────────────────────────────────────────────────────────
  //  3. TaskFlow — Real‑time Project Management
  // ────────────────────────────────────────────────────────────────
  {
    title: "Daily Intention & Reflection",
    description:
      "Set a daily intention and reflect each evening. A simple, private, web app with mood tracking, rating, streak counter, and dark mode – all stored in your browser.",
    tags: ["HTML5", "CSS3", "JavaScript(ES6+)", "localStorage"],
    link: "https://ibrahim-xdev.github.io/Daily-Intention-Reflection/",
    repo: "https://github.com/ibrahim-xdev/Daily-Intention-Reflection",
  },
];
