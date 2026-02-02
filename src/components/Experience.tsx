'use client';

import { FiBriefcase, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto"></div>
        </div>

        {/* Experience Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Eli Lilly Experience */}
          <div className="bg-background-secondary border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                  Software Developer Intern
                </h3>
                <div className="flex items-center gap-2 text-primary text-base sm:text-lg font-semibold">
                  <FiBriefcase size={18} className="sm:w-5 sm:h-5" />
                  <span>Eli Lilly and Company</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <FiCalendar size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-sm md:text-base">12 Months</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Worked as a developer on a large-scale clinical trials project, gaining invaluable experience building 
              impactful software within a Scaled Agile Framework environment at a Fortune 500 pharmaceutical company.
            </p>

            {/* Key Responsibilities & Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Contributions:</h4>
              
              <div className="space-y-3">
                {[
                  'Developed features for a large-scale clinical trials project using React and Next.js',
                  'Worked in a Scaled Agile Framework with two-week sprints, daily stand-ups, and backlog refinement',
                  'Earned AWS Certified Cloud Practitioner and AWS Certified AI Practitioner certifications',
                  'Co-founded a student-led onboarding tool to bring innovation and improve onboarding experience',
                  'Served as Mental Health Ambassador, completing MHFA England training and organising wellness initiatives',
                  'Coordinated the Code for All Hackathon, with supervised team achieving first place',
                  'Attended data conference in London, gaining insights into big data and AI industry trends',
                  'Delivered lunch-and-learn sessions and organised mental health initiatives (gratitude wall, Movember events)',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'AWS', 'Node.js', 'Git', 'Agile'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background-tertiary border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* University of Reading Research Assistant */}
          <div className="bg-background-secondary border border-gray-800 rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Research Assistant
                </h3>
                <div className="flex items-center gap-2 text-primary text-lg font-semibold">
                  <FiBriefcase size={20} />
                  <span>University of Reading</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 mt-4 md:mt-0">
                <FiCalendar size={18} />
                <span className="text-sm md:text-base">Mar 2024 - Jul 2024</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Temporary research position focused on highlighting diverse contributions to mathematics and computer science, 
              working across multiple university departments.
            </p>

            {/* Key Responsibilities & Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Key Contributions:</h4>
              
              <div className="space-y-3">
                {[
                  'Researched diverse mathematicians and computer scientists to create engaging profile summaries',
                  'Documented various achievements and breakthroughs across different time periods and fields',
                  'Helped bring greater attention to underrepresented individuals in STEM using the university\'s platform',
                  'Collaborated with multiple university departments to gather and verify information',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-gray-300">
                    <FiCheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Used */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Skills Applied:</h4>
              <div className="flex flex-wrap gap-2">
                {['Research', 'Technical Writing', 'Cross-departmental Collaboration', 'Content Creation'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-background-tertiary border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
