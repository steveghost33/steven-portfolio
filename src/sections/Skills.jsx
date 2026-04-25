import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

const Skills = () => {
  return (
    <section id="skills" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills & Tools"
          titleClassName="h2 max-lg:h3"
          className="mb-16 max-lg:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="bg-s2 rounded-2xl p-8 border border-white/10"
            >
              <h3 className="h6 text-p4 mb-6">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-p1 border border-p1/30 bg-p1/5 hover:bg-p1/15 transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
