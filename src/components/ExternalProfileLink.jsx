const ExternalProfileLink = ({ social }) => {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-full border border-s3/80 bg-s2/50 px-5 py-3 text-sm font-medium text-p4 transition-all duration-300 hover:border-p1/30 hover:text-p1"
    >
      <img src={social.icon} alt="" className="icon-image h-5 w-5" aria-hidden="true" />
      {social.title}
    </a>
  );
};

export default ExternalProfileLink;
