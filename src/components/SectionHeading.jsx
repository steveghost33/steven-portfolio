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
      <p className="caption">{eyebrow}</p>
      <h2 className={clsx("max-w-[13ch] text-balance text-p4", isCentered && "mx-auto", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className={clsx("body-3 mt-6 max-w-2xl text-p5", isCentered && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
