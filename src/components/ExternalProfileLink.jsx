const ExternalProfileLink = ({ social }) => {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-[12px] border border-s3 bg-s2/80 px-5 py-3 text-sm font-medium text-p4 shadow-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-p1/30 hover:text-p1"
    >
      <img src={social.icon} alt="" className="icon-image h-5 w-5" aria-hidden="true" />
      {social.title}
    </a>
  );
};

export default ExternalProfileLink;
