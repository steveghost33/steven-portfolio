import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

const Skills = () => {
  return (
    <section id="skills" className="border-t border-s3/70 py-24 max-lg:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="What I Work With"
          title="Skills and systems I use to keep projects moving."
          titleClassName="h2 max-lg:h3"
          className="mb-16 max-lg:mb-10"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-[18px] border border-s3 bg-s2/80 p-8 shadow-100"
            >
              <h3 className="h6 mb-6">{category}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[10px] border border-s3 bg-s1 px-4 py-2 text-sm font-medium text-p5 transition-colors duration-300 hover:border-p1/20 hover:text-p4"
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
