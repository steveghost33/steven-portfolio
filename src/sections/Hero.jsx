import { profile, stats } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* ── Full-bleed background photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/steven-bowman-pro.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ objectPosition: "72% center" }}
        />
        {/* Left-to-right fade: dark on left (text side), photo visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080C1E] via-[#080C1E]/88 to-[#080C1E]/15" />
        {/* Bottom fade so stats float above a solid base */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C1E]/70 via-transparent to-transparent" />
        {/* Mobile: heavier overall overlay */}
        <div className="absolute inset-0 bg-[#080C1E]/65 lg:hidden" />
      </div>

      {/* ── Content ── */}
      <div className="container relative z-10 flex min-h-[100svh] flex-col justify-center py-32 lg:py-40">
        <div className="w-full max-w-[600px]">

          {/* Eyebrow */}
          <p className="mb-7 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-blue-400">
            Detroit, MI &nbsp;·&nbsp; Developer &amp; Consultant
          </p>

          {/* Headline */}
          <h1 className="mb-7 text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white text-balance">
            I build things people actually use.
          </h1>

          {/* Sub */}
          <p className="mb-10 max-w-[44ch] text-[1.05rem] leading-[1.75] text-white/55">
            15+ years delivering websites, web apps, AI workflows, and CRM systems for nonprofits, small businesses, and growing teams.
          </p>

          {/* CTAs */}
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
          <div className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-[2.1rem] font-black leading-none tracking-[-0.05em] text-white">{value}</p>
                <p className="mt-1.5 text-[0.78rem] font-medium tracking-[0.04em] text-white/40 uppercase">{label}</p>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/30">Find me</span>
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
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/25">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/25 to-transparent" />
      </div>

    </section>
  );
};

export default Hero;
