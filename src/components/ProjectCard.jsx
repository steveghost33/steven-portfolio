const ProjectCard = ({ project }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-s3 bg-s1 shadow-[0_2px_16px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(15,23,42,0.12)]">
      {/* Image */}
      <div className="overflow-hidden bg-s2">
        <img
          src={project.image}
          alt={project.alt}
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-s3 bg-s2 px-2.5 py-1 text-[0.75rem] font-semibold text-p5"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="h5 mb-2">{project.title}</h3>
        <p className="body-3 mb-6 flex-1">{project.description}</p>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-p1 transition-gap duration-200 hover:gap-3"
        >
          View Project
          <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
