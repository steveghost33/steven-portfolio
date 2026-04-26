import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const Contact = () => {
  return (
    <section id="contact" className="border-t border-s3/70 py-24 max-lg:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-[20px] border border-s3 bg-s2/82 px-6 py-12 shadow-200 md:px-10">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let’s make the next version of your digital presence feel easier to use."
            description="If you have a site, system, or workflow that needs to feel clearer and more effective, I’d be glad to talk it through."
            titleClassName="h2 max-lg:h3"
            className="mb-12"
          />

          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 rounded-[16px] border border-s3 bg-s1 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-p1/30 hover:bg-s2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[12px] border border-s3 bg-s2 text-p4 transition-colors duration-300 group-hover:border-p1/30 group-hover:text-p1">
                  <img src={social.icon} alt="" className="icon-image h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="body-2 mb-1">{social.title}</p>
                  <p className="small-1 text-p5">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.phone.href}
              className="group flex items-center gap-3 rounded-[14px] border border-s3 bg-s1 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-p1/30 hover:bg-s2"
            >
              <span className="text-2xl" aria-hidden="true">☎</span>
              <div className="text-left">
                <p className="small-1 mb-0.5 uppercase tracking-wide text-p5">Call Me</p>
                <p className="body-2 transition-colors duration-300 group-hover:text-p1">
                  {profile.phone.label}
                </p>
              </div>
            </a>

            <a
              href={profile.email.href}
              className="group flex items-center gap-3 rounded-[14px] border border-s3 bg-s1 px-6 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-p1/30 hover:bg-s2"
            >
              <span className="text-2xl" aria-hidden="true">✉</span>
              <div className="text-left">
                <p className="small-1 mb-0.5 uppercase tracking-wide text-p5">Email Me</p>
                <p className="body-2 transition-colors duration-300 group-hover:text-p1">
                  {profile.email.label}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
