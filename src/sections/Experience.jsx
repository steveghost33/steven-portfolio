import SectionHeading from "../components/SectionHeading.jsx";
import { experienceHighlights } from "../data/portfolio.js";

const Experience = () => {
  return (
    <section id="experience" className="section-rule py-20 max-lg:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="A broad mix of technical work, always grounded in usability."
          description="From websites and product interfaces to CRM systems and training platforms, the throughline is building things teams can actually use and maintain."
          titleClassName="h3"
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {experienceHighlights.map(({ title, description }) => (
            <article key={title} className="border-t border-s3/70 pt-5">
              <h3 className="h6 mb-4">{title}</h3>
              <p className="body-3">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
