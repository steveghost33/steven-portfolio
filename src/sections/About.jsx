import { skillGroups } from "../data/portfolio.js";

const technologyTags = skillGroups
  .flatMap(({ skills }) => skills)
  .slice(0, 10);

const About = () => {
  return (
    <section id="about" className="section-rule py-12 max-lg:py-10">
      <div className="container grid gap-10 lg:grid-cols-[1.05fr_1.1fr_0.9fr]">
        <div>
          <p className="caption">About Me</p>
          <h2 className="h3 max-w-[11ch] text-balance">
            I help teams turn ideas into reliable, human-centered products.
          </h2>
        </div>

        <div className="space-y-6">
          <p className="body-3">
            I’m a full-stack developer and technology consultant with a passion for building software that solves real problems. I care about clarity, performance, and creating experiences people actually enjoy using.
          </p>
          <p className="body-3">
            Over the years, I’ve partnered with mission-driven organizations and small businesses to build tools that save time, reduce friction, and help them make a bigger impact.
          </p>
        </div>

        <div>
          <p className="caption">Technologies</p>
          <ul className="flex flex-wrap gap-2.5">
            {technologyTags.map((skill) => (
              <li
                key={skill}
                className="rounded-[8px] border border-s3/75 bg-s2/45 px-3 py-2 text-sm font-medium text-p5"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
