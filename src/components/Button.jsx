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
  variant = "primary",
}) => {
  const Inner = () => {
    const innerClassName = clsx(
      "relative flex min-h-[54px] items-center gap-3 overflow-hidden rounded-[10px] px-6 py-3 transition-all duration-300 group-hover:-translate-y-0.5",
      variant === "primary"
        ? "bg-p4 text-s2 shadow-100"
        : "border border-s3/80 bg-s2/65 text-p4"
    );

    return (
      <span className={innerClassName}>
        {icon ? (
          <img
            src={icon}
            alt={iconAlt}
            className="icon-image z-10 size-5 object-contain"
            aria-hidden={iconAlt ? undefined : "true"}
          />
        ) : null}

        <span className={clsx("relative z-2 text-[15px] font-semibold tracking-[0.01em]", variant === "primary" ? "text-s2" : "text-p4")}>
          {children}
        </span>
      </span>
    );
  };

  const className = clsx(
    "group relative inline-flex w-fit",
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
