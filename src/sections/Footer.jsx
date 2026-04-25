import SocialLink from "../components/SocialLink.jsx";
import { profile } from "../data/portfolio.js";

const Footer = () => {
  return (
    <footer className="border-t border-s3/30">
      <div className="container py-10">
        <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-4">
          <div className="small-compact flex items-center justify-center lg:flex-1 lg:justify-start">
            <p className="opacity-70">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          </div>

          <p className="opacity-70 text-p5 text-sm flex items-center gap-1">
            <span aria-hidden="true">⌖</span>
            {profile.location}
          </p>

          <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
            {profile.socials.map((social) => (
              <SocialLink key={social.id} social={social} iconClassName="size-1/3" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
