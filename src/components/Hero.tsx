'use client';

import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import DecryptedText from './DecryptedText';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        className="container-custom section-padding relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-sm text-primary font-medium">Available for Graduate Roles</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <DecryptedText
              text="Hi, I'm Jack Tilford-Carey"
              animateOn="view"
              revealDirection="start"
              sequential
              speed={40}
              maxIterations={15}
              className="text-white"
              encryptedClassName="text-primary/60"
              useOriginalCharsOnly={false}
            />
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed px-4 sm:px-0">
            Final-year Computer Science student at the University of Reading with 
            a year-long internship at Eli Lilly. Specialising in React, Next.js, 
            and AWS to build production-grade, scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-200 font-semibold text-lg hover:glow-effect hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="/Jack_Tilford_Carey_CV.pdf"
              download
              className="px-8 py-4 bg-background-tertiary hover:bg-background-secondary border border-gray-700 hover:border-primary text-white rounded-lg transition-all duration-200 font-semibold text-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
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
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary transition-colors duration-200"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1, duration: 0.5 }, y: { delay: 1.5, duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <FiArrowDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
