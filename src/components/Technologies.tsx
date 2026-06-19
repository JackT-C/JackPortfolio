'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiExpress,
} from 'react-icons/si';

const techs = [
  { icon: SiReact,       name: 'React',      color: '#61DAFB' },
  { icon: SiNextdotjs,   name: 'Next.js',    color: null },
  { icon: SiTypescript,  name: 'TypeScript', color: '#3178c6' },
  { icon: SiJavascript,  name: 'JavaScript', color: '#f7df1e' },
  { icon: SiNodedotjs,   name: 'Node.js',    color: '#339933' },
  { icon: SiPython,      name: 'Python',     color: '#3776ab' },
  { icon: SiAmazon,      name: 'AWS',        color: '#ff9900' },
  { icon: SiPostgresql,  name: 'PostgreSQL', color: '#336791' },
  { icon: SiMongodb,     name: 'MongoDB',    color: '#47a248' },
  { icon: SiGit,         name: 'Git',        color: '#f05032' },
  { icon: SiTailwindcss, name: 'Tailwind',   color: '#06b6d4' },
  { icon: SiExpress,     name: 'Express',    color: null },
];

export default function Technologies() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-card border border-line rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-line">
        <h2 className="text-sm font-semibold text-fg">Technologies</h2>
      </div>

      {/* Icon grid */}
      <div className="p-4">
        <div className="grid grid-cols-4 gap-2">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: i * 0.025 }}
              title={tech.name}
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg bg-card-2 border border-transparent hover:border-accent/30 transition-all duration-150 group cursor-default"
            >
              <tech.icon
                size={22}
                className="group-hover:scale-110 transition-transform duration-150"
                style={tech.color ? { color: tech.color } : undefined}
              />
              <span className="text-[9px] text-muted text-center leading-tight font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
