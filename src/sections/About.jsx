import SectionHeading from "../components/SectionHeading.jsx";
import { stats } from "../data/portfolio.js";

const About = () => {
  return (
    <section id="about" className="section-rule py-24 max-lg:py-16">
      <div className="container grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        <SectionHeading
          eyebrow="About"
          title="Built for organizations that need clarity, not clutter."
          align="left"
          titleClassName="h3"
        />

        <div className="grid gap-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
            <div className="space-y-6">
              <p className="body-1">
                I’m a Detroit-based full-stack developer and technology consultant with 15 years of experience helping nonprofits and small businesses build systems people can actually live with.
              </p>
              <p className="body-3">
                My work spans websites, CRM implementations, AI workflows, LMS platforms, and internal operations tools. The common thread is making the final experience feel simpler, calmer, and more maintainable for the people using it day to day.
              </p>
              <p className="body-3">
                I founded Ella Tech Solutions to bring thoughtful digital strategy and production-ready execution to teams that want better outcomes without the usual noise or over-engineering.
              </p>
            </div>

            <div className="space-y-6 border-l border-s3/70 pl-6 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="h4 text-p4">{value}</p>
                  <p className="small-1 mt-1 text-p5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
