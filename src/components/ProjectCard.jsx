import Button from "./Button.jsx";

const ProjectCard = ({ project }) => {
  return (
    <article className="bg-s2 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-white/10 hover:border-s4/50 transition-all duration-300">
      <div className="w-full h-48 md:h-56 bg-s1 rounded-xl m-3 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          className="max-w-[calc(100%-1.5rem)] max-h-[calc(100%-1.5rem)] object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-6 pt-3 flex-1 flex flex-col">
        <h3 className="h5 text-p4 mb-2">{project.title}</h3>
        <p className="body-3 text-p5 flex-1 mb-4">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-4" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-3 py-1 rounded-full border border-white/20 text-p3 uppercase tracking-wide"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button href={project.url} containerClassName="mt-auto self-start" markerFill="#FFF">
          View Project
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
