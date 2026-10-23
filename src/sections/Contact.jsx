import { profile } from "../data/portfolio.js";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: profile.email.label,
    href: profile.email.href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
        <path d="M3.75 6.75h16.5v10.5H3.75z" />
        <path d="m4.5 7.5 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone.label,
    href: profile.phone.href,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: profile.socials.find((s) => s.id === "github")?.handle,
    href: profile.socials.find((s) => s.id === "github")?.url,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: profile.socials.find((s) => s.id === "linkedin")?.handle,
    href: profile.socials.find((s) => s.id === "linkedin")?.url,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-rule bg-s2 py-20 max-lg:py-14">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="caption">Contact</p>
            <h2 className="h3 text-balance">
              If you need a site or system to feel clearer, I'd be glad to talk.
            </h2>
            <p className="mt-5 body-3">
              Whether you're looking for a contractor, a collaborator, or just want to get a project off the ground — reach out and let's see if we're a good fit.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href?.startsWith("http") ? "_blank" : undefined}
                rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-s3 bg-s1 p-5 transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(15,23,42,0.08)]"
              >
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-p1/8 text-p1 transition-colors duration-200 group-hover:bg-p1 group-hover:text-s1">
                  {link.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-p3">{link.label}</p>
                  <p className="mt-1 truncate text-[0.9rem] font-semibold text-p4 group-hover:text-p1">{link.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
