import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/portfolio.js";

const Projects = () => {
  return (
    <section id="projects" className="section-rule py-20 max-lg:py-14">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="caption">Work</p>
            <h2 className="h2 max-w-[18ch] text-balance">Selected projects</h2>
          </div>
          <p className="body-3 max-w-[46ch] lg:text-right">
            A few projects where design clarity, implementation discipline, and real usability mattered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
