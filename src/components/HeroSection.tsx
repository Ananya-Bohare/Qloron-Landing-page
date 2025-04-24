import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { motion , useAnimation, useInView } from 'framer-motion';
import aboutImage from '../assets/about.avif';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import testimonial1 from '../assets/testimonial1.png';
import testimonial2 from '../assets/testimonial2.png';
import client1 from '../assets/client13.svg'
import client2 from '../assets/client1.svg'
import client3 from '../assets/client2.svg'
import client4 from '../assets/client3.svg'
import client5 from '../assets/client4.svg'
import client6 from '../assets/client5.svg'
import client7 from '../assets/client6.svg'
import client8 from '../assets/client7.svg'
import client9 from '../assets/client8.svg'
import client10 from '../assets/client9.svg'
import client11 from '../assets/client10.svg'
import client12 from '../assets/client11.svg'
import client13 from '../assets/client12.svg'
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import heroImage4 from '../assets/hero4.png';
import heroImage5 from '../assets/hero5.png';
import bgVideo from '../assets/bg1.mp4'

const clientLogos = [
    { src: client1 , height: 12},
    { src: client2 , height: 12},
    { src: client3 , height: 12},
    { src: client4 , height: 12},
    { src: client5 , height: 12},
    { src: client6 , height: 12},
    { src: client7 , height: 12},
    { src: client8 , height: 12},
    { src: client9 , height: 12},
    { src: client10 , height: 12},
    { src: client11 , height: 12},
    { src: client12 , height: 12},
    { src: client13 , height: 12},
];

const ClientLogosMarquee: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(30);

    useEffect(() => {
        // Calculate animation duration based on content width
        if (marqueeRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const marqueeWidth = marqueeRef.current.scrollWidth;
            const newDuration = Math.max(20, (marqueeWidth / containerWidth) * 15);
            setDuration(newDuration);
        }
    }, []);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted By Industry Leaders</h2>
                    <p className="text-gray-600">We've partnered with these organizations for many years</p>
                </div>

                {/* Marquee Container */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden py-6"
                    style={{ '--space-x': '4rem', '--fade-width': '6rem' } as React.CSSProperties}
                >
                    {/* Gradient Fade Effects */}
                    <div
                        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
                        style={{
                            width: 'var(--fade-width)',
                            background: 'linear-gradient(to right, white, transparent)'
                        }}
                    ></div>
                    <div
                        className="absolute inset-y-0 right-0 z-10 pointer-events-none"
                        style={{
                            width: 'var(--fade-width)',
                            background: 'linear-gradient(to left, white, transparent)'
                        }}
                    ></div>

                    {/* Marquee Content */}
                    <motion.div
                        ref={marqueeRef}
                        className="flex items-center"
                        style={{ gap: 'var(--space-x)' }}
                        animate={{ x: ['0%', '-100%'] }}
                        transition={{
                            duration: duration,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                    >
                        {[...clientLogos, ...clientLogos].map((logo, index) => (
                            <motion.div
                                key={`${logo}-${index}`}
                                className="flex-shrink-0"
                                whileHover={{ scale: 1.05, opacity: 1 }}
                                style={{ opacity: 0.7 }}
                            >
                                <img
                                    src={logo.src}
                                    className={`h-${logo.height} max-w-80`}
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-teal-600 font-medium">Some of these partnerships span over 5+ years</p>
                </div>
            </div>
        </div>
    );
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    // Ensure video plays and loops
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video autoplay prevented:", e));
    }
  }, [controls, isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="font-sans">
      {/* Hero Section with Video Background */}
      <section className="relative text-white py-32 md:py-40 overflow-hidden h-screen min-h-[600px]">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute min-w-full min-h-full w-auto h-auto object-cover"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <source src={bgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Darker gradient overlay for better text contrast */}
    <div className="absolute inset-0 bg-gradient-to-r from-teal-300/40 to-blue-700/40"></div>
    
    {/* Optional: Animated tech elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-white opacity-10 animate-float1"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 rounded-full bg-white opacity-10 animate-float3"></div>
    </div>
  </div>

  {/* Content container - same as before */}
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 h-full"
  >
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Innovative Technology Solutions
            </motion.h1>
            <motion.p 
              className="text-xl lg:text-2xl mb-8 max-w-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Qloron delivers cutting-edge software development and IT services to transform your business
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link
                to="/services"
                className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
              <Link
                to="/contacts"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-6 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="md:w-1/2 relative h-full"
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Image Carousel */}
            <div className="relative h-full w-full flex items-center">
              {heroImages.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt="Technology Solutions"
                  className="absolute inset-0 shadow-2xl object-cover w-full h-full max-h-[350px]"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{
                    scale: currentImageIndex === index ? 1 : 0.9,
                    opacity: currentImageIndex === index ? 1 : 0,
                    zIndex: currentImageIndex === index ? 10 : 0
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  whileHover={{ scale: currentImageIndex === index ? 1.02 : 0.9 }}
                />
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="absolute left-0 right-0 flex justify-center space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index ? 'bg-white w-6' : 'bg-white bg-opacity-30'}`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

            {/* About Section */}
            <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              variants={fadeInLeft}
            >
              <motion.img 
                src={aboutImage} 
                alt="About Qloron" 
                className="shadow-lg"
                whileHover={{ scale: 1.08 }}
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInRight}
            >
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-6"
                variants={itemVariants}
              >
                About Qloron Technology
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6"
                variants={itemVariants}
              >
                Qloron Technology is a premier software development company specializing in delivering innovative solutions to businesses worldwide.
                With our team of expert developers and cutting-edge technologies, we help companies transform their digital presence.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-8"
                variants={itemVariants}
              >
                Founded in 2012, we've grown to become a trusted partner for startups and enterprises alike, delivering scalable, secure,
                and high-performance software solutions.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link 
                  to="/about" 
                  className="text-teal-600 hover:text-teal-700 font-semibold flex items-center group"
                >
                  Learn more about us
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { img: service1, title: "Custom Software Development", desc: "Tailored solutions designed to meet your specific business requirements and workflows." },
              { img: service2, title: "Web & Mobile Development", desc: "Responsive websites and native mobile apps that engage users and drive business growth." },
              { img: service3, title: "Cloud Solutions", desc: "Scalable cloud infrastructure and services to optimize your operations and reduce costs." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center group"
                  >
                    Learn more
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link
              to="/services"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

           

            {/* Long-Term Clients Marquee */}
            <ClientLogosMarquee/>

            {/* Testimonials */}
            <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Trusted by businesses across various industries</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { 
                img: testimonial1, 
                name: "John Smith", 
                position: "CEO, TechCorp", 
                quote: "Qloron's team delivered our project ahead of schedule with exceptional quality. Their technical expertise and communication throughout the process were outstanding." 
              },
              { 
                img: testimonial2, 
                name: "Sarah Johnson", 
                position: "CTO, InnovateCo", 
                quote: "Working with Qloron has been a game-changer for our business. They understood our requirements perfectly and implemented solutions that exceeded our expectations." 
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-center mb-6">
                  <motion.img 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let's discuss how Qloron can help you achieve your technology goals.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Link
              to="/contacts"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Our Services
            </Link>
          </motion.div>
        </motion.div>
      </section>
        </div>
    );
};

export default Home;
