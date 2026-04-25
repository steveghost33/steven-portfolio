const ExternalProfileLink = ({ social }) => {
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 text-sm font-semibold uppercase text-p1 border border-p1/30 rounded-2xl hover:bg-p1/10 transition-all duration-300"
    >
      <img src={social.icon} alt="" className="w-5 h-5" aria-hidden="true" />
      {social.title}
    </a>
  );
};

export default ExternalProfileLink;
