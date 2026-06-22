'use client';

import { FiBriefcase, FiCalendar, FiCheckCircle, FiBook } from 'react-icons/fi';
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
    title: 'Software Development Placement',
    company: 'Eli Lilly – Bracknell',
    period: 'Jun 2025 – Jun 2026',
    description:
      'Full-stack software engineer on Lilly Nexus, a clinical trials platform, within a Scaled Agile Framework (SAFe) environment at a Fortune 500 company.',
    contributions: [
      'Developed features and fixed critical bugs for Lilly Nexus, a clinical trials platform used by 500+ users',
      'Worked within SAFe, participating in PI planning, sprint ceremonies, stakeholder demos, and cross-functional collaboration; followed enterprise delivery best practices including GitHub pull requests, peer code reviews, QA testing, and production release workflows',
      'Proposed and implemented the Lilly Onboarding Portal — a task-tracking and resource hub built with React, Next.js, and PostgreSQL, adopted by 3+ teams across India, significantly reducing manual onboarding effort',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Git', 'SAFe Agile'],
  },
];

const education = [
  {
    degree: 'BSc Computer Science',
    institution: 'University of Reading',
    period: 'Sep 2023 – Present',
    grade: 'Predicted: First Class Honours',
    modules: [
      'Software Engineering',
      'Artificial Intelligence & Machine Learning',
      'Cloud Concepts',
      'Data Science',
      'Security & Blockchain',
    ],
    activities: ['RUHacking', 'Athletics'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="bg-card border border-line rounded-xl overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex items-center gap-2 px-5 py-4 border-b border-line">
          <FiBriefcase size={15} className="text-accent" />
          <h2 className="text-sm font-semibold text-fg">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="p-5 sm:p-6 relative">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeUp} className="relative pl-12 sm:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-canvas" />

                <div className="bg-card border border-line rounded-2xl p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-fg mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <FiBriefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted text-sm flex-shrink-0">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted mb-5 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2.5 mb-6">
                    {exp.contributions.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-fg/80">
                        <FiCheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                        <span className="leading-relaxed text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-5 border-t border-line">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-card-2 border border-line rounded-lg text-xs sm:text-sm text-muted hover:border-accent/50 hover:scale-105 hover:bg-accent/10 transition-all duration-200"
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
        </div>

        {/* Education sub-section */}
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-line">
          <div className="flex items-center gap-2 py-4 mb-4">
            <FiBook size={14} className="text-accent" />
            <span className="text-xs font-semibold text-muted uppercase tracking-wider">Education</span>
          </div>
          {education.map((edu, index) => (
            <motion.div key={index} variants={fadeUp}>
              <div className="bg-card-2 border border-line rounded-xl p-5 hover:border-accent/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div>
                    <h3 className="text-base font-bold text-fg mb-0.5">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                      <FiBook size={13} />
                      <span>{edu.institution}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted text-xs flex-shrink-0">
                    <FiCalendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="text-sm text-accent font-medium mb-3">{edu.grade}</p>
                <div className="mb-3">
                  <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">Relevant Modules</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.modules.map((mod) => (
                      <span key={mod} className="text-xs px-2.5 py-1 bg-card border border-line rounded-full text-muted hover:border-accent/50 hover:bg-accent/10 transition-all duration-200">
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-muted uppercase tracking-wider mb-2">Activities</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.activities.map((act) => (
                      <span key={act} className="text-xs px-2.5 py-1 bg-card border border-line rounded-full text-muted">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
