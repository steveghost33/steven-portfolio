import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

const Skills = () => {
  return (
    <section id="skills" className="section-rule py-24 max-lg:py-16">
      <div className="container grid gap-12 lg:grid-cols-[300px_minmax(0,1fr)]">
        <SectionHeading
          eyebrow="Skills"
          title="The tools are flexible. The thinking stays consistent."
          align="left"
          titleClassName="h3"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="border-t border-s3/70 pt-5">
              <h3 className="h6 mb-5">{category}</h3>
              <ul className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-s3/80 bg-s2/35 px-4 py-2 text-sm font-medium text-p5"
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
