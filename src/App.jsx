import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Smartphone, Download, ExternalLink, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const skills = [
    { category: 'iOS', items: ['Swift', 'SwiftUI', 'UIKit', 'Xcode', 'Core Animation', 'MapKit'] },
    { category: 'Flutter', items: ['Dart', 'Flutter', 'Provider', 'Riverpod', 'ObjectBox'] },
    { category: 'Architecture', items: ['MVVM', 'MVC', 'MVP', 'Clean Architecture', 'SOLID Principles'] },
    { category: 'Tools & Backend', items: ['Git', 'Firebase', 'RESTful API', 'GraphQL', 'CI/CD', 'Bitrise'] }
  ];

  const projects = [
    {
      title: 'Mobile Service Manager',
      description: 'Comprehensive service management system for mobile repair shops with advanced reporting and offline-first architecture.',
      tech: ['Flutter', 'Riverpod', 'ObjectBox', 'MVVM'],
      type: 'Desktop & Mobile',
      year: '2025',
      highlights: ['PDF/Excel exports', 'Revenue analytics', 'Offline-first sync']
    },
    {
      title: 'Tmovies',
      description: 'Feature-rich movie streaming app with offline downloads and Picture-in-Picture support across Android, iOS and Android TV.',
      tech: ['Flutter', 'Firebase', 'ObjectBox', 'Provider'],
      type: 'Cross-platform',
      year: '2024-2025',
      link: 'https://play.google.com/store/apps/details?id=com.thebillionaire.movie_server',
      highlights: ['Offline downloads', 'PiP mode', 'Multi-platform']
    },
    {
      title: 'Mega Z ERP',
      description: 'Comprehensive ERP system with separate apps for staff, kitchen, waiter and customers with real-time synchronization.',
      tech: ['Flutter', 'WebSocket', 'Provider', 'Riverpod'],
      type: 'Enterprise',
      year: '2023-Present',
      link: 'https://testflight.apple.com/join/syAmsdsM',
      highlights: ['Real-time sync', 'Multi-app system', 'Push notifications']
    },
    {
      title: 'Slazh',
      description: 'High-performance fashion e-commerce iOS app with secure payments and elegant animations.',
      tech: ['Swift', 'Alamofire', 'Realm', 'Core Animation'],
      type: 'iOS',
      year: '2021-2023',
      link: 'https://apps.apple.com/us/app/slazh/id6447933375',
      highlights: ['Secure payments', 'Custom animations', 'Offline cart']
    }
  ];

  const experience = [
    {
      title: 'Mobile Developer',
      company: 'Mega Z',
      period: '2023 Aug - Present',
      description: 'Developing ERP solutions with Flutter for KTV and bar industry',
      achievements: [
        'Built real-time WebSocket communication system',
        'Integrated Firebase Cloud Messaging',
        'Optimized business processes with mobile solutions'
      ]
    },
    {
      title: 'iOS Developer',
      company: 'Slazh',
      period: '2021 Jun - 2023 Jul',
      description: 'Fashion e-commerce iOS application development',
      achievements: [
        'Developed high-performance e-commerce app',
        'Implemented secure payment systems',
        'Collaborated with UI/UX team on custom animations'
      ]
    },
    {
      title: 'Junior iOS Developer',
      company: 'Swan Arr Electronics',
      period: '2019 Aug - 2021 Apr',
      description: 'iOS application development and Agile methodology',
      achievements: [
        'Contributed to multiple iOS applications',
        'Applied best practices and coding standards',
        'Participated in Agile development sprints'
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Soe Min Thein
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    activeSection === item.toLowerCase()
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-white'
                  } transition-colors`}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 border-t border-purple-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-purple-500/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="text-center z-10 px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Soe Min Thein
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Mobile Developer
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            5+ years crafting beautiful mobile experiences with Swift, SwiftUI, and Flutter
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:soeminthein020@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/soemintheinsmt6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A passionate mobile developer with over 5 years of experience in designing, developing, and maintaining mobile applications. I specialize in creating reusable and efficient code with a strong focus on enhancing user experiences and delivering innovative mobile solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Currently working on mobile app development projects using Swift, UIKit, SwiftUI, and Flutter. I'm proficient in various mobile development frameworks and always eager to collaborate on open-source projects related to mobile development.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Fun fact: Besides coding, I'm also a footballer who enjoys playing competitively in my free time! ⚽
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">{exp.title}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-pink-400 font-semibold mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                    <span className="text-sm text-pink-400 font-semibold">{project.type}</span>
                  </div>
                  <span className="text-sm text-gray-400">{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-slate-700 text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-sm px-3 py-1 bg-slate-700 text-gray-300 rounded-full hover:bg-purple-900/50 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'Critical Thinking', 'Agile/Scrum', 'CI/CD', 'Git', 'Team Work', 'Performance Optimization'].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 mb-12"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:soeminthein020@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              <Mail className="w-6 h-6" />
              Email Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/soemintheinsmt6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 rounded-full text-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              <Github className="w-6 h-6" />
              GitHub
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/soemin-thein"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800 rounded-full text-lg font-semibold hover:bg-slate-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-gray-400"
          >
            <p>📍 Based in Myanmar (Burma)</p>
            <p className="mt-2">📞 +959798813966</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Soe Min Thein</p>
        </div>
      </footer>
    </div>
  );
}

export default App;