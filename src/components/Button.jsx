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
  const className = clsx(
    "inline-flex h-10 items-center gap-2 rounded-lg px-5 text-[0.875rem] font-semibold transition-all duration-200",
    variant === "primary"
      ? "bg-p4 text-s1 hover:bg-p1"
      : "border border-s3 bg-s1 text-p4 hover:border-p1/40 hover:text-p1",
    containerClassName
  );

  const inner = (
    <>
      {icon ? (
        <img
          src={icon}
          alt={iconAlt}
          className="icon-image h-4 w-4 object-contain"
          aria-hidden={iconAlt ? undefined : "true"}
        />
      ) : null}
      {children}
    </>
  );

  if (to) {
    return <Link className={className} to={to}>{inner}</Link>;
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
        {inner}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      {inner}
    </button>
  );
};

export default Button;
