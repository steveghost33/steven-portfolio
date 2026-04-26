import Button from "./Button.jsx";

const ProjectCard = ({ project }) => {
  return (
    <article className="grid gap-8 border-t border-s3/70 py-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
      <div className="overflow-hidden rounded-[22px] border border-s3/70 bg-black-100">
        <img src={project.image} alt={project.alt} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="h4 mb-3 max-w-[18ch] text-balance">{project.title}</h3>
        <p className="body-3 mb-6 max-w-[62ch]">{project.description}</p>

        <ul className="mb-8 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-s3/80 px-3 py-1 text-xs font-medium tracking-[0.02em] text-p5"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button href={project.url} containerClassName="self-start" variant="secondary">
          View Project
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
