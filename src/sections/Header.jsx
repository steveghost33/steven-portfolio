import { useEffect, useState } from "react";
import clsx from "clsx";
import ThemeToggle from "../components/ThemeToggle.jsx";
import { navLinks, profile } from "../data/portfolio.js";

const Header = ({ theme, onToggleTheme }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={clsx(
        "sticky left-0 top-0 z-50 w-full transition-all duration-300",
        hasScrolled
          ? "border-b border-s3 bg-s1/95 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-white/10 bg-[#0B0D14]"
      )}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          aria-label={`${profile.name} home`}
          className="group flex items-center gap-2.5"
        >
          <span className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-lg text-[0.75rem] font-extrabold tracking-[-0.02em] transition-colors duration-300",
            hasScrolled ? "bg-p4 text-s1 group-hover:bg-p1" : "bg-white/15 text-white group-hover:bg-white/25"
          )}>
            {profile.initials}
          </span>
          <span className={clsx(
            "hidden text-[0.95rem] font-semibold tracking-[-0.02em] sm:block transition-colors duration-300",
            hasScrolled ? "text-p4" : "text-white"
          )}>
            {profile.name}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              className={clsx(
                "rounded-lg px-3.5 py-2 text-[0.875rem] font-medium transition-colors duration-200",
                hasScrolled
                  ? "text-p5 hover:bg-s2 hover:text-p4"
                  : "text-white/60 hover:text-white"
              )}
            >
              {title}
            </a>
          ))}
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={profile.email.href}
            className={clsx(
              "inline-flex h-9 items-center gap-2 rounded-lg px-4 text-[0.85rem] font-semibold transition-all duration-200",
              hasScrolled
                ? "bg-p4 text-s1 hover:bg-p1"
                : "border border-white/25 text-white hover:border-white/60"
            )}
          >
            Get in touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className={clsx(
            "flex h-9 w-9 items-center justify-center rounded-lg lg:hidden transition-colors duration-200",
            hasScrolled ? "border border-s3 bg-s2 text-p4" : "border border-white/20 text-white"
          )}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
            <span className={clsx("h-px w-full bg-current transition-transform duration-300 origin-center", isOpen && "translate-y-[7px] rotate-45")} />
            <span className={clsx("h-px w-full bg-current transition-opacity duration-300", isOpen && "opacity-0")} />
            <span className={clsx("h-px w-full bg-current transition-transform duration-300 origin-center", isOpen && "-translate-y-[7px] -rotate-45")} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-navigation"
        className={clsx(
          "border-t border-s3 bg-s1/97 backdrop-blur-xl lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {navLinks.map(({ title, href }) => (
            <a
              key={title}
              href={href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-[1rem] font-medium text-p4 transition-colors duration-200 hover:bg-s2"
            >
              {title}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-3 border-t border-s3 pt-4">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href={profile.email.href}
              onClick={() => setIsOpen(false)}
              className="flex-1 rounded-lg bg-p4 py-2.5 text-center text-[0.9rem] font-semibold text-s1"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
