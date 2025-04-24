import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaRegEye, FaFilter } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import project1 from '../assets/enterprise.webp';

// Import other project images if you have them
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.PNG';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';
import project7 from '../assets/project7.webp';
import project8 from '../assets/project8.webp';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Enterprise SaaS Platform",
      description: "Comprehensive business management solution with React frontend and Java backend",
      tags: ["React", "Java", "Spring Boot", "AWS"],
      category: "Web Applications",
      image: project1, // Using the imported image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-blue-500"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Real-time analytics dashboard for online retailers with interactive visualizations",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      category: "Web Applications",
      image: project2, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-purple-500"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Secure patient records system with HIPAA compliance and telehealth features",
      tags: ["React", "TypeScript", "PostgreSQL", "Docker"],
      category: "Enterprise Solutions",
      image: project3, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-teal-500"
    },
    {
      id: 4,
      title: "Financial Analytics Tool",
      description: "AI-powered investment analysis platform with predictive modeling",
      tags: ["Python", "React", "TensorFlow", "Firebase"],
      category: "Web Applications",
      image: project4, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-amber-500"
    },
    {
      id: 5,
      title: "Education Platform",
      description: "Interactive learning management system with video conferencing",
      tags: ["Angular", "Node.js", "WebRTC", "MongoDB"],
      category: "Web Applications",
      image: project5, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-red-500"
    },
    {
      id: 6,
      title: "Logistics Tracking App",
      description: "Mobile app for real-time shipment tracking with IoT integration",
      tags: ["React Native", "Java", "Google Maps API", "AWS IoT"],
      category: "Mobile Apps",
      image: project6, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-green-500"
    },
    {
      id: 7,
      title: "CRM Solution",
      description: "Customer relationship management platform for sales teams",
      tags: ["Vue.js", "NestJS", "MySQL", "Azure"],
      category: "Enterprise Solutions",
      image: project7, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-indigo-500"
    },
    {
      id: 8,
      title: "Fitness Tracker",
      description: "Mobile app with workout plans and health monitoring",
      tags: ["Flutter", "Firebase", "HealthKit", "Google Fit"],
      category: "Mobile Apps",
      image: project8, // Make sure this path is correct or import the image
      liveUrl: "#",
      codeUrl: "#",
      accentColor: "bg-pink-500"
    }
  ];

  const filters = ["All", "Web Applications", "Mobile Apps", "Enterprise Solutions"];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-700 text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white animate-float1"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-white animate-float2"></div>
          <div className="absolute top-1/2 left-1/5 w-10 h-10 rounded-full bg-white animate-float1"></div>
          <div className="absolute bottom-3 right-1/4 w-6 h-6 rounded-full bg-white animate-float2"></div>
          <div className="absolute bottom-1/4 left-3/4 w-8 h-8 rounded-full bg-white animate-float1"></div>
          <div className="absolute bottom-1/3 right-1/5 w-10 h-10 rounded-full bg-white animate-float2"></div>
          <div className="absolute top-10 left-2/3 w-6 h-6 rounded-full bg-white animate-float1"></div>
          <div className="absolute top-16 right-1/6 w-14 h-14 rounded-full bg-white animate-float2"></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full bg-white animate-float1"></div>
          <div className="absolute bottom-20 right-16 w-10 h-10 rounded-full bg-white animate-float2"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-teal-300">Work</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-20 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl"
        />
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
              <FaFilter className="text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-500 mr-3">Filter:</span>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-teal-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative group"
                >
                  {/* Project Card */}
                  <div className="bg-white p-2 rounded-xl shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl">
                    {/* Image Container */}
                    <div className={`h-48 ${project.accentColor} relative overflow-hidden`}>
                      <motion.img
                        animate={{
                          scale: hoveredProject === project.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                        src={project.image} // Using the image source here
                        alt={project.title}
                      />
                      {/* Tags overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 20
                        }}
                        className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                      >
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/90 text-xs font-medium rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

                      {/* Buttons */}
                      <div className="flex justify-between mt-auto">
                        <motion.a
                          whileHover={{ x: 3 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-teal-600 hover:text-teal-800 font-medium"
                        >
                          <FaRegEye className="mr-2" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          whileHover={{ x: 3 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
                        >
                          <FaGithub className="mr-2" />
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Accent border */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredProject === project.id ? '100%' : 0
                    }}
                    className={`absolute bottom-0 left-0 h-1 ${project.accentColor} rounded-b-xl`}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "15+", label: "Industries Served" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl font-bold mb-2 text-teal-400">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 opacity-5 z-0" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto text-gray-600"
          >
            Let's collaborate to build something extraordinary
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contacts"
              className="inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started Today
              </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;