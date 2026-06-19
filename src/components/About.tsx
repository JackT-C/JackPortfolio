'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedStat({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.ceil(value / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
      {count}{suffix}
    </div>
  );
}

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-secondary">
      <motion.div
        className="container-custom"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
            {/* Profile Photo */}
            <motion.div variants={fadeUp} className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10">
                  <Image
                    src="/profile_photo.png"
                    alt="Jack Tilford-Carey"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-primary rounded-full border-4 border-background-secondary"></div>
              </div>
            </motion.div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <motion.p variants={fadeUp}>
              I&apos;m a <span className="text-white font-semibold">Computer Science student</span> at the{' '}
              <span className="text-white font-semibold">University of Reading</span>, passionate about technology, problem-solving, and innovation.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">▹</span>
                <span>Worked as a <span className="text-white font-semibold">Full Stack Software Engineer</span> at{' '}
                <span className="text-white font-semibold">Eli Lilly and Company</span>, building scalable web apps with React, TypeScript, Python, and AWS — receiving a{' '}
                <span className="text-white font-semibold">Recognition Award</span> and visiting the U.S. headquarters to collaborate with global teams.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">▹</span>
                <span>Completed a <span className="text-white font-semibold">machine learning project</span> at Lilly, expanding skills in data-driven development within a SAFe Agile environment.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">▹</span>
                <span>Final year project: <span className="text-white font-semibold">&quot;A Multi-Modal Framework for Diabetes Risk Prediction&quot;</span> — combining ML, NLP, and health data analytics to explore AI&apos;s role in digital healthcare.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">▹</span>
                <span>Certified in <span className="text-white font-semibold">AWS Cloud Practitioner</span>, <span className="text-white font-semibold">AWS AI Practitioner</span>, <span className="text-white font-semibold">AZ-900</span>, and <span className="text-white font-semibold">AI-900</span>.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1 flex-shrink-0">▹</span>
                <span>Competitive <span className="text-white font-semibold">800m athlete</span> — bringing the same discipline to code as to the track.</span>
              </li>
            </motion.ul>

            {/* Highlight Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center p-3">
                <AnimatedStat value={12} suffix="+" />
                <div className="text-xs sm:text-sm text-gray-400">Months Industry Experience</div>
              </div>
              <div className="text-center p-3">
                <AnimatedStat value={4} />
                <div className="text-xs sm:text-sm text-gray-400">Certifications</div>
              </div>
              <div className="text-center p-3">
                <AnimatedStat value={10} suffix="+" />
                <div className="text-xs sm:text-sm text-gray-400">Major Projects</div>
              </div>
              <div className="text-center p-3">
                <AnimatedStat value={100} suffix="%" />
                <div className="text-xs sm:text-sm text-gray-400">Commitment</div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
