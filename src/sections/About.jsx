import SectionHeading from "../components/SectionHeading.jsx";
import { stats } from "../data/portfolio.js";

const About = () => {
  return (
    <section id="about" className="border-t border-s3/70 py-24 max-lg:py-16">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading eyebrow="About Me" title="Built for people, not just platforms." align="left" titleClassName="h3" />
          </div>

          <div className="rounded-[18px] border border-s3 bg-s2/80 p-8 shadow-100 md:p-10">
            <p className="body-1 mb-6">
              I'm a Detroit-based full-stack developer and technology consultant with 15 years of experience helping nonprofits and small businesses implement technology that actually sticks.
            </p>
            <p className="body-3 mb-6">
              Most organizations invest in tools they never fully use. My work is focused on changing that — from building clean, responsive websites to implementing CRM systems, AI workflows, LMS platforms, and HRIS solutions that teams are trained and confident to use from day one.
            </p>
            <p className="body-3 mb-10">
              I founded Ella Tech Solutions to bring enterprise-level technology consulting to organizations that serve Detroit and beyond. Every project I take on is built around the people using it — not just the software.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {stats.map(({ value, label }) => (
                <div key={label} className="rounded-[14px] border border-s3 bg-s1 p-6">
                  <p className="h4 mb-2 text-p3">{value}</p>
                  <p className="small-1 text-p5">{label}</p>
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
