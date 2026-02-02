'use client';

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPhp,
  SiMongodb,
  SiAmazon,
  SiHeroku,
  SiKotlin,
  SiPython,
  SiGit,
} from 'react-icons/si';
import { FiCode, FiServer, FiCloud, FiSmartphone, FiCpu, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FiCode,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'HTML', icon: SiHtml5 },
        { name: 'CSS', icon: SiCss3 },
      ],
    },
    {
      title: 'Backend',
      icon: FiServer,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'PHP', icon: SiPhp },
        { name: 'MongoDB', icon: SiMongodb },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: FiCloud,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'AWS', icon: SiAmazon },
        { name: 'Heroku', icon: SiHeroku },
      ],
    },
    {
      title: 'Mobile',
      icon: FiSmartphone,
      color: 'from-purple-500 to-pink-500',
      skills: [{ name: 'Kotlin (Android)', icon: SiKotlin }],
    },
    {
      title: 'AI / ML',
      icon: FiCpu,
      color: 'from-red-500 to-rose-500',
      skills: [{ name: 'Python', icon: SiPython }],
    },
    {
      title: 'Tools',
      icon: FiTool,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'REST APIs', icon: FiServer },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background-secondary border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-background-tertiary rounded-lg hover:bg-background transition-colors duration-200"
                  >
                    <skill.icon size={20} className="text-primary" />
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Continuously learning and expanding my skill set to stay current with industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
