import Button from "../components/Button.jsx";
import SocialLink from "../components/SocialLink.jsx";
import { profile } from "../data/portfolio.js";

const facts = [
  { label: "Detroit, MI", detail: "USA", icon: "location" },
  { label: "Available for", detail: "select projects", icon: "briefcase" },
  { label: "15+ Years", detail: "Experience", icon: "clock" },
];

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[240px] overflow-hidden">
        <div className="absolute left-[-6%] top-10 h-14 w-[24%] rounded-[50%] bg-s5/90" />
        <div className="absolute left-[14%] top-16 h-12 w-[18%] rounded-[50%] bg-s5/85" />
        <div className="absolute left-[28%] top-12 h-16 w-[22%] rounded-[50%] bg-s5/78" />
        <div className="absolute left-[46%] top-18 h-14 w-[20%] rounded-[50%] bg-s5/72" />
        <div className="absolute left-[60%] top-12 h-18 w-[24%] rounded-[50%] bg-s5/84" />
        <div className="absolute right-[-4%] top-8 h-16 w-[24%] rounded-[50%] bg-s5/76" />
        <div className="absolute left-[-8%] top-24 h-16 w-[36%] rotate-[7deg] rounded-[50%] bg-s4/18" />
        <div className="absolute left-[18%] top-28 h-14 w-[28%] rotate-[-4deg] rounded-[50%] bg-s4/16" />
        <div className="absolute left-[40%] top-24 h-16 w-[34%] rotate-[6deg] rounded-[50%] bg-s4/14" />
        <div className="absolute left-[66%] top-30 h-14 w-[28%] rotate-[-7deg] rounded-[50%] bg-s4/16" />
      </div>

      <div className="container relative pb-8 pt-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px_170px]">
          <div className="pt-20 lg:pt-24">
            <p className="caption">Full-stack developer</p>
            <h1 className="h1 max-w-[9.8ch] text-balance">
              I build clean, useful web experiences and systems that scale.
            </h1>
            <p className="body-1 mt-7 max-w-[27ch]">
              15 years of experience delivering websites, web apps, AI workflows, and CRM solutions for nonprofits and small businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Button href="#projects">View My Work</Button>
              <div className="flex items-center gap-3">
                {profile.socials.map((social) => (
                  <SocialLink key={social.id} social={social} iconClassName="h-4 w-4" variant="plain" />
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[420px] items-end justify-center">
            <div className="absolute bottom-0 h-16 w-[88%] rounded-[50%] bg-black/12 blur-xl" />
            <div className="absolute bottom-[16%] left-[-8%] h-24 w-24 rounded-full bg-s5/70 blur-2xl" />
            <img
              src="/images/steven-bowman.jpg"
              alt={profile.name}
              className="relative z-10 h-[410px] w-[300px] object-cover object-center [mask-image:linear-gradient(to_bottom,black_74%,transparent_100%)]"
            />
          </div>

          <dl className="flex flex-col gap-6 border-l border-s3/70 pl-6 pb-6">
            {facts.map(({ label, detail, icon }) => (
              <div key={label} className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3 border-b border-s3/55 pb-4 last:border-b-0 last:pb-0">
                <span className="mt-0.5 text-p5" aria-hidden="true">
                  {icon === "location" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
                      <path d="M12 21s6-5.63 6-11a6 6 0 1 0-12 0c0 5.37 6 11 6 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  ) : icon === "briefcase" ? (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
                      <path d="M8 7V5.75A1.75 1.75 0 0 1 9.75 4h4.5A1.75 1.75 0 0 1 16 5.75V7" />
                      <path d="M4 8.5h16v9.75A1.75 1.75 0 0 1 18.25 20h-12.5A1.75 1.75 0 0 1 4 18.25Z" />
                      <path d="M4 12h16" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4l2.5 1.5" />
                    </svg>
                  )}
                </span>
                <div>
                  <dt className="text-[1rem] font-medium text-p4">{label}</dt>
                  <dd className="mt-1 text-[0.9rem] text-p5">{detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
