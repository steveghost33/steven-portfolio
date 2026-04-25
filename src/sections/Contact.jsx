import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const Contact = () => {
  return (
    <section id="contact" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Work Together"
            description="Have a project in mind? Whether it's a website, CRM implementation, AI workflow, or something else — I'd love to hear about it."
            titleClassName="h2 max-lg:h3"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-s2 rounded-2xl p-8 border border-white/10 hover:border-s4/50 transition-all duration-300 flex flex-col items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-s3 flex items-center justify-center group-hover:bg-s4 transition-colors duration-300">
                  <img src={social.icon} alt="" className="w-7 h-7" aria-hidden="true" />
                </div>
                <div>
                  <p className="body-2 text-p4 mb-1">{social.title}</p>
                  <p className="small-1 text-p5">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.phone.href}
              className="flex items-center gap-3 px-6 py-4 bg-s2 rounded-2xl border border-white/10 hover:border-s4/50 transition-all duration-300 group"
            >
              <span className="text-2xl" aria-hidden="true">☎</span>
              <div className="text-left">
                <p className="small-1 text-p5 uppercase tracking-wide mb-0.5">Call Me</p>
                <p className="body-2 text-p4 group-hover:text-p1 transition-colors duration-300">
                  {profile.phone.label}
                </p>
              </div>
            </a>

            <a
              href={profile.email.href}
              className="flex items-center gap-3 px-6 py-4 bg-s2 rounded-2xl border border-white/10 hover:border-s4/50 transition-all duration-300 group"
            >
              <span className="text-2xl" aria-hidden="true">✉</span>
              <div className="text-left">
                <p className="small-1 text-p5 uppercase tracking-wide mb-0.5">Email Me</p>
                <p className="body-2 text-p4 group-hover:text-p1 transition-colors duration-300">
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
