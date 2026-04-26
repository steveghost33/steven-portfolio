import { useEffect, useState } from "react";
import clsx from "clsx";
import SocialLink from "../components/SocialLink.jsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { navLinks, profile } from "../data/portfolio.js";

const Header = ({ theme, onToggleTheme }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "sticky left-0 top-0 z-50 w-full transition-all duration-500",
        hasScrolled ? "bg-s2/88 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container flex min-h-[84px] items-center justify-between gap-6 border-b border-s3/70">
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          aria-label={`${profile.name} home`}
          className="text-[1.15rem] font-bold tracking-[-0.04em] text-p4 transition-colors duration-300 hover:text-p1"
        >
          {profile.initials}.
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary navigation">
          {navLinks.map(({ title, href }, index) => (
            <a
              key={title}
              href={href}
              className={clsx(
                "relative text-[1rem] font-medium text-p4/85 transition-colors duration-300 hover:text-p4",
                index === 0 && "after:absolute after:-bottom-4 after:left-0 after:h-0.5 after:w-9 after:bg-p4 after:content-['']"
              )}
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {profile.socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
          <a
            href={profile.email.href}
            aria-label={`Email ${profile.name}`}
            className="social-icon"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
              <path d="M3.75 6.75h16.5v10.5H3.75z" />
              <path d="m4.5 7.5 7.5 6 7.5-6" />
            </svg>
          </a>
          <span className="mx-2 h-6 w-px bg-s3/80" aria-hidden="true" />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-s3/80 bg-s2/60 text-p4 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="flex w-5 flex-col gap-1" aria-hidden="true">
            <span className={clsx("h-0.5 w-full bg-current transition-transform duration-300", isOpen && "translate-y-1.5 rotate-45")} />
            <span className={clsx("h-0.5 w-full bg-current transition-opacity duration-300", isOpen && "opacity-0")} />
            <span className={clsx("h-0.5 w-full bg-current transition-transform duration-300", isOpen && "-translate-y-1.5 -rotate-45")} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={clsx(
          "border-t border-s3/70 bg-s2/95 backdrop-blur-xl lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="container flex flex-col gap-8 py-8">
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navLinks.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                onClick={() => setIsOpen(false)}
                className="h6"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            {profile.socials.map((social) => (
              <SocialLink key={social.id} social={social} iconClassName="w-5 h-5" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
