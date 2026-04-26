import clsx from "clsx";

const ThemeToggle = ({ theme, onToggle, className }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={clsx(
        "inline-flex h-11 w-11 items-center justify-center rounded-full border border-s3/80 bg-s2/55 text-p4 transition-all duration-300 hover:border-p1/40 hover:text-p1",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v3" />
          <path d="M12 18.5v3" />
          <path d="M21.5 12h-3" />
          <path d="M5.5 12h-3" />
          <path d="M18.72 5.28l-2.1 2.1" />
          <path d="M7.38 16.62l-2.1 2.1" />
          <path d="M18.72 18.72l-2.1-2.1" />
          <path d="M7.38 7.38l-2.1-2.1" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <path d="M19 12a7 7 0 1 1-7-7" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
