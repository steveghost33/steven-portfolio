import { useEffect, useState } from "react";
import clsx from "clsx";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

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

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 py-5 transition-all duration-500",
        hasScrolled && "py-3 bg-black-100 backdrop-blur-[8px]"
      )}
    >
      <div className="container flex items-center justify-between h-14">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-p1 font-black text-2xl tracking-widest hover:text-p4 transition-colors duration-300 z-[110] border border-p1/30 rounded-xl px-3 py-1 hover:bg-p1/10"
          onClick={() => setIsOpen(false)}
        >
          SB
        </a>

        {/* Desktop Nav */}
        <nav className="max-lg:hidden flex items-center gap-8">
          {navLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              className="base-bold text-p4 uppercase transition-colors duration-300 hover:text-p1"
            >
              {title}
            </a>
          ))}
        </nav>

        {/* Desktop Socials */}
        <div className="max-lg:hidden flex items-center gap-3">
          {socials.map(({ id, url, icon, title }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={icon} alt={title} className="w-4 h-4 object-contain" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-[110] size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="toggle"
            className="size-1/2 object-contain"
          />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={clsx(
            "lg:hidden fixed inset-0 w-full h-screen bg-s2 z-[100] flex flex-col items-center justify-center gap-10 transition-opacity duration-300",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                onClick={() => setIsOpen(false)}
                className="h5 text-p4 uppercase hover:text-p1 transition-colors duration-300"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socials.map(({ id, url, icon, title }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <img src={icon} alt={title} className="w-5 h-5 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
