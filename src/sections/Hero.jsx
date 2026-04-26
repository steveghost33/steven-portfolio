import Button from "../components/Button.jsx";
import ExternalProfileLink from "../components/ExternalProfileLink.jsx";
import { profile } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center pb-20 pt-28 max-lg:pt-24 max-md:pb-14"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[8%] top-[14%] h-[26rem] w-[26rem] rounded-full bg-p2/55 blur-[120px]" />
        <div className="absolute left-[10%] top-[8%] h-[18rem] w-[18rem] rounded-full bg-s5 blur-[100px]" />
      </div>

      <div className="container relative z-2">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-20">
          <div className="max-w-[640px] max-lg:mx-auto max-lg:text-center">
            <div className="caption">
              Detroit-Based Developer & Consultant
            </div>

            <h1 className="h1 mb-6 max-w-[9ch] text-balance max-lg:mx-auto">
              Clean digital experiences for teams doing meaningful work.
            </h1>

            <p className="mb-4 body-2 text-p3">
              Full-Stack Developer & Technology Consultant
            </p>

            <p className="mb-10 body-3 max-w-[58ch] max-lg:mx-auto">
              15 years of experience building websites, AI workflows, CRM systems, and digital training programs for nonprofits and small businesses across Detroit and beyond. I build technology that actually gets used.
            </p>

            <div className="mb-12 flex flex-wrap gap-4 max-lg:justify-center">
              <Button href="#projects" icon="/images/magictouch.svg">
                View My Work
              </Button>
              {profile.socials.map((social) => (
                <ExternalProfileLink key={social.id} social={social} />
              ))}
            </div>

            <dl className="grid gap-4 text-left sm:grid-cols-3">
              <div className="rounded-[14px] border border-s3 bg-s2/76 p-5 shadow-100">
                <dt className="small-2 text-p3">Based In</dt>
                <dd className="mt-2 text-lg font-semibold text-p4">{profile.location}</dd>
              </div>
              <div className="rounded-[14px] border border-s3 bg-s2/76 p-5 shadow-100">
                <dt className="small-2 text-p3">Focus</dt>
                <dd className="mt-2 text-lg font-semibold text-p4">Web, CRM, AI</dd>
              </div>
              <div className="rounded-[14px] border border-s3 bg-s2/76 p-5 shadow-100">
                <dt className="small-2 text-p3">Approach</dt>
                <dd className="mt-2 text-lg font-semibold text-p4">Useful over flashy</dd>
              </div>
            </dl>
          </div>

          <div className="relative max-w-[430px] justify-self-center lg:justify-self-end">
            <div className="absolute inset-x-6 bottom-0 top-16 rounded-[20px] bg-s2/50 blur-2xl" />
            <div className="relative overflow-hidden rounded-[20px] border border-s3 bg-s2/84 p-5 shadow-500 backdrop-blur">
              <div className="mb-4 flex items-center justify-between rounded-[12px] border border-s3 bg-s1 px-4 py-3">
                <div>
                  <p className="small-2 text-p3">Steven Bowman</p>
                  <p className="small-1 text-p5">Senior full-stack developer</p>
                </div>
                <span className="rounded-[10px] bg-p2 px-3 py-1 text-xs font-semibold text-p3">
                  Available for select projects
                </span>
              </div>
              <div className="relative h-[360px] overflow-hidden rounded-[14px] bg-black-100">
                <img
                  src="/images/steven-bowman.jpg"
                  alt={profile.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 rounded-[14px] border border-s3 bg-s1 p-5">
                <p className="small-2 text-p3">What I bring</p>
                <p className="mt-3 body-3">
                  Strategy-minded product thinking, careful implementation, and systems that feel approachable to the people who use them every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
