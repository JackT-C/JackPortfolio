'use client';

import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const experiences = [
  {
    title: 'Software Engineering Placement Student',
    company: 'Eli Lilly and Company',
    period: 'Jul 2025 – Jul 2026',
    description:
      'Working as part of the software engineering team on enterprise-level pharmaceutical applications within a Scaled Agile Framework environment at a Fortune 500 company.',
    contributions: [
      'Developed features for enterprise-level pharmaceutical applications using React and Next.js',
      'Contributed to the full software development lifecycle from requirements gathering to deployment',
      'Earned AWS Certified Cloud Practitioner and AWS Certified AI Practitioner certifications',
      'Co-founded a student-led onboarding tool to streamline the new-starter experience',
      'Served as Mental Health Ambassador, completing MHFA England training and organising wellness initiatives',
      'Coordinated the Code for All Hackathon, with supervised team achieving first place',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'AWS', 'Node.js', 'Git', 'Agile'],
  },
  {
    title: 'Research Assistant',
    company: 'University of Reading',
    period: 'Mar 2024 – Jul 2024',
    description:
      'Researched and documented achievements of diverse mathematicians and computer scientists, contributing to diversity and inclusion initiatives in STEM education.',
    contributions: [
      'Created engaging profiles published on university website reaching thousands of viewers',
      'Helped bring greater attention to underrepresented individuals in STEM',
      'Collaborated with multiple university departments to gather and verify information',
    ],
    technologies: ['Research', 'Technical Writing', 'Content Creation'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Section Header */}
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeUp} className="relative pl-12 sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-background" />

                <div className="bg-background-secondary border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <FiBriefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2.5 mb-6">
                    {exp.contributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-gray-300">
                        <FiCheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                        <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-5 border-t border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-background-tertiary border border-gray-700 rounded-lg text-xs sm:text-sm text-gray-300 hover:border-primary/50 hover:scale-105 hover:bg-primary/10 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
