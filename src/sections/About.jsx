import SectionHeading from "../components/SectionHeading.jsx";
import { stats } from "../data/portfolio.js";

const About = () => {
  return (
    <section id="about" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-80 flex-shrink-0">
            <SectionHeading eyebrow="About Me" title="Who I Am" align="left" titleClassName="h3" />
          </div>

          <div className="flex-1">
            <p className="body-1 text-p5 mb-6">
              I'm a Detroit-based full-stack developer and technology consultant with 15 years of experience helping nonprofits and small businesses implement technology that actually sticks.
            </p>
            <p className="body-3 text-p5 mb-6">
              Most organizations invest in tools they never fully use. My work is focused on changing that — from building clean, responsive websites to implementing CRM systems, AI workflows, LMS platforms, and HRIS solutions that teams are trained and confident to use from day one.
            </p>
            <p className="body-3 text-p5 mb-10">
              I founded Ella Tech Solutions to bring enterprise-level technology consulting to organizations that serve Detroit and beyond. Every project I take on is built around the people using it — not just the software.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-s2 rounded-2xl p-6 border border-white/10 text-center">
                  <p className="h4 text-p1 mb-1">{value}</p>
                  <p className="small-1 text-p5 uppercase tracking-wide">{label}</p>
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
