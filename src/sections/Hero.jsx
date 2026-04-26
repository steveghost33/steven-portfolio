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
      <div className="absolute inset-x-0 top-0 h-[250px] overflow-hidden">
        <svg
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            style={{ fill: "rgba(var(--color-s5), 0.95)" }}
            d="M0 90C95 72 150 150 248 132C346 114 362 85 442 98C539 113 559 162 654 146C754 129 801 74 907 88C1015 103 1037 173 1138 156C1240 139 1304 91 1440 112V0H0Z"
          />
          <path
            style={{ fill: "rgba(var(--color-s5), 0.72)" }}
            d="M0 134C126 116 176 175 286 160C383 146 430 120 517 132C614 145 639 191 742 176C846 160 891 107 986 121C1082 135 1136 185 1243 173C1323 164 1382 132 1440 122V0H0Z"
          />
          <path
            style={{ fill: "rgba(var(--color-s4), 0.28)" }}
            d="M0 155C122 134 190 209 304 195C398 183 447 152 545 164C655 178 700 221 801 209C923 195 959 143 1079 155C1184 166 1262 214 1368 198C1401 193 1422 187 1440 180V102C1368 111 1306 149 1227 160C1110 176 1052 116 948 106C835 96 775 157 661 171C564 183 515 127 406 116C308 105 250 161 151 169C95 173 48 164 0 156Z"
          />
        </svg>
      </div>

      <div className="container relative pb-8 pt-14">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.3fr)_360px_170px]">
          <div className="pt-20 lg:pt-24">
            <p className="caption">Full-stack developer</p>
            <h1 className="h1 max-w-[11.5ch] text-balance">
              I build clean, useful web experiences and systems that scale.
            </h1>
            <p className="body-1 mt-7 max-w-[31ch]">
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
              className="relative z-10 h-[430px] w-[320px] object-cover object-center [mask-image:linear-gradient(to_bottom,black_74%,transparent_100%)]"
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
