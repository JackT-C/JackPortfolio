'use client';

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiMic, FiUsers, FiShoppingCart } from 'react-icons/fi';

const projects = [
  {
    title: 'MyPace',
    description:
      'AI-powered running coach with hands-free voice interaction, Strava integration, and personalised coaching powered by Groq LLaMA models.',
    techs: ['React', 'Node.js', 'PostgreSQL', 'Groq AI', 'Heroku'],
    liveUrl: 'https://mypace-6d33e7a27078.herokuapp.com/',
    githubUrl: null,
    icon: FiMic,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Yappo',
    description:
      'Full-stack social media platform with AI bot/spam detection, native Android app, and real-time behaviour pattern analysis.',
    techs: ['JavaScript', 'PHP', 'Python', 'Kotlin', 'AWS'],
    liveUrl: 'https://datajl-9906ee34d579.herokuapp.com/',
    githubUrl: null,
    icon: FiUsers,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'New ERA POS',
    description:
      'Bilingual MERN-stack restaurant management system with real-time order tracking, role-based access, and analytics dashboard.',
    techs: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Express'],
    liveUrl: 'https://restaurant-pos-bilingual-fbe2ee64f280.herokuapp.com/',
    githubUrl: null,
    icon: FiShoppingCart,
    gradient: 'from-teal-500 to-cyan-500',
  },
];

export default function FeaturedProjects() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
          Pinned Projects
        </span>
        <div className="flex-1 h-px bg-line" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            className="bg-card border border-line rounded-xl p-5 hover:border-accent/50 hover:shadow-lg transition-all duration-200 group flex flex-col"
          >
            {/* Top */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}
              >
                <project.icon size={15} className="text-white" />
              </div>
              <h3 className="font-semibold text-fg group-hover:text-accent transition-colors truncate">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techs.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-card-2 border border-line text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-3 border-t border-line mt-auto">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={15} />
                </a>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-accent hover:underline font-medium ml-auto"
                >
                  <FiExternalLink size={13} />
                  Live Demo
                </a>
              ) : (
                <span className="text-xs text-muted ml-auto italic">In progress</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
