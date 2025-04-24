import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Service icons (you'll need to replace these with your actual icons)
import webDevIcon from '../assets/web-development.avif';
import mobileDevIcon from '../assets/mobile-development.webp';
import aiIcon from '../assets/ai.webp';
import cloudIcon from '../assets/cloud.avif';
import iotIcon from '../assets/iot.webp';
import consultingIcon from '../assets/consulting.webp';
import uiuxIcon from '../assets/uiux.webp';
import qaIcon from '../assets/qa.webp';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business needs, built with cutting-edge technologies for optimal performance.",
      icon: webDevIcon,
      link: "/services/custom-software"
    },
    {
      title: "Web Application Development",
      description: "Responsive, scalable, and secure web applications that deliver exceptional user experiences across all devices.",
      icon: webDevIcon,
      link: "/services/web-apps"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.",
      icon: mobileDevIcon,
      link: "/services/mobile-apps"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence to automate processes, gain insights, and enhance decision-making.",
      icon: aiIcon,
      link: "/services/ai-ml"
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, management, and optimization to maximize your cloud investment.",
      icon: cloudIcon,
      link: "/services/cloud"
    },
    {
      title: "IoT Solutions",
      description: "End-to-end Internet of Things solutions that connect devices, collect data, and enable smart operations.",
      icon: iotIcon,
      link: "/services/iot"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user experience at the forefront to maximize engagement and satisfaction.",
      icon: uiuxIcon,
      link: "/services/uiux"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing services to ensure your software is reliable, secure, and performs flawlessly.",
      icon: qaIcon,
      link: "/services/qa"
    },
    {
      title: "IT Consulting",
      description: "Expert guidance to align your technology strategy with business goals and drive digital transformation.",
      icon: consultingIcon,
      link: "/services/consulting"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Innovative technology solutions tailored to your business needs
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Qloron Technology provides comprehensive digital solutions to help businesses thrive in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-2">
                  <div className="flex items-center mb-4">
                    <img src={service.icon} alt={service.title} className="h-40 w-60 mr-4" />
                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to transform your business?</h2>
            <p className="text-gray-600 mb-8 text-xl">
              Let's discuss how Qloron Technology can help you achieve your goals with our cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contacts" 
                className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/portfolio" 
                className="px-8 py-3 bg-white text-teal-600 font-medium rounded-lg border border-teal-600 hover:bg-gray-50 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;