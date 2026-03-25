'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

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
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div variants={fadeUp} className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
          </motion.div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <motion.p variants={fadeUp}>
              I&apos;m a final-year <span className="text-white font-semibold">Computer Science student</span> at the 
              <span className="text-white font-semibold"> University of Reading</span>, on track for a 
              <span className="text-white font-semibold"> Predicted First Class Honours</span>. I&apos;m passionate about 
              building scalable, cloud-ready applications that solve real-world problems.
            </motion.p>

            <motion.p variants={fadeUp}>
              During my <span className="text-white font-semibold">year-long placement at Eli Lilly and Company</span>, 
              I&apos;ve worked as a software engineer on <span className="text-white font-semibold">enterprise-level pharmaceutical applications</span>, 
              developing my skills in React, Next.js, and cloud technologies within a Fortune 500 organisation. Working in a 
              <span className="text-white font-semibold"> Scaled Agile Framework</span> environment through two-week sprints, 
              daily stand-ups, and backlog refinement has given me invaluable insight into how 
              impactful software is built at scale.
            </motion.p>

            <motion.p variants={fadeUp}>
              Alongside this, I co-founded a <span className="text-white font-semibold">student-led onboarding tool</span> to 
              streamline the new-starter experience at Lilly, and I&apos;ve also contributed beyond code—serving as a 
              <span className="text-white font-semibold"> Mental Health Ambassador</span> (MHFA England trained), 
              coordinating the Code for All Hackathon, and delivering lunch-and-learn sessions.
            </motion.p>

            <motion.p variants={fadeUp}>
              My interests span <span className="text-white font-semibold">full-stack development</span>, 
              <span className="text-white font-semibold"> cloud architecture</span>, and 
              <span className="text-white font-semibold"> AI-powered solutions</span>. I&apos;ve built everything from 
              voice-interactive AI running coaches to real-time social media platforms and multilingual restaurant POS 
              systems—taking full ownership from concept to deployment. Outside of tech, I&apos;m a 
              <span className="text-white font-semibold"> competitive 800m athlete</span> who brings the same discipline 
              to code as to the track.
            </motion.p>

            <motion.p variants={fadeUp}>
              I thrive on <span className="text-white font-semibold">problem-solving</span> and take pride in writing 
              clean, maintainable code. I&apos;m currently seeking <span className="text-white font-semibold">graduate software engineering roles 
              starting June 2027</span> where I can continue to grow while contributing to meaningful projects.
            </motion.p>

            {/* Highlight Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center p-3">
                <AnimatedStat value={12} suffix="+" />
                <div className="text-xs sm:text-sm text-gray-400">Months Industry Experience</div>
              </div>
              <div className="text-center p-3">
                <AnimatedStat value={2} />
                <div className="text-xs sm:text-sm text-gray-400">AWS Certifications</div>
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
      </motion.div>
    </section>
  );
};

export default About;
