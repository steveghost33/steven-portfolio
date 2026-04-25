import Button from "../components/Button.jsx";
import ExternalProfileLink from "../components/ExternalProfileLink.jsx";
import { profile } from "../data/portfolio.js";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-20 max-lg:pt-28 max-md:pt-24"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-p2/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-s4/20 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-2">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 max-w-[560px] max-lg:text-center max-lg:mx-auto">
            <div className="caption small-2 uppercase text-p3 mb-5">
              Detroit-Based Developer & Consultant
            </div>

            <h1 className="mb-6 text-p4 uppercase text-[clamp(48px,7vw,84px)] font-black leading-none max-lg:mb-7 max-md:mb-4">
              Steven
              <br />
              Bowman
            </h1>

            <p className="mb-3 body-2 text-p3">
              Full-Stack Developer & Technology Consultant
            </p>

            <p className="mb-10 body-3 text-p5 max-w-[480px] max-lg:mx-auto">
              15 years of experience building websites, AI workflows, CRM systems, and digital training programs for nonprofits and small businesses across Detroit and beyond. I build technology that actually gets used.
            </p>

            <div className="flex flex-wrap gap-4 max-lg:justify-center">
              <Button href="#projects" icon="/images/magictouch.svg">
                View My Work
              </Button>
              {profile.socials.map((social) => (
                <ExternalProfileLink key={social.id} social={social} />
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-p1/40 via-p2/30 to-transparent blur-2xl scale-110" />
              <div className="relative w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-2 border-p1/30 shadow-500">
                <img
                  src="/images/steven-bowman.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border border-dashed border-s3/40 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
