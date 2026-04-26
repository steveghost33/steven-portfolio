import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const Projects = () => {
  return (
    <section id="projects" className="border-t border-s3/70 py-24 max-lg:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work with a calm, durable finish."
          description="A few recent projects that balance clarity, responsiveness, and practical business goals."
          titleClassName="h2 max-lg:h3"
          className="mb-16 max-lg:mb-10"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
