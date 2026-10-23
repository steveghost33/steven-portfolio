import { skillGroups } from "../data/portfolio.js";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0B0D14] py-20 max-lg:py-14">
      <div className="container">
        <div className="mb-12">
          <p className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-blue-400">Capabilities</p>
          <h2 className="text-[clamp(2.1rem,3.8vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white text-balance max-w-[22ch]">
            The tools are flexible. The thinking stays consistent.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[0.82rem] font-medium text-white/60"
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
