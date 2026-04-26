import clsx from "clsx";

const ThemeToggle = ({ theme, onToggle, className }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={clsx(
        "inline-flex min-h-[44px] items-center gap-2 rounded-[12px] border border-s3 bg-s2 px-4 py-2 text-sm font-medium text-p4 shadow-100 transition-all duration-300 hover:border-p1/40 hover:text-p1",
        className
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <span
        className={clsx(
          "flex h-7 w-7 items-center justify-center rounded-[10px] border border-s3 bg-s1 text-xs",
          isDark && "bg-p2 text-p3"
        )}
        aria-hidden="true"
      >
        {isDark ? "◐" : "☾"}
      </span>
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
};

export default ThemeToggle;
