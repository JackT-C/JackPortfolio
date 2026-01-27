'use client';

import { useState } from 'react';
import { FiExternalLink, FiGithub, FiCalendar, FiUsers, FiCpu, FiShoppingCart, FiChevronDown, FiChevronUp, FiMic } from 'react-icons/fi';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'MyPace',
      subtitle: 'AI-Powered Voice-Interactive Running Coach',
      period: 'Dec 2025 – Feb 2026',
      description:
        'A full-stack running analytics platform featuring hands-free voice interaction with an AI coach powered by Groq\'s LLaMA models. Athletes can have natural voice conversations about their training, ask questions, get form feedback, and receive personalized coaching recommendations while reviewing their Strava activities.',
      highlights: [
        'Built voice-first AI coaching interface using Web Speech API for natural conversations during post-run debriefs',
        'Integrated Groq\'s LLaMA models to provide personalized coaching recommendations based on running data',
        'Implemented real-time activity syncing with Strava OAuth 2.0 and webhook APIs',
        'Deployed scalable full-stack solution on Heroku with continuous deployment pipeline',
        'Designed PostgreSQL database schema with Sequelize ORM for efficient activity data management',
      ],
      technologies: [
        'Node.js',
        'Express',
        'React',
        'Vite',
        'PostgreSQL',
        'Sequelize',
        'Groq AI',
        'LLaMA',
        'Web Speech API',
        'Strava API',
        'OAuth 2.0',
        'Heroku',
      ],
      liveLink: 'https://mypace-6d33e7a27078.herokuapp.com/',
      icon: FiMic,
      gradient: 'from-orange-500 to-red-600',
      deepDive: {
        architecture: {
          description: 'Voice-first full-stack application with AI coaching integration, real-time Strava sync, and hands-free interaction',
          components: [
            'Frontend: React + Vite with Web Speech API for voice recognition and synthesis',
            'Backend: Node.js/Express REST API with webhook handling',
            'Database: PostgreSQL with Sequelize ORM for activity data and user profiles',
            'AI: Groq\'s LLaMA models for conversational coaching recommendations',
            'Integration: Strava OAuth 2.0 and webhooks for real-time activity syncing',
            'Deployment: Heroku with continuous deployment pipeline',
          ],
        },
        decisions: [
          'Used Web Speech API for browser-native voice recognition instead of cloud services for lower latency',
          'Chose Groq\'s LLaMA for AI coaching due to fast inference speeds crucial for conversational UX',
          'Implemented Strava webhooks for real-time activity updates instead of polling',
          'Selected PostgreSQL for relational activity data with strong ACID guarantees',
          'Built with Vite for faster development and optimized production builds',
        ],
        tradeoffs: [
          'Web Speech API vs cloud speech services: Browser-native but limited browser support',
          'Groq vs OpenAI: Faster inference but less model variety and customization',
          'Webhooks vs polling: Real-time updates but requires public endpoint management',
          'PostgreSQL vs NoSQL: Better for relational activity data but less flexible schema',
          'Heroku vs AWS: Easier deployment but higher cost and potential cold starts',
        ],
        improvements: [
          'Add mobile app with native speech recognition for better performance',
          'Implement workout plan generation with calendar integration',
          'Add training load analysis and injury risk prediction',
          'Integrate with additional platforms (Garmin, Apple Health, Google Fit)',
          'Enhance AI with fine-tuned model on running coaching data',
          'Add social features for coach-athlete or team interactions',
        ],
      },
    },
    {
      title: 'Yappo',
      subtitle: 'AI-Powered Social Media Platform',
      period: 'Oct 2023 – Aug 2025',
      description:
        'A full-stack social media platform designed to combat bots, spam, and misinformation through advanced AI detection systems.',
      highlights: [
        'Took full ownership after team members dropped out, delivering both web and native Android applications',
        'Implemented complete social features: posting, messaging, friends system, upvoting/downvoting',
        'Built AI-powered spam & bot detection using neural networks and gradient descent algorithms',
        'Deployed scalable cloud infrastructure with real-time behavior pattern analysis',
      ],
      technologies: [
        'JavaScript',
        'PHP',
        'Python',
        'Kotlin',
        'HTML/CSS',
        'AWS',
        'Heroku',
        'Neural Networks',
        'Machine Learning',
      ],
      liveLink: 'https://datajl-9906ee34d579.herokuapp.com/',
      icon: FiUsers,
      gradient: 'from-blue-500 to-purple-600',
      deepDive: {
        architecture: {
          description: 'Multi-tier architecture with separate web and mobile frontends, unified backend API, and ML pipeline',
          components: [
            'Frontend: Web (HTML/CSS/JS) + Android (Kotlin)',
            'Backend: PHP REST API on Heroku',
            'Database: MySQL for user data, posts, and relationships',
            'ML Pipeline: Python neural networks for spam/bot detection',
            'Cloud: AWS for media storage and behavior analysis',
          ],
        },
        decisions: [
          'Chose PHP for backend due to fast development and hosting simplicity',
          'Built native Android app in Kotlin for better performance than hybrid solutions',
          'Implemented custom neural network in Python for spam detection instead of using pre-built models',
          'Used behavior pattern analysis to detect bot-like activity over time',
        ],
        tradeoffs: [
          'PHP over Node.js: Faster initial development but less modern async capabilities',
          'Native Android vs React Native: Better performance but required learning Kotlin',
          'Custom ML model: More control but longer training time and maintenance overhead',
          'Heroku hosting: Easy deployment but potential cold start delays',
        ],
        improvements: [
          'Migrate backend to Node.js/TypeScript for better type safety and modern patterns',
          'Implement Redis caching layer to reduce database load',
          'Add real-time WebSocket connections for instant messaging',
          'Enhance ML model with more training data and advanced architectures (transformers)',
          'Add comprehensive unit and integration testing',
        ],
      },
    },
    {
      title: 'New ERA POS',
      subtitle: 'Restaurant Management System',
      period: 'May 2025 – Jun 2025',
      description:
        'A comprehensive MERN-stack point-of-sale system designed for modern restaurant operations with real-time order tracking.',
      highlights: [
        'Built real-time order lifecycle management (pending → in-progress → served)',
        'Designed interactive table management UI for efficient service coordination',
        'Implemented multi-language support (English & Chinese) for diverse user base',
        'Created role-based access control for Admin, Manager, Waiter, and Cashier roles',
        'Developed analytics dashboard for revenue tracking and menu optimization',
      ],
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Express',
        'TypeScript',
        'REST APIs',
        'Heroku',
      ],
      liveLink: 'https://restaurant-pos-bilingual-fbe2ee64f280.herokuapp.com/login',
      icon: FiShoppingCart,
      gradient: 'from-green-500 to-teal-600',
      deepDive: {
        architecture: {
          description: 'Modern MERN stack with TypeScript, RESTful API design, and role-based access control',
          components: [
            'Frontend: React + TypeScript with Context API for state management',
            'Backend: Express.js REST API with JWT authentication',
            'Database: MongoDB with Mongoose ODM for flexible schema design',
            'Authentication: JWT tokens with role-based middleware',
            'Deployment: Heroku with automated CI/CD pipeline',
          ],
        },
        decisions: [
          'Used Context API instead of Redux for simpler state management',
          'Implemented JWT tokens for stateless authentication across roles',
          'Chose MongoDB for flexible schema to accommodate varying menu structures',
          'Built custom i18n solution for English/Chinese support',
          'Server-side order state management to ensure consistency',
        ],
        tradeoffs: [
          'Context API vs Redux: Simpler setup but less tooling and devtools',
          'JWT vs sessions: Stateless and scalable but no server-side revocation',
          'MongoDB vs PostgreSQL: Flexible schema but less ACID guarantees for transactions',
          'Custom i18n vs library: Lightweight but limited features',
          'REST vs GraphQL: Easier to implement but more API endpoints needed',
        ],
        improvements: [
          'Add WebSocket integration for real-time order updates without polling',
          'Implement offline-first PWA capabilities for network resilience',
          'Add print integration for receipt generation',
          'Enhance analytics with data visualization library (Chart.js/D3)',
          'Add payment gateway integration (Stripe/PayPal)',
          'Implement inventory management system',
        ],
      },
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, cloud deployment, and AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group"
            >
              <div className="p-8 md:p-10">
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl`}>
                      <project.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-gradient transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 font-medium">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FiCalendar size={16} />
                    <span>{project.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features & Achievements:</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-primary mt-1">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-background-tertiary border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-800">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-200 font-semibold hover:glow-effect"
                  >
                    <FiExternalLink size={18} />
                    View Live Demo
                  </a>
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="flex items-center gap-2 px-6 py-3 bg-background-tertiary hover:bg-background border border-gray-700 hover:border-primary/50 text-white rounded-lg transition-all duration-200 font-semibold"
                  >
                    {expandedProject === index ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
                    {expandedProject === index ? 'Hide' : 'View'} Deep Dive
                  </button>
                </div>

                {/* Deep Dive Section */}
                {expandedProject === index && (
                  <div className="mt-8 pt-8 border-t border-gray-800 animate-slide-up space-y-8">
                    {/* Architecture */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FiCpu className="text-primary" size={24} />
                        Architecture Overview
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.deepDive.architecture.description}</p>
                      <div className="bg-background-tertiary border border-gray-700 rounded-lg p-6">
                        <ul className="space-y-3">
                          {project.deepDive.architecture.components.map((component, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <span className="text-primary mt-1">▹</span>
                              <span className="leading-relaxed">{component}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Technical Decisions */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Key Technical Decisions</h4>
                      <div className="grid gap-3">
                        {project.deepDive.decisions.map((decision, idx) => (
                          <div key={idx} className="bg-background-tertiary border border-gray-700 rounded-lg p-4 hover:border-primary/30 transition-colors">
                            <p className="text-gray-300 leading-relaxed">{decision}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Trade-offs Considered */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Trade-offs Considered</h4>
                      <div className="grid gap-3">
                        {project.deepDive.tradeoffs.map((tradeoff, idx) => (
                          <div key={idx} className="bg-background-tertiary border border-gray-700 rounded-lg p-4 hover:border-primary/30 transition-colors">
                            <p className="text-gray-300 leading-relaxed">{tradeoff}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Future Improvements */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Future Improvements</h4>
                      <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 border border-primary/20 rounded-lg p-6">
                        <ul className="space-y-3">
                          {project.deepDive.improvements.map((improvement, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-300">
                              <span className="text-primary mt-1">▹</span>
                              <span className="leading-relaxed">{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
