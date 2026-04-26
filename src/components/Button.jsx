import clsx from "clsx";
import { Link } from "react-router-dom";

const Button = ({
  icon,
  iconAlt = "",
  children,
  href,
  to,
  containerClassName,
  onClick,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex min-h-[56px] items-center gap-3 overflow-hidden rounded-full border border-transparent bg-white px-6 py-3 shadow-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-p1/20 group-hover:shadow-200">
        {icon ? (
          <img
            src={icon}
            alt={iconAlt}
            className="z-10 size-5 object-contain"
            aria-hidden={iconAlt ? undefined : "true"}
          />
        ) : null}

        <span className="relative z-2 text-[15px] font-semibold tracking-[0.01em] text-p4">
          {children}
        </span>
      </span>

      <span className="glow-before glow-after" />
    </>
  );

  const className = clsx(
    "group relative inline-flex w-fit rounded-full p-px",
    containerClassName
  );

  if (to) {
    return (
      <Link className={className} to={to}>
        <Inner />
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
      >
        <Inner />
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      <Inner />
    </button>
  );
};

export default Button;
