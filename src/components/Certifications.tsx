'use client';

import { SiAmazon } from 'react-icons/si';
import { FiAward, FiCheckCircle, FiCloud } from 'react-icons/fi';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description: 'Foundational understanding of AWS Cloud, services, and terminology',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
      date: '2024',
      icon: SiAmazon,
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services',
      description: 'Expertise in AI/ML concepts and AWS AI services',
      skills: ['Machine Learning', 'AI Services', 'Model Development', 'AWS AI/ML'],
      date: '2024',
      icon: SiAmazon,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Microsoft Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      description: 'Foundational knowledge of cloud services and how they are provided with Azure',
      skills: ['Azure Services', 'Cloud Concepts', 'Security', 'Pricing & SLAs'],
      date: '2024',
      icon: FiCloud,
      color: 'from-blue-500 to-sky-400',
    },
    {
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      description: 'Core knowledge of machine learning and AI concepts on Microsoft Azure',
      skills: ['AI Workloads', 'Computer Vision', 'NLP', 'Azure AI Services'],
      date: '2024',
      icon: FiCloud,
      color: 'from-cyan-500 to-teal-500',
    },
  ];

  return (
    <section id="certifications" className="scroll-mt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="bg-card border border-line rounded-xl overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-line">
          <FiAward size={15} className="text-accent" />
          <h2 className="text-sm font-semibold text-fg">Certifications</h2>
          <span className="ml-auto text-xs text-muted">Validated &amp; Verified</span>
        </div>

        {/* Certifications Grid */}
        <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-card-2 border border-line rounded-xl p-5 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
            >
              {/* Badge Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-2 text-muted text-xs">
                  <FiAward size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-base font-bold text-fg mb-1 group-hover:text-gradient transition-colors">
                {cert.title}
              </h3>
              <p className="text-accent text-xs font-semibold mb-2">{cert.issuer}</p>

              {/* Description */}
              <p className="text-muted text-xs mb-3 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div>
                <h4 className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-2">Skills</h4>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 bg-card border border-line rounded-full text-muted hover:border-accent/50 hover:bg-accent/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-6 border-t border-line">
                <div className="flex items-center gap-2 text-green-500">
                  <FiCheckCircle size={18} />
                  <span className="text-sm font-semibold">Verified Certification</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
