import { experienceHighlights } from "../data/portfolio.js";

const icons = {
  0: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
      <path d="M3 9.5L12 4l9 5.5V20H3V9.5Z" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 9.5S9.5 7 12 7s4 2 3.5 4.5c-.4 2-2.5 2.5-3.5 3v2" />
      <circle cx="12" cy="19" r="0.5" fill="currentColor" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
      <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

const Experience = () => {
  return (
    <section id="experience" className="section-rule py-20 max-lg:py-14">
      <div className="container">
        <div className="mb-12">
          <p className="caption">Experience</p>
          <h2 className="h2 max-w-[28ch] text-balance">
            A broad mix of technical work, always grounded in usability.
          </h2>
          <p className="mt-5 body-3 max-w-[60ch]">
            From marketing sites and internal platforms to CRM systems and AI-powered training tools — the throughline is building things teams can actually use and maintain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {experienceHighlights.map(({ title, description }, i) => (
            <div
              key={title}
              className="rounded-2xl border border-s3 bg-s1 p-6 lg:p-7"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-p1/10 text-p1">
                {icons[i]}
              </div>
              <h3 className="h6 mb-3 text-p4">{title}</h3>
              <p className="body-3">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
