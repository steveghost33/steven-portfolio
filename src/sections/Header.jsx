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
          className={clsx(
            "lg:hidden z-[110] flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300",
            isOpen
              ? "border-p1 bg-p1 text-s1 shadow-200"
              : "border-p1/70 bg-s2/90 text-p4 shadow-100 hover:bg-p1 hover:text-s1"
          )}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="flex w-5 flex-col gap-1" aria-hidden="true">
            <span
              className={clsx(
                "h-0.5 w-full rounded-full transition-transform duration-300",
                isOpen ? "translate-y-1.5 rotate-45 bg-s1" : "bg-current"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-full rounded-full transition-opacity duration-300",
                isOpen ? "opacity-0 bg-s1" : "bg-current"
              )}
            />
            <span
              className={clsx(
                "h-0.5 w-full rounded-full transition-transform duration-300",
                isOpen ? "-translate-y-1.5 -rotate-45 bg-s1" : "bg-current"
              )}
            />
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-navigation"
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
