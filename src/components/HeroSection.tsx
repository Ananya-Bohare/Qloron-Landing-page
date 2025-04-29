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
import bgVideo from '../assets/bg1.mp4'
import {StarIcon, QuoteIcon, ArrowRightIcon} from 'lucide-react';
const clientLogos = [
    { src: client1 , height: 14},
    { src: client2 , height: 14},
    { src: client3 , height: 14},
    { src: client4 , height: 14},
    { src: client5 , height: 14},
    { src: client6 , height: 14},
    { src: client7 , height: 14},
    { src: client8 , height: 14},
    { src: client9 , height: 14},
    { src: client10 , height: 14},
    { src: client11 , height: 14},
    { src: client12 , height: 14},
    { src: client13 , height: 16},
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
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-[#007D82] mb-4">Trusted By Industry Leaders</h2>
                    <p className="text-gray-700">We've partnered with these organizations for many years</p>
                </div>

                {/* Marquee Container */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden py-6"
                    style={{ '--space-x': '6rem', '--fade-width': '10rem' } as React.CSSProperties}
                >
                    {/* Gradient Fade Effects */}
                    <div
                        className="absolute inset-y-0 left-0 z-10 pointer-events-none"
                        style={{
                            width: 'var(--fade-width)',
                            background: 'linear-gradient(to right)'
                        }}
                    ></div>
                    <div
                        className="absolute inset-y-0 right-0 z-10 pointer-events-none"
                        style={{
                            width: 'var(--fade-width)',
                            background: 'linear-gradient(to left)'
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
                                whileHover={{ scale: 2.05 }}
                                style={{ opacity: 0.7 }}
                            >
                                <img
                                    src={logo.src}
                                    className={`h-${logo.height} max-w-100`}
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-cyan-600 font-medium">Some of these partnerships span over 5+ years</p>
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

 

  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section with Video Background */}
      <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">
  {/* Video Background */}
  <div className="absolute inset-0 z-0">
    <video
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
    {/* Dark overlay with teal accent */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#007D82]/80 via-[#121212]/60 to-[#00C2C9]/50"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-6xl font-bold mb-6"
    >
      Innovative <span className="text-[#00C2C9]">Technology</span> Solutions
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10"
    >
      Qloron delivers cutting-edge software development and IT services to transform your business
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="flex flex-wrap gap-4 justify-center"
    >
      <Link
        to="/services"
        className="px-8 py-3 bg-[#00C2C9] hover:bg-[#0099A0] text-white font-medium rounded-lg transition-colors inline-flex items-center shadow-lg hover:shadow-teal-500/20"
      >
        Our Services
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      <Link
        to="/contacts"
        className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors inline-flex items-center"
      >
        Contact Us
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </Link>
    </motion.div>
  </div>

  {/* Subtle floating elements */}
  <motion.div
    animate={{
      x: [0, 20, 0],
      y: [0, -20, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#7CFFCB] opacity-20 blur-sm"
  />
  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 20, 0],
      rotate: [0, -3, 0]
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className="absolute bottom-1/3 right-1/4 w-10 h-10 rounded-full bg-[#00C2C9] opacity-20 blur-sm"
  />
</section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              variants={fadeInLeft}
            >
              <motion.img 
                src={aboutImage} 
                alt="About Qloron" 
                className="shadow-lg rounded-lg border-2 border-[#2D2D2D]"
                whileHover={{ scale: 1.03 }}
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              variants={fadeInRight}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6 text-[#007D82]"
                variants={itemVariants}
              >
                About Qloron Technology
              </motion.h2>
              <motion.p 
                className="text-gray-800 mb-6"
                variants={itemVariants}
              >
                Qloron Technology is a premier software development company specializing in delivering innovative solutions to businesses worldwide.
                With our team of expert developers and cutting-edge technologies, we help companies transform their digital presence.
              </motion.p>
              <motion.p 
                className="text-gray-800 mb-8"
                variants={itemVariants}
              >
                Founded in 2012, we've grown to become a trusted partner for startups and enterprises alike, delivering scalable, secure,
                and high-performance software solutions.
              </motion.p>
              <motion.div variants={itemVariants}>
                <Link 
                  to="/about" 
                  className="text-cyan-700 hover:text-[#00C2C9] font-semibold flex items-center group"
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
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl text-[#007D82] font-bold mb-4">Our Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Comprehensive IT solutions tailored to your business needs</p>
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 border border-[#2D2D2D]"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl text-cyan-700 font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="text-cyan-700 hover:text-[#00C2C9] font-medium inline-flex items-center group"
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
              className="bg-[#007D82] hover:bg-[#0099A0] text-white px-8 py-3 rounded-lg font-semibold inline-block transition duration-300 transform hover:scale-105"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Long-Term Clients Marquee */}
      <ClientLogosMarquee/>

      {/* Testimonials */}
<section className="py-20 bg-[#F8FAFC]">
  <div className="container mx-auto px-4">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-[#007D82] mb-4">Client Success Stories</h2>
      <p className="text-[#4B5563] max-w-2xl mx-auto text-lg">Hear from businesses who've transformed with our solutions</p>
    </motion.div>
    
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-10"
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
          quote: "Qloron's team delivered our project ahead of schedule with exceptional quality. Their technical expertise and communication throughout the process were outstanding.",
          rating: 5
        },
        { 
          img: testimonial2, 
          name: "Sarah Johnson", 
          position: "CTO, InnovateCo", 
          quote: "Working with Qloron has been a game-changer for our business. They understood our requirements perfectly and implemented solutions that exceeded our expectations.",
          rating: 5
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          className="bg-[#007D82] p-10 rounded-xl shadow-lg border border-[#374151] hover:bg-[#1f898a] transition-all"
          variants={itemVariants}
          whileHover={{ 
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 194, 201, 0.2), 0 10px 10px -5px rgba(0, 194, 201, 0.1)"
          }}
        >
          <div className="flex items-start mb-6">
            <motion.img 
              src={testimonial.img} 
              alt={testimonial.name} 
              className="w-14 h-14 rounded-full mr-5 object-cover border-2 border-[#1d888c]"
              whileHover={{ scale: 1.05 }}
            />
            <div>
              <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
              <p className="text-gray-100">{testimonial.position}</p>
              <div className="flex mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-[#FBBF24]" />
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <QuoteIcon className="absolute -top-6 -left-2 text-[#00C2C9]/50 h-16 w-16" />
            <p className="text-white text-lg relative z-10">"{testimonial.quote}"</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    {/* View More Button */}
    <motion.div
      className="text-center mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <Link
        to="/testimonials"
        className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#007D82] hover:bg-[#006670] transition-colors shadow-sm"
      >
        Read More Testimonials
        <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" />
      </Link>
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007D82]  text-white">
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
              className="bg-white text-[#121212] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-[#121212] px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
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
