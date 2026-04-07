const skillGroups = [
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
    skills: ["CRM Implementation", "AI Workflow Integration", "LMS Development", "HRIS Setup", "Digital Strategy", "Staff Training"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git / GitHub", "Vercel", "Netlify", "Articulate / SCORM", "HubSpot", "Google Workspace"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <div className="text-center mb-16 max-lg:mb-10">
          <div className="caption small-2 uppercase text-p3 mb-4">What I Work With</div>
          <h2 className="h2 text-p4 max-lg:h3">Skills & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="bg-s2 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="h6 text-p4 mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-p1 border border-p1/30 bg-p1/5 hover:bg-p1/15 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
