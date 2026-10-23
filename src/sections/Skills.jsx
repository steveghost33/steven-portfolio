import { skillGroups } from "../data/portfolio.js";

const Skills = () => {
  return (
    <section id="skills" className="section-rule bg-s2 py-20 max-lg:py-14">
      <div className="container">
        <div className="mb-12">
          <p className="caption">Capabilities</p>
          <h2 className="h2 max-w-[22ch] text-balance">The tools are flexible. The thinking stays consistent.</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-s3 bg-s1 p-6"
            >
              <h3 className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-p1">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-s3 bg-s2 px-3 py-1.5 text-[0.82rem] font-medium text-p5"
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
