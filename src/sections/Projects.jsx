import Button from "../components/Button.jsx";

const projects = [
  {
    title: "Ella Tech Solutions",
    img: "/images/projects/ellatech.png",
    alt: "Ella Tech Solutions website — Detroit-based technology consulting firm built with React and Tailwind CSS",
    desc: "A modern SaaS-style website for a Detroit-based technology consulting firm. Built with React, Tailwind CSS, and Vite — showcasing services, pricing, and client intake optimized for nonprofits and small businesses.",
    tags: ["React", "Tailwind CSS", "Vite", "React Router"],
    link: "https://www.ellatechsolutions.com",
    internal: false,
  },
  {
    title: "Peak Form Fitness",
    img: "/images/projects/peak-form.png",
    alt: "Peak Form Fitness website — fitness business site with service packages, appointment booking, and e-commerce",
    desc: "A fitness business website featuring service packages, appointment booking, and a branded e-commerce experience. Built for speed, mobile usability, and conversion.",
    tags: ["Web Design", "E-Commerce", "Booking Integration"],
    link: "https://peak-form-fitness.vercel.app",
    internal: false,
  },
  {
    title: "Team Cabin",
    img: "/images/projects/teamcabin.png",
    alt: "Team Cabin band website — indie music website with interactive fan engagement game",
    desc: "A website for an indie music band with visitor engagement at its core. Features an interactive game so fans can connect with the brand beyond just listening.",
    tags: ["Web Design", "Music", "Interactive"],
    link: "https://weareteamcabin.com",
    internal: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <div className="text-center mb-16 max-lg:mb-10">
          <div className="caption small-2 uppercase text-p3 mb-4">Portfolio</div>
          <h2 className="h2 text-p4 mb-4 max-lg:h3">Recent Projects</h2>
          <p className="body-1 text-p5 max-w-2xl mx-auto">
            A selection of websites and digital systems I've designed and built for real clients and organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-s2 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-white/10 hover:border-s4/50 transition-all duration-300"
            >
              <div className="w-full h-48 md:h-56 bg-s1 rounded-xl m-3 flex items-center justify-center overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.alt}
                  className="max-w-[calc(100%-1.5rem)] max-h-[calc(100%-1.5rem)] object-contain"
                />
              </div>

              <div className="p-6 pt-3 flex-1 flex flex-col">
                <h3 className="h5 text-p4 mb-2">{proj.title}</h3>
                <p className="body-3 text-p5 flex-1 mb-4">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full border border-white/20 text-p3 uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  href={proj.link}
                  containerClassName="mt-auto self-start"
                  markerFill="#FFF"
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
