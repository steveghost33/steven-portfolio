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
      <div className="absolute inset-x-0 top-0 h-[280px] overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            style={{ fill: "rgba(var(--wave-1), 0.98)" }}
            d="M0 92C88 70 147 118 239 103C338 86 411 54 511 67C620 82 688 136 793 122C902 107 977 54 1085 67C1185 79 1276 130 1362 118C1393 113 1419 103 1440 89V0H0Z"
          />
          <path
            style={{ fill: "rgba(var(--wave-2), 0.82)" }}
            d="M0 138C86 117 160 172 255 159C354 145 425 109 521 123C626 138 698 196 807 181C911 167 980 111 1085 124C1185 136 1269 189 1362 177C1392 173 1418 167 1440 160V74C1415 91 1384 103 1347 107C1255 118 1171 67 1074 55C970 42 894 92 789 106C685 119 621 67 520 55C422 43 351 78 253 92C157 105 85 57 0 77Z"
          />
          <path
            style={{ fill: "rgba(var(--wave-3), 0.7)" }}
            d="M0 176C94 156 184 214 290 201C397 187 475 147 581 160C694 174 773 228 886 216C998 205 1064 149 1176 163C1284 176 1368 225 1440 214V118C1361 145 1280 157 1181 146C1076 134 1007 82 900 94C794 106 726 161 621 148C515 136 444 93 343 108C242 123 170 166 75 152C48 148 23 145 0 146Z"
          />
          <path
            style={{ fill: "rgba(var(--wave-4), 0.58)" }}
            d="M0 212C113 193 200 251 319 238C430 226 508 186 618 200C735 215 806 270 926 258C1046 245 1120 194 1236 207C1319 216 1383 247 1440 240V172C1368 190 1285 194 1186 180C1070 163 996 116 882 128C772 140 702 196 592 183C488 171 416 130 313 143C198 158 115 204 0 190Z"
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
