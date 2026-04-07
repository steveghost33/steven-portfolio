const socials = [
  {
    id: "github",
    title: "GitHub",
    icon: "/images/socials/github.svg",
    url: "https://github.com/steveghost33",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "/images/socials/linkedin.svg",
    url: "https://www.linkedin.com/in/steven-a-bowman/",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-s3/30">
      <div className="container py-10">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-4">
          <div className="small-compact flex items-center justify-center lg:flex-1 lg:justify-start">
            <p className="opacity-70">© {new Date().getFullYear()} Steven Bowman. All rights reserved.</p>
          </div>

          <p className="opacity-70 text-p5 text-sm flex items-center gap-1">
            📍 Detroit, MI
          </p>

          <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={icon} alt={title} className="size-1/3 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
