import { skillGroups } from "../data/portfolio.js";

const technologyTags = skillGroups
  .flatMap(({ skills }) => skills)
  .slice(0, 12);

const About = () => {
  return (
    <section id="about" className="section-rule bg-s2 py-20 max-lg:py-14">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">

          {/* Left col */}
          <div>
            <p className="caption">About</p>
            <h2 className="h3 text-balance">
              I turn ideas into products that work.
            </h2>
            <p className="mt-5 body-3">
              Based in Detroit. Building for mission-driven organizations and growing businesses since 2009.
            </p>
          </div>

          {/* Right col */}
          <div className="space-y-10">
            <div className="space-y-5">
              <p className="body-3">
                I'm a full-stack developer and technology consultant focused on building software that solves real problems. I care about clarity, performance, and creating experiences people actually enjoy using.
              </p>
              <p className="body-3">
                Over the years I've partnered with nonprofits and small businesses to build tools that save time, reduce friction, and help teams make a bigger impact — without the enterprise price tag.
              </p>
            </div>

            {/* Tech badges */}
            <div>
              <p className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-p3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologyTags.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-s3 bg-s1 px-3 py-1.5 text-[0.82rem] font-medium text-p5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
