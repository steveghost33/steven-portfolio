import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Recent Projects"
          description="A selection of websites and digital systems I've designed and built for real clients and organizations."
          titleClassName="h2 max-lg:h3"
          className="mb-16 max-lg:mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
