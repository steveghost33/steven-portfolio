export const navLinks = [
  { title: "Home", href: "#hero" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export const profile = {
  name: "Steven Bowman",
  initials: "SB",
  location: "Detroit, MI",
  phone: {
    label: "313-474-1772",
    href: "tel:3134741772",
  },
  email: {
    label: "stevenabowman1@gmail.com",
    href: "mailto:stevenabowman1@gmail.com",
  },
  socials: [
    {
      id: "github",
      title: "GitHub",
      handle: "@steveghost33",
      icon: "/images/socials/github.svg",
      url: "https://github.com/steveghost33",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      handle: "steven-a-bowman",
      icon: "/images/socials/linkedin.svg",
      url: "https://www.linkedin.com/in/steven-a-bowman/",
    },
  ],
};

export const stats = [
  { value: "15+", label: "Years of experience" },
  { value: "50+", label: "Projects delivered" },
  { value: "Detroit", label: "Based in Michigan" },
];

export const experienceHighlights = [
  {
    title: "Full-stack product development",
    description: "Build responsive marketing sites, internal platforms, and customer-facing tools with a focus on clarity, performance, and maintainable structure.",
  },
  {
    title: "CRM and workflow implementation",
    description: "Design systems that help teams manage relationships, automate repetitive work, and reduce friction across day-to-day operations.",
  },
  {
    title: "AI and training systems",
    description: "Create practical AI workflows and digital learning experiences that teams can adopt without a painful ramp-up.",
  },
];

export const projects = [
  {
    title: "Ella Tech Solutions",
    image: "/images/projects/ellatech.png",
    alt: "Ella Tech Solutions website — Detroit-based technology consulting firm built with React and Tailwind CSS",
    description:
      "A modern SaaS-style website for a Detroit-based technology consulting firm. Built with React, Tailwind CSS, and Vite — showcasing services, pricing, and client intake optimized for nonprofits and small businesses.",
    tags: ["React", "Tailwind CSS", "Vite", "React Router"],
    url: "https://www.ellatechsolutions.com",
  },
  {
    title: "Team Cabin",
    image: "/images/projects/teamcabin.png",
    alt: "Team Cabin band website — indie music website with interactive fan engagement game",
    description:
      "A website for an indie music band with visitor engagement at its core. Features an interactive game so fans can connect with the brand beyond just listening.",
    tags: ["Web Design", "Music", "Interactive"],
    url: "https://weareteamcabin.com",
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML / CSS", "Vite", "React Router"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL", "MySQL", "Express.js", "Axios"],
  },
  {
    category: "Design & UX",
    skills: ["Figma", "Canva", "Responsive Design", "Mobile-First", "UI/UX Principles"],
  },
  {
    category: "Technology Consulting",
    skills: [
      "CRM Implementation",
      "AI Workflow Integration",
      "LMS Development",
      "HRIS Setup",
      "Digital Strategy",
      "Staff Training",
    ],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git / GitHub", "Vercel", "Netlify", "Articulate / SCORM", "HubSpot", "Google Workspace"],
  },
];
