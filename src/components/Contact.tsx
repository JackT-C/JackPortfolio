'use client';

import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m currently seeking graduate software engineering opportunities. Let&apos;s connect!
          </p>
        </div>

        {/* Contact Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              <div className="bg-background-secondary border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I&apos;m actively looking for graduate software engineering roles in cloud, full-stack, 
                  or frontend-focused positions. Feel free to reach out!
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <a
                    href="mailto:jacktilfordcarey@gmail.com"
                    className="flex items-center gap-4 p-4 bg-background-tertiary hover:bg-background rounded-lg transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FiMail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">jacktilfordcarey@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com/JackT-C"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background-tertiary hover:bg-background rounded-lg transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FiGithub size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-white font-medium">@JackT-C</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background-tertiary hover:bg-background rounded-lg transition-colors duration-200 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <FiLinkedin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white font-medium">Jack Tilford-Carey</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 border border-primary/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                <FiSend size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Open to Opportunities
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Looking for a passionate software engineer with industry experience? 
                I&apos;d love to hear from you!
              </p>
              <a
                href="mailto:jack.tilford-carey@example.com"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-200 font-semibold text-lg hover:glow-effect hover:scale-105 w-full sm:w-auto"
              >
                Send Message
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Based in the United Kingdom • Available for full-time positions from Summer 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
