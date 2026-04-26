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
            style={{ fill: "rgba(var(--wave-1), 0.92)" }}
            d="M0 110C94 92 148 146 242 131C338 116 376 97 455 108C541 120 603 157 692 147C787 136 849 90 947 97C1047 105 1118 154 1224 145C1301 139 1374 113 1440 84V0H0Z"
          />
          <path
            style={{ fill: "rgba(var(--wave-2), 0.74)" }}
            d="M0 144C103 124 164 184 273 169C368 157 437 124 530 135C636 148 707 194 807 180C913 165 972 116 1073 125C1176 134 1244 181 1343 169C1376 165 1408 157 1440 149V88C1374 116 1300 141 1216 146C1110 153 1040 106 939 98C843 90 782 137 689 149C598 161 537 124 447 112C368 101 334 119 238 135C146 150 91 97 0 115Z"
          />
          <path
            style={{ fill: "rgba(var(--wave-3), 0.54)" }}
            d="M0 176C126 154 214 209 320 198C424 187 498 157 603 167C716 178 776 230 891 219C1000 209 1070 161 1176 172C1282 183 1361 216 1440 202V146C1407 154 1375 163 1340 167C1242 180 1174 132 1071 124C971 115 912 164 807 179C707 193 637 147 531 134C438 123 369 155 274 168C164 183 102 122 0 140Z"
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
