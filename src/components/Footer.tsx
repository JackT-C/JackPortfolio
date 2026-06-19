import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-8 px-6 md:px-8">
      <div className="container-custom">
        {/* Back to Top */}
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card-2 border border-line hover:border-accent rounded-full text-muted hover:text-accent transition-all duration-200 text-sm font-medium"
          >
            <FiArrowUp size={16} />
            Back to Top
          </a>
        </div>

        {/* Logo & Tagline */}
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-gradient">JTC</span>
          <p className="text-muted text-sm mt-2">Building scalable, cloud-ready applications</p>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-muted text-sm">
            © {currentYear} Jack Tilford-Carey. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jacktilfordcarey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:jacktilfordcarey@gmail.com"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
