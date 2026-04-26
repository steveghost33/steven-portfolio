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
          viewBox="0 0 1440 250"
          preserveAspectRatio="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="waveLayer1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(var(--wave-1))" stopOpacity="0.92" />
              <stop offset="56%" stopColor="rgb(var(--wave-2))" stopOpacity="0.58" />
              <stop offset="100%" stopColor="rgb(var(--wave-3))" stopOpacity="0.28" />
            </linearGradient>
            <linearGradient id="waveLayer2" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(var(--wave-2))" stopOpacity="0.42" />
              <stop offset="54%" stopColor="rgb(var(--wave-3))" stopOpacity="0.62" />
              <stop offset="100%" stopColor="rgb(var(--wave-4))" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveLayer3" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(var(--wave-1))" stopOpacity="0.54" />
              <stop offset="52%" stopColor="rgb(var(--wave-3))" stopOpacity="0.48" />
              <stop offset="100%" stopColor="rgb(var(--wave-4))" stopOpacity="0.24" />
            </linearGradient>
            <linearGradient id="waveLayer4" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(var(--wave-2))" stopOpacity="0.34" />
              <stop offset="62%" stopColor="rgb(var(--wave-4))" stopOpacity="0.42" />
              <stop offset="100%" stopColor="rgb(var(--wave-3))" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveLayer1)"
            d="M0 58C72 49 122 62 178 72C243 84 285 55 350 60C414 65 451 91 516 90C596 88 646 58 727 64C802 70 843 96 920 88C1014 78 1079 43 1178 61C1269 78 1334 95 1440 28V88C1338 138 1260 122 1174 106C1080 88 1017 121 923 130C843 138 794 111 723 106C643 100 595 130 515 132C447 133 409 108 344 103C281 98 238 126 174 115C119 105 72 91 0 100Z"
          />
          <path
            fill="url(#waveLayer2)"
            d="M0 96C79 112 134 138 214 128C295 118 320 91 389 106C464 122 521 154 612 142C701 130 742 91 835 102C929 113 970 153 1061 148C1157 142 1217 103 1316 111C1364 115 1403 129 1440 140V183C1397 169 1356 155 1309 151C1214 142 1157 180 1064 187C970 194 922 154 831 143C742 132 704 171 616 183C522 195 460 164 386 149C320 135 293 160 215 169C135 178 78 154 0 139Z"
          />
          <path
            fill="url(#waveLayer3)"
            d="M0 128C88 143 151 161 237 154C322 147 366 121 444 135C521 148 567 184 656 179C751 174 801 126 895 132C992 138 1038 185 1138 186C1247 188 1321 152 1440 137V178C1321 191 1249 227 1138 225C1037 224 987 177 891 171C801 166 753 213 659 218C566 223 517 189 441 176C365 163 324 188 238 195C151 201 87 184 0 169Z"
          />
          <path
            fill="url(#waveLayer4)"
            d="M0 154C96 172 164 198 257 190C357 181 421 143 512 160C604 177 669 231 777 219C889 207 959 154 1068 168C1170 181 1229 226 1335 214C1377 209 1412 196 1440 184V226C1407 236 1371 245 1330 249C1226 258 1168 218 1068 205C961 191 894 241 780 250C669 260 602 209 512 193C422 177 359 214 260 222C163 231 95 204 0 187Z"
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
