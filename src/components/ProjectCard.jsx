import Button from "./Button.jsx";

const ProjectCard = ({ project }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-s3 bg-s2/88 shadow-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-200">
      <div className="m-4 flex h-52 items-center justify-center overflow-hidden rounded-[12px] bg-black-100 md:h-56">
        <img
          src={project.image}
          alt={project.alt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <h3 className="h5 mb-3">{project.title}</h3>
        <p className="body-3 mb-6 flex-1">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-4" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-[10px] border border-s3 bg-s1 px-3 py-1 text-xs font-medium tracking-[0.02em] text-p5"
            >
              {tag}
            </li>
          ))}
        </ul>

        <Button href={project.url} containerClassName="mt-auto self-start">
          View Project
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
