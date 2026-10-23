import { Link } from "react-router-dom";
import SocialLink from "../components/SocialLink.jsx";
import { profile, stats } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0B0D14]">
      <div className="container">
        <div className="grid min-h-[88vh] items-center gap-0 lg:grid-cols-[1fr_420px] lg:gap-14">

          {/* ── Text ── */}
          <div className="order-2 py-20 lg:order-1 lg:py-28">
            {/* Label */}
            <p className="mb-8 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-blue-400">
              Detroit, MI · Developer & Consultant
            </p>

            <h1 className="mb-7 text-[clamp(2.9rem,6vw,5.25rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-white text-balance max-w-[14ch]">
              I build things people actually use.
            </h1>

            <p className="mb-10 max-w-[42ch] text-[1.05rem] leading-[1.75] text-white/55">
              15+ years delivering websites, web apps, AI workflows, and CRM systems for nonprofits, small businesses, and growing teams.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-11 items-center rounded-lg bg-blue-600 px-6 text-[0.9rem] font-semibold text-white transition-colors duration-200 hover:bg-blue-500"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-11 items-center rounded-lg border border-white/20 px-6 text-[0.9rem] font-semibold text-white/80 transition-colors duration-200 hover:border-white/50 hover:text-white"
              >
                Get in Touch
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[1.9rem] font-extrabold leading-none tracking-[-0.04em] text-white">{value}</p>
                  <p className="mt-1.5 text-[0.8rem] font-medium text-white/40">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className="relative order-1 flex items-end justify-center pt-16 lg:order-2 lg:self-stretch lg:pt-0">
            {/* Glow behind photo */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[80px]"
              style={{ background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative w-full max-w-[340px] lg:max-w-none">
              <img
                src="/images/steven-bowman-pro.jpg"
                alt={profile.name}
                className="relative z-10 w-full rounded-t-3xl object-cover object-top lg:h-[calc(88vh-0px)] lg:rounded-t-3xl lg:rounded-b-none"
                style={{ maxHeight: "560px" }}
              />

              {/* Social badge — overlaid bottom-left of photo */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/10 px-3.5 py-2.5 backdrop-blur-md">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/50 mr-1">Find me</span>
                {profile.socials.map((social) => (
                  <SocialLink key={social.id} social={social} iconClassName="h-3.5 w-3.5" variant="box" />
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
