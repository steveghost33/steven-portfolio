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
        "fixed left-0 top-0 z-50 w-full py-5 transition-all duration-500",
        hasScrolled && "py-3"
      )}
    >
      <div
        className={clsx(
          "container flex h-14 items-center justify-between border border-transparent transition-all duration-500",
          hasScrolled && "rounded-[16px] border-s3 bg-s2/88 px-4 shadow-100 backdrop-blur-xl"
        )}
      >
        <a
          href="#hero"
          className="z-[110] rounded-[12px] border border-s3 bg-s2/88 px-4 py-2 text-sm font-semibold tracking-[0.14em] text-p4 transition-all duration-300 hover:border-p1/30 hover:text-p1"
          onClick={() => setIsOpen(false)}
          aria-label={`${profile.name} home`}
        >
          {profile.initials}
        </a>

        <nav className="max-lg:hidden flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              className="text-[15px] font-medium text-p5 transition-colors duration-300 hover:text-p4"
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="max-lg:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          {profile.socials.map((social) => (
            <SocialLink key={social.id} social={social} />
          ))}
        </div>

        <button
          className={clsx(
            "z-[110] flex items-center gap-2 rounded-[12px] border px-4 py-2 text-sm font-semibold tracking-[0.08em] transition-all duration-300 lg:hidden",
            isOpen
              ? "border-p1 bg-p1 text-white shadow-200"
              : "border-s3 bg-s2/90 text-p4 shadow-100 hover:border-p1/40 hover:bg-s2"
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

        <div
          id="mobile-navigation"
          className={clsx(
            "fixed inset-0 z-[100] flex h-screen w-full flex-col items-center justify-center gap-10 bg-s1/95 transition-opacity duration-300 lg:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
            {navLinks.map(({ title, href }) => (
              <a
                key={title}
                href={href}
                onClick={() => setIsOpen(false)}
                className="h5 transition-colors duration-300 hover:text-p1"
              >
                {title}
              </a>
            ))}
          </nav>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <div className="flex items-center gap-4">
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
