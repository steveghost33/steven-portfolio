import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const Contact = () => {
  return (
    <section id="contact" className="section-rule py-24 max-lg:py-16">
      <div className="container grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)]">
        <SectionHeading
          eyebrow="Contact"
          title="If you need a site or system to feel clearer, I’d be glad to talk."
          align="left"
          titleClassName="h3"
        />

        <div className="grid gap-12">
          <div className="grid gap-6 md:grid-cols-2">
            {profile.socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-t border-s3/70 py-6 transition-colors duration-300 hover:border-p1/40"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-s3/80 bg-s2/55">
                  <img src={social.icon} alt="" className="icon-image h-6 w-6" aria-hidden="true" />
                </div>
                <p className="h5">{social.title}</p>
                <p className="mt-2 body-3">{social.handle}</p>
              </a>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={profile.phone.href}
              className="border-t border-s3/70 py-6 transition-colors duration-300 hover:border-p1/40"
            >
              <p className="caption">Call</p>
              <p className="h5">{profile.phone.label}</p>
            </a>

            <a
              href={profile.email.href}
              className="border-t border-s3/70 py-6 transition-colors duration-300 hover:border-p1/40"
            >
              <p className="caption">Email</p>
              <p className="h5 break-all sm:break-normal">{profile.email.label}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
