'use client';

import { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="container-custom" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a final-year <span className="text-white font-semibold">Computer Science student</span> at the 
              <span className="text-white font-semibold"> University of Reading</span>, passionate about building 
              scalable, cloud-ready applications that solve real-world problems.
            </p>

            <p>
              During my <span className="text-white font-semibold">year-long software developer internship at Eli Lilly</span>, 
              I've had the opportunity to work as a developer on a <span className="text-white font-semibold">large-scale clinical trials project</span>, 
              continuing to develop my skills in React and Next.js within a large organization. Working in a 
              <span className="text-white font-semibold"> Scaled Agile Framework</span> environment through two-week sprints, 
              daily stand-ups, backlog refinement, and close collaboration has given me invaluable insight into how 
              impactful software is built at scale.
            </p>

            <p>
              Alongside this, I've also been involved in a student-led onboarding tool, which I co-founded alongside talented teammates, bringing innovation 
              to Lilly to help streamline and improve the onboarding experience.
            </p>

            <p>
              My interests span <span className="text-white font-semibold">scalable systems</span>, 
              <span className="text-white font-semibold"> cloud architecture</span>, and 
              <span className="text-white font-semibold"> AI-assisted solutions</span>. I've built everything from 
              social media platforms with AI-powered moderation to restaurant management systems—taking full ownership 
              of projects from concept to deployment.
            </p>

            <p>
              I thrive on <span className="text-white font-semibold">problem-solving</span> and take pride in writing 
              clean, maintainable code. I'm currently seeking graduate software engineering roles where I can continue 
              to grow as a developer while contributing to meaningful projects.
            </p>

            {/* Highlight Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">12+</div>
                <div className="text-sm text-gray-400">Months Industry Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">2</div>
                <div className="text-sm text-gray-400">AWS Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10+</div>
                <div className="text-sm text-gray-400">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-sm text-gray-400">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
