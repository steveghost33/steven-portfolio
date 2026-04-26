import Button from "../components/Button.jsx";
import ExternalProfileLink from "../components/ExternalProfileLink.jsx";
import { profile } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-x-0 top-0 h-[34rem]">
        <div className="absolute -left-[8%] bottom-14 h-[18rem] w-[42rem] rounded-[50%] bg-s5/95" />
        <div className="absolute left-[18%] bottom-8 h-[15rem] w-[36rem] rounded-[50%] bg-s5/90" />
        <div className="absolute left-[44%] bottom-2 h-[13rem] w-[30rem] rounded-[50%] bg-s5/80" />
        <div className="absolute right-[-4%] bottom-10 h-[18rem] w-[36rem] rounded-[50%] bg-s5/85" />
      </div>

      <div className="relative z-10 container">
        <header className="grid items-end gap-12 pb-24 pt-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="max-w-[720px]">
            <p className="caption">Detroit-based developer and consultant</p>
            <h1 className="h1 max-w-[10ch] text-balance">
              Websites and systems that feel clear, calm, and genuinely useful.
            </h1>
            <p className="body-1 mt-8 max-w-[56ch]">
              I build polished digital experiences for nonprofits, small businesses, and mission-driven teams that need more than a pretty homepage. The goal is simple: make the technology easier to understand and easier to use.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#projects">View selected work</Button>
              {profile.socials.map((social) => (
                <ExternalProfileLink key={social.id} social={social} />
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
            <div className="absolute left-[-2rem] top-10 h-3 w-3 rounded-sm bg-p1/70" />
            <div className="absolute left-[12%] top-2 h-2.5 w-2.5 rounded-sm bg-p3/70" />
            <div className="absolute left-[22%] top-12 h-3 w-3 rounded-sm bg-p1/60" />
            <div className="absolute left-[34%] top-0 h-2.5 w-2.5 rounded-sm bg-p3/80" />
            <div className="absolute left-[50%] top-8 h-3 w-3 rounded-sm bg-p1/70" />
            <div className="absolute left-[64%] top-1 h-2.5 w-2.5 rounded-sm bg-p3/60" />
            <div className="absolute left-[78%] top-10 h-3 w-3 rounded-sm bg-p1/65" />
            <div className="absolute left-[90%] top-3 h-2.5 w-2.5 rounded-sm bg-p3/80" />
            <div className="relative mx-auto flex h-[25rem] items-end justify-center">
              <div className="absolute bottom-0 h-[15rem] w-full rounded-[50%] bg-s2/80" />
              <img
                src="/images/steven-bowman.jpg"
                alt={profile.name}
                className="relative z-10 h-[22rem] w-[18rem] rounded-[5rem] object-cover shadow-200 grayscale-[0.05]"
              />
            </div>
          </div>
        </header>

        <div className="grid gap-10 border-t border-s3/70 py-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)]">
          <div>
            <p className="caption">What I do</p>
            <p className="body-2 max-w-[58ch]">
              Full-stack development, CRM implementation, AI workflows, and digital training systems with an emphasis on clarity, maintainability, and real-world adoption.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            <div>
              <dt className="small-2 text-p3">Experience</dt>
              <dd className="mt-2 text-2xl font-semibold text-p4">15+ years</dd>
            </div>
            <div>
              <dt className="small-2 text-p3">Based in</dt>
              <dd className="mt-2 text-2xl font-semibold text-p4">{profile.location}</dd>
            </div>
            <div>
              <dt className="small-2 text-p3">Focus</dt>
              <dd className="mt-2 text-2xl font-semibold text-p4">Web, CRM, AI</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
