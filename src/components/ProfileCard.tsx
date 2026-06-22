'use client';

import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-card border border-line rounded-xl p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Avatar */}
        <div className="relative flex-shrink-0 mx-auto sm:mx-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-accent/30">
            <Image
              src="/profile_photo.png"
              alt="Jack Tilford-Carey"
              width={112}
              height={112}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-card" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-fg">Jack Tilford-Carey</h1>
          <p className="text-muted text-sm font-mono mt-0.5">@jacktilfordcarey</p>

          {/* Meta */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 my-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <FiBriefcase size={13} className="text-accent flex-shrink-0" />
              Software Engineer · Former Eli Lilly
            </span>
            <span className="flex items-center gap-1.5">
              <FiMapPin size={13} className="text-accent flex-shrink-0" />
              Reading, UK
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted leading-relaxed mb-4 max-w-lg">
            Computer Science student at the University of Reading (Predicted First Class Honours).
            Former Full Stack Engineer at Eli Lilly building scalable apps with React, TypeScript, and AWS.
            AWS &amp; Azure certified.
          </p>

          {/* Skill tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-5">
            {['React', 'TypeScript', 'Next.js', 'AWS', 'Node.js', 'Python'].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-card-2 border border-line text-accent font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
            <a
              href="mailto:jacktilfordcarey@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <FiMail size={14} />
              Contact
            </a>
            <a
              href="/jacktilfordcareycv.docx"
              download
              className="flex items-center gap-2 px-4 py-2 bg-card-2 border border-line text-fg rounded-lg text-sm font-medium hover:border-accent/50 transition-all"
            >
              <FiDownload size={14} />
              Download CV
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jacktilfordcarey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jack-tilford-carey-8a0940227/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
