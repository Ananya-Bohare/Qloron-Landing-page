//import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../assets/Hero6.jpg';
import { 
  Code, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Wifi, 
  PenTool, 
  CheckCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs, built with cutting-edge technologies for optimal performance.",
      icon: <Code className="w-6 h-6" />,
      link: "/services/custom-software"
    },
    {
      title: "Web Application Development",
      description: "Responsive, scalable, and secure web applications that deliver exceptional user experiences across all devices.",
      icon: <Globe className="w-6 h-6" />,
      link: "/services/web-apps"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/services/mobile-apps"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence to automate processes, gain insights, and enhance decision-making.",
      icon: <Cpu className="w-6 h-6" />,
      link: "/services/ai-ml"
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, management, and optimization to maximize your cloud investment.",
      icon: <Cloud className="w-6 h-6" />,
      link: "/services/cloud"
    },
    {
      title: "IoT Solutions",
      description: "End-to-end Internet of Things solutions that connect devices, collect data, and enable smart operations.",
      icon: <Wifi className="w-6 h-6" />,
      link: "/services/iot"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront to maximize engagement and satisfaction.",
      icon: <PenTool className="w-6 h-6" />,
      link: "/services/uiux"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing services to ensure your software is reliable, secure, and performs flawlessly.",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "/services/qa"
    },
    {
      title: "IT Consulting",
      description: "Expert guidance to align your technology strategy with business goals and drive digital transformation.",
      icon: <MessageSquare className="w-6 h-6" />,
      link: "/services/consulting"
    }
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">
        <div className="absolute inset-0 top-0">
          <img 
            src={heroBg} 
            alt="Technology background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-teal-600/40"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Our <span className="text-[#00C2C9]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white"
          >
            Innovative technology solutions tailored to your business needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <Link
              to="/contacts"
              className="px-8 py-3 bg-[#00C2C9] hover:bg-[#0099A0] text-white font-medium rounded-lg transition-all inline-flex items-center shadow-lg hover:shadow-teal-500/20 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
<section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-4xl font-bold text-[#007D82] mb-4">
        What We Offer
      </h2>
      <p className="text-gray-800 max-w-2xl mx-auto text-lg">
        Comprehensive digital solutions to help your business thrive
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.1}}
          viewport={{ once: true }}
          whileHover={{ 
            y: -10,
            backgroundColor: "#007D82", // Dark teal background on hover
            color: "#FFFFFF", // White text on hover
            boxShadow: "0 20px 25px -5px rgba(0, 194, 201, 0.3)"
          }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 group"
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-start mb-6">
              <motion.div
                whileHover={{ backgroundColor: "#00C2C9", color: "#FFFFFF" }}
                className="p-3 rounded-xl bg-[#00C2C9]/10 text-[#007D82] mr-4 flex-shrink-0 group-hover:bg-[#00C2C9] group-hover:text-white transition-colors duration-300"
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
            </div>
            <motion.p 
              className="text-gray-600 mb-6 flex-grow group-hover:text-gray-200 transition-colors duration-300"
            >
              {service.description}
            </motion.p>
            <Link
              to={service.link}
              className="mt-auto inline-flex items-center text-[#00C2C9] font-semibold group-hover:text-white transition-colors duration-300 group"
            >
              Learn more
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00C2C9] to-[#007D82] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start your project?
            </h2>
            <p className="text-gray-100 mb-8 text-xl">
              Let's discuss how we can help you achieve your goals with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contacts"
                  className="bg-white text-[#007D82] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
                >
                  Contact Our Team
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#007D82] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;