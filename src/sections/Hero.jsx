import { profile, stats } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#080C1E]">

      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(29,78,216,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <div className="grid min-h-[100svh] items-center gap-12 py-28 lg:grid-cols-[1fr_360px] lg:gap-20 lg:py-32">

          {/* ── Text ── */}
          <div className="order-2 lg:order-1">
            <p className="mb-7 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-blue-400">
              Detroit, MI &nbsp;·&nbsp; Developer &amp; Consultant
            </p>

            <h1 className="mb-7 text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.92] tracking-[-0.04em] text-white text-balance max-w-[14ch]">
              I build things people actually use.
            </h1>

            <p className="mb-10 max-w-[44ch] text-[1.05rem] leading-[1.75] text-white/55">
              15+ years delivering websites, web apps, AI workflows, and CRM systems for nonprofits, small businesses, and growing teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center rounded-lg bg-blue-600 px-7 text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-blue-500"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-lg border border-white/25 px-7 text-[0.9rem] font-semibold text-white/80 transition-colors duration-200 hover:border-white/60 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[2rem] font-black leading-none tracking-[-0.05em] text-white">{value}</p>
                  <p className="mt-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/35">{label}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/30">Find me</span>
              {profile.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.title}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/50 transition-colors duration-200 hover:border-white/40 hover:text-white"
                >
                  <img src={social.icon} alt="" className="h-4 w-4 brightness-0 invert" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-[260px] lg:w-[320px]">
              {/* Glow */}
              <div
                className="absolute -inset-4 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(circle, rgba(29,78,216,0.4) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/steven-bowman-pro.jpg"
                  alt={profile.name}
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: "3/4" }}
                />
                {/* Subtle bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080C1E]/50 to-transparent" />
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-3 -left-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0D1330] px-3.5 py-2.5 shadow-xl">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9ZM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-white/35">Based in</p>
                  <p className="text-[0.82rem] font-bold text-white">{profile.location}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
