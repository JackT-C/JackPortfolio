'use client';

import { SiAmazon } from 'react-icons/si';
import { FiAward, FiCheckCircle } from 'react-icons/fi';

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
  ];

  return (
    <section id="certifications" className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Validated expertise in cloud computing and AI technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-background border border-gray-800 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              {/* Badge Icon */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 bg-gradient-to-br ${cert.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon size={36} className="text-white" />
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FiAward size={16} />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-colors">
                {cert.title}
              </h3>
              <p className="text-primary font-semibold mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Skills Covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-background-tertiary border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Badge */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2 text-green-500">
                  <FiCheckCircle size={18} />
                  <span className="text-sm font-semibold">Verified Certification</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
