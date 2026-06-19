'use client';

import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-line rounded-xl overflow-hidden"
      >
        {/* Card header */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-line">
          <FiMail size={15} className="text-accent" />
          <h2 className="text-sm font-semibold text-fg">Get in Touch</h2>
          <span className="ml-auto text-xs text-muted">Open to opportunities</span>
        </div>

        {/* Contact links */}
        <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jacktilfordcarey@gmail.com"
                className="flex items-center gap-3 px-5 py-3 bg-card-2 border border-line rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 group"
              >
                <FiMail size={18} className="text-accent" />
                <div>
                  <p className="text-[11px] text-muted">Email</p>
                  <p className="text-sm text-fg font-medium">jacktilfordcarey@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/jacktilfordcarey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-card-2 border border-line rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 group"
              >
                <FiGithub size={18} className="text-accent" />
                <div>
                  <p className="text-[11px] text-muted">GitHub</p>
                  <p className="text-sm text-fg font-medium">@jacktilfordcarey</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-card-2 border border-line rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 group"
              >
                <FiLinkedin size={18} className="text-accent" />
                <div>
                  <p className="text-[11px] text-muted">LinkedIn</p>
                  <p className="text-sm text-fg font-medium">Jack Tilford-Carey</p>
                </div>
              </a>
            </div>

        <div className="mt-5 pt-5 border-t border-line flex items-center justify-center gap-2 text-xs text-muted">
          <FiMapPin size={13} className="text-accent" />
          Based in the United Kingdom · Available for full-time positions from June 2027
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
