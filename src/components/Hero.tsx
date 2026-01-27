'use client';

import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-primary font-medium">Available for Graduate Roles</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Hi, I&apos;m <span className="text-white whitespace-nowrap">Jack Tilford-Carey</span>
            <br />
            Software Engineer
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Final-year Computer Science student at the University of Reading with 
            a year-long internship at Eli Lilly. Specializing in React, Next.js, 
            and AWS to build production-grade, scalable applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-200 font-semibold text-lg hover:glow-effect hover:scale-105 w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="/Jack_Tilford_Carey_CV.pdf"
              download
              className="px-8 py-4 bg-background-tertiary hover:bg-background-secondary border border-gray-700 hover:border-primary text-white rounded-lg transition-all duration-200 font-semibold text-lg hover:scale-105 w-full sm:w-auto"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://github.com/JackT-C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors duration-200 animate-bounce"
        aria-label="Scroll to about section"
      >
        <FiArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
