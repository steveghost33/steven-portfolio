import clsx from "clsx";

const SocialLink = ({
  social,
  className,
  iconClassName = "w-4 h-4",
  variant = "plain",
}) => {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(variant === "boxed" ? "social-icon-box" : "social-icon", className)}
      aria-label={`Visit ${social.title}`}
    >
      <img src={social.icon} alt="" className={clsx(iconClassName, "icon-image object-contain")} aria-hidden="true" />
    </a>
  );
};

export default SocialLink;
