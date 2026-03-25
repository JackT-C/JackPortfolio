import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary py-12 px-6 md:px-12 lg:px-24">
      <div className="container-custom">
        {/* Back to Top */}
        <div className="flex justify-center mb-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-background-tertiary border border-gray-700 hover:border-primary rounded-full text-gray-400 hover:text-primary transition-all duration-200 text-sm font-medium"
          >
            <FiArrowUp size={16} />
            Back to Top
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {currentYear} Jack Tilford-Carey. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/JackT-C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:jacktilfordcarey@gmail.com"
              className="text-gray-400 hover:text-primary transition-colors duration-200"
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
