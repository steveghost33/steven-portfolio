import Button from "../components/Button.jsx";
import SocialLink from "../components/SocialLink.jsx";
import { profile, stats } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-20 lg:py-28">
      {/* Subtle top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-p1/30 to-transparent" aria-hidden="true" />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_440px] lg:gap-16">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1">
            {/* Availability pill */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-p1/25 bg-p1/6 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-p1" aria-hidden="true" />
              <span className="text-[0.8rem] font-semibold text-p1 tracking-[0.02em]">Available for select projects</span>
            </div>

            <h1 className="h1 mb-6 max-w-[15ch] text-balance">
              Developer & consultant who builds things people actually use.
            </h1>

            <p className="body-1 mb-10 max-w-[44ch]">
              15+ years delivering websites, web apps, AI workflows, and CRM systems for nonprofits, small businesses, and growing teams.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button href="#projects">View My Work</Button>
              <Button href="#contact" variant="secondary">Get in Touch</Button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-s3 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[1.9rem] font-extrabold leading-none tracking-[-0.04em] text-p4">{value}</p>
                  <p className="mt-1.5 text-[0.85rem] font-medium text-p5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              {/* Photo card */}
              <div className="overflow-hidden rounded-3xl shadow-[0_8px_40px_rgba(15,23,42,0.12)]">
                <img
                  src="/images/steven-bowman-pro.jpg"
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              {/* Floating location badge */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-s3 bg-s1 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-p1/10 text-p1" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9ZM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-p3">Based in</p>
                  <p className="text-[0.9rem] font-bold text-p4">{profile.location}</p>
                </div>
              </div>

              {/* Floating social badge */}
              <div className="absolute -right-4 top-6 flex items-center gap-2.5 rounded-2xl border border-s3 bg-s1 px-4 py-3 shadow-[0_8px_24px_rgba(15,23,42,0.10)]">
                {profile.socials.map((social) => (
                  <SocialLink key={social.id} social={social} iconClassName="h-4 w-4" variant="box" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
