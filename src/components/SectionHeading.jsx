import clsx from "clsx";

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  titleClassName,
  className,
}) => {
  const isCentered = align === "center";

  return (
    <div className={clsx(isCentered && "text-center", className)}>
      <p className="caption small-2 uppercase text-p3 mb-4">{eyebrow}</p>
      <h2 className={clsx("text-p4", titleClassName)}>{title}</h2>
      {description ? (
        <p className={clsx("body-1 text-p5 mt-4", isCentered && "max-w-2xl mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
