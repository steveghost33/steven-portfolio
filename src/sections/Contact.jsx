const Contact = () => {
  return (
    <section id="contact" className="py-24 max-lg:py-16 border-t border-s3/30">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="caption small-2 uppercase text-p3 mb-4">Get In Touch</div>
          <h2 className="h2 text-p4 mb-6 max-lg:h3">Let's Work Together</h2>
          <p className="body-1 text-p5 mb-12">
            Have a project in mind? Whether it's a website, CRM implementation, AI workflow, or something else — I'd love to hear about it.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <a
              href="https://github.com/steveghost33"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-s2 rounded-2xl p-8 border border-white/10 hover:border-s4/50 transition-all duration-300 flex flex-col items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-s3 flex items-center justify-center group-hover:bg-s4 transition-colors duration-300">
                <img src="/images/socials/github.svg" alt="GitHub" className="w-7 h-7" />
              </div>
              <div>
                <p className="body-2 text-p4 mb-1">GitHub</p>
                <p className="small-1 text-p5">@steveghost33</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/steven-a-bowman/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-s2 rounded-2xl p-8 border border-white/10 hover:border-s4/50 transition-all duration-300 flex flex-col items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-s3 flex items-center justify-center group-hover:bg-s4 transition-colors duration-300">
                <img src="/images/socials/linkedin.svg" alt="LinkedIn" className="w-7 h-7" />
              </div>
              <div>
                <p className="body-2 text-p4 mb-1">LinkedIn</p>
                <p className="small-1 text-p5">steven-a-bowman</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:3134741772"
              className="flex items-center gap-3 px-6 py-4 bg-s2 rounded-2xl border border-white/10 hover:border-s4/50 transition-all duration-300 group"
            >
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="small-1 text-p5 uppercase tracking-wide mb-0.5">Call Me</p>
                <p className="body-2 text-p4 group-hover:text-p1 transition-colors duration-300">313-474-1772</p>
              </div>
            </a>

            <a
              href="mailto:stevenabowman1@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-s2 rounded-2xl border border-white/10 hover:border-s4/50 transition-all duration-300 group"
            >
              <span className="text-2xl">✉️</span>
              <div className="text-left">
                <p className="small-1 text-p5 uppercase tracking-wide mb-0.5">Email Me</p>
                <p className="body-2 text-p4 group-hover:text-p1 transition-colors duration-300">stevenabowman1@gmail.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
