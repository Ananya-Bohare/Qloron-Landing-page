import { useState } from 'react';
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
import heroBg from '../assets/Hero9.jpg';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      <div className="font-sans bg-[#121212]">
        {/* Hero Section */}
        <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">
  {/* Background with light overlay */}
  <div className="absolute inset-0">
    <img 
      src={heroBg} 
      alt="Technology background"
      className="w-full h-full object-cover object-center"
    />
    {/* Light teal overlay with gradient */}
    <div className="absolute inset-0 bg-blue-400/40"></div>
  </div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Our <span className="text-[#00C2C9]">Creative Portfolio</span>
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white">
      Transforming ideas into exceptional digital experiences
    </p>
    
    {/* CTA Button */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-12"
    >
      <button className="px-8 py-3 bg-cyan-600/80 hover:bg-cyan-50 text-gray-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-100/30 flex items-center gap-2">
        View Case Studies
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </button>
    </motion.div>
  </motion.div>

  {/* Animated light elements */}
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
    className="absolute top-20 left-10 w-16 h-16 bg-cyan-100/20 rounded-full blur-xl"
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
    className="absolute bottom-10 right-20 w-24 h-24 bg-cyan-100/15 rounded-full blur-xl"
  />
</section>
    
        {/* Portfolio Gallery */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-[#007D82] mb-4">Our Portfolio</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">Explore our featured projects across different industries</p>
    </motion.div>

    {/* Filters */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-wrap justify-center gap-3 mb-16"
    >
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-200 hover:shadow-lg transition-all">
        <FaFilter className="text-gray-500 mr-2" />
        <span className="text-sm font-medium text-gray-600 mr-3">Filter:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-[#00C2C9] to-[#007D82] text-white shadow-md'
                : 'text-gray-600 hover:text-[#007D82] hover:bg-gray-100'
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
            <div className="bg-white p-2 rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl border border-gray-200 hover:border-[#00C2C9]/50">
              {/* Image Container */}
              <div className={`h-48 ${project.accentColor} relative overflow-hidden rounded-t-lg`}>
                <motion.img
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                {/* Tags overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 20
                  }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-2 py-1 bg-white/90 text-xs font-medium rounded text-gray-800 shadow-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 0.2 : 0 }}
                  className={`absolute inset-0 ${project.accentColor}`}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#007D82] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow group-hover:text-gray-800 transition-colors">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex justify-between mt-auto">
                  <motion.a
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00C2C9] hover:text-[#007D82] font-medium group"
                  >
                    <FaRegEye className="mr-2 transition-transform group-hover:scale-110" />
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                  <motion.a
                    whileHover={{ x: 3 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 font-medium group"
                  >
                    <FaGithub className="mr-2 transition-transform group-hover:scale-110" />
                    View Code
                    <svg
                      className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
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
              className={`absolute bottom-0 left-0 h-1.5 ${project.accentColor} rounded-b-xl`}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  </div>
</section>

{/* Stats Section */}
<section className="py-20 bg-gradient-to-r from-[#00C2C9]/10 to-[#007D82]/10">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
    >
      {[
        { 
          value: "50+", 
          label: "Projects Completed",
         // icon: <FaProjectDiagram className="text-3xl text-[#007D82] mb-4" />,
          bg: "bg-white"
        },
        { 
          value: "30+", 
          label: "Happy Clients",
        //  icon: <FaSmile className="text-3xl text-[#00C2C9] mb-4" />,
          bg: "bg-white"
        },
        { 
          value: "15+", 
          label: "Industries Served",
       //   icon: <FaIndustry className="text-3xl text-[#007D82] mb-4" />,
          bg: "bg-white"
        },
        { 
          value: "100%", 
          label: "Client Satisfaction",
        //  icon: <FaHeart className="text-3xl text-[#00C2C9] mb-4" />,
          bg: "bg-white"
        }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 194, 201, 0.2)" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`p-8 rounded-xl border border-gray-200 hover:border-[#00C2C9]/50 transition-all ${stat.bg}`}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {stat.icon}
            </motion.div>
            <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#00C2C9] to-[#007D82] bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
    
        {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00C2C9] to-[#007D82] text-white">
        <div className="container mx-auto px-4 text-center">
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
            className="text-xl mb-8 max-w-2xl mx-auto"
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
              className="inline-block px-8 py-3 bg-white text-[#121212] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:scale-105"
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