import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/Hero8.png';
import tech from '../assets/techsec.PNG'
import {
    FaReact, FaNodeJs, FaDatabase,
    FaAws, FaDocker, FaGitAlt, FaCode,
    FaAngular, FaPython,
     FaJava,
    FaHtml5, FaCss3, FaJs
} from 'react-icons/fa';
import {
     SiSpring, SiPostgresql,
    SiMongodb, SiKubernetes, SiGraphql,
    SiNestjs, SiExpress, SiFirebase,
    SiFlutter, SiIonic,SiKotlin
} from 'react-icons/si';


const TechnologiesPage: React.FC = () => {
    const techStack = [
        {
            title: "Mobile App Development",
            technologies: [
                { name: "Kotlin", icon: <SiKotlin className="text-4xl" style={{ color: '#A97BFF' }} /> },
                { name: "Java", icon: <FaJava className="text-4xl" style={{ color: '#F89820' }} /> },
                { name: "React Native", icon: <FaReact className="text-4xl text-blue-500" /> },
                { name: "Flutter", icon: <SiFlutter className="text-4xl text-blue-300" /> },
                { name: "Ionic", icon: <SiIonic className="text-4xl text-blue-600" /> },
            ],
        },
        {
            title: "Web App Development",
            technologies: [
                { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
                { name: "CSS", icon: <FaCss3 className="text-4xl text-blue-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
                { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
                { name: "Angular", icon: <FaAngular className="text-4xl text-red-500" /> },
            ],
        },
        // Keep the other sections using their existing icons
        {
            title: "Backend Development",
            technologies: [
                { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
                { name: "Python", icon: <FaPython className="text-4xl text-blue-400" /> },
                { name: "Java", icon: <FaCode className="text-4xl text-red-700" /> },
                { name: "Spring", icon: <SiSpring className="text-4xl text-green-600" /> },
                { name: ".NET", icon: <FaCode className="text-4xl text-blue-700" /> },
                { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-800" /> },
                { name: "NestJS", icon: <SiNestjs className="text-4xl text-red-500" /> },
            ],
        },
        {
            title: "Database",
            technologies: [
                { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-700" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" /> },
                { name: "MySQL", icon: <FaDatabase className="text-4xl text-blue-500" /> },
                { name: "Firebase", icon: <SiFirebase className="text-4xl text-yellow-500" /> },
                { name: "GraphQL", icon: <SiGraphql className="text-4xl text-pink-600" /> },
            ],
        },
        {
            title: "Cloud & DevOps",
            technologies: [
                { name: "AWS", icon: <FaAws className="text-4xl text-orange-500" /> },
                { name: "Google Cloud", icon: <FaAws className="text-4xl text-blue-300" /> },
                { name: "Azure", icon: <FaAws className="text-4xl text-blue-800" /> },
                { name: "Docker", icon: <FaDocker className="text-4xl text-blue-400" /> },
                { name: "Kubernetes", icon: <SiKubernetes className="text-4xl text-blue-500" /> },
                { name: "CI/CD", icon: <FaGitAlt className="text-4xl text-red-500" /> },
            ],
        },
    ];

    return (
        <div className="font-sans bg-gray-100">
            {/* Hero Section (as before) */}
            <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroBg}
                        alt="Technology background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/80 via-[#121212]/60 to-[#00C2C9]/30"></div>
                </div>

                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Our <span className="text-[#00C2C9]">Tech Stack</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
                    >
                        The powerful technologies we use to build exceptional digital products
                    </motion.p>
                </div>
            </section>

            {/* Tech Image Section */}
<section className="py-8 bg-gray-100"> {/* Adjust padding and background as needed */}
    <div className="container mx-auto px-4">
        <img
            src={tech}
            alt="Technology Banner"
            className="w-full rounded-md shadow-md" // You can add styling classes here
        />
    </div>
</section>

            {/* Technologies Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-[#007D82] mb-4">We accomplished the work using best technologies</h2>
      
      <p className="text-gray-800 max-w-4xl mx-auto">
      Qloron is a custom software development firm located in Nagpur, India. We offer custom software programming services, from offshore software development enhancement. Our software engineers coming from different backgrounds in IT fields.
    </p>
    </motion.div>

    <div className="space-y-16">
      {techStack.map((category, index) => (
        <div key={index} className="mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-[#007D82] mb-8 text-center"
          >
            {category.title}
          </motion.h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1}}
            viewport={{ once: true }}
          >
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 w-36"
              >
                <div className="mb-3">
                  {tech.icon}
                </div>
                <span className="text-md text-gray-800 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>

            {/* Methodology Section (as before) */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-[#007D82] mb-4">How We Build</h2>
                        <p className="text-gray-700 max-w-xl mx-auto">
                            Our development philosophy ensures quality at every stage
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Modular Architecture",
                                description: "Building with reusable components for scalability",
                                icon: <FaCode className="text-4xl text-[#00C2C9]" />
                            },
                            {
                                title: "Agile Process",
                                description: "Iterative development with continuous feedback",
                                icon: <FaGitAlt className="text-4xl text-[#00C2C9]" />
                            },
                            {
                                title: "Quality Focus",
                                description: "Rigorous testing and code reviews",
                                icon: <FaAws className="text-4xl text-[#00C2C9]" />
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all border border-gray-200"
                            >
                                <div className="flex justify-center mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section (as before) */}
            <section className="py-20 bg-gradient-to-r from-[#00C2C9] to-[#007D82] text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Build Something Amazing?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can leverage these technologies for your project
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contacts"
                                className="px-8 py-3 bg-white text-[#121212] hover:bg-gray-100 font-bold rounded-lg transition-colors shadow-sm hover:scale-105"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/portfolio"
                                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-[#121212] font-bold rounded-lg transition-colors shadow-sm hover:scale-105"
                            >
                                See Our Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TechnologiesPage;