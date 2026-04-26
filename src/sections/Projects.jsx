import ProjectCard from "../components/ProjectCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/portfolio.js";

const Projects = () => {
  return (
    <section id="projects" className="section-rule py-24 max-lg:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work with a smoother, more durable finish."
          description="A few projects where design clarity, implementation discipline, and actual usability mattered just as much as visuals."
          titleClassName="h2 max-lg:h3"
          className="mb-16 max-lg:mb-10"
        />

        <div>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
