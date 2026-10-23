import { profile, navLinks } from "../data/portfolio.js";

const Footer = () => {
  return (
    <footer className="section-rule py-10">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-p4 text-[0.68rem] font-extrabold text-s1">
              {profile.initials}
            </span>
            <span className="text-[0.85rem] font-medium text-p5">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.slice(0, 5).map(({ title, href }) => (
              <a
                key={title}
                href={href}
                className="text-[0.82rem] font-medium text-p5 transition-colors duration-200 hover:text-p4"
              >
                {title}
              </a>
            ))}
          </nav>

          <p className="text-[0.82rem] text-p3">{profile.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
