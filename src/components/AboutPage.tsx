import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import teamPhoto from '../assets/about-team.jpg';
import tech1 from '../assets/tech1.jpg'
import tech2 from '../assets/tech2.webp'
import tech3 from '../assets/tech3.webp'
import tech4 from '../assets/tech4.jpg'
import milestoneGraphic from '../assets/about-milestones.png';

// Animation variants
const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Ensure smooth scrolling to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            About Qloron Technology
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Pioneering digital transformation through innovation and expertise
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src={teamPhoto} 
                  alt="Qloron Team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-teal-500/10"></div>
              </div>
            </motion.div>

            <motion.div className="lg:w-1/2" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2012, Qloron Technology began as a small team of passionate developers with a vision to revolutionize how businesses leverage technology.
                </p>
                <p>
                  What started as a boutique software development firm has now grown into a full-service technology partner serving clients across 15+ countries.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, with each milestone reinforcing our commitment to delivering exceptional value to our clients.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "We push boundaries to create solutions that set new standards in the industry.",
                icon: "💡"
              },
              {
                title: "Integrity",
                description: "We build trust through transparency, honesty, and ethical business practices.",
                icon: "🤝"
              },
              {
                title: "Excellence",
                description: "We're committed to delivering superior quality in every project we undertake.",
                icon: "🏆"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-12"
          >
            <div className="lg:w-1/2">
              <img 
                src={milestoneGraphic} 
                alt="Company Milestones" 
                className="w-full h-auto"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Journey
              </h2>
              
              <div className="space-y-8">
                {[
                  { year: "2012", event: "Founded in Hyderabad with 5 team members" },
                  { year: "2015", event: "Expanded to international markets" },
                  { year: "2018", event: "Reached 100+ employees" },
                  { year: "2021", event: "Opened new development centers" },
                  { year: "2023", event: "Serving 150+ global clients" }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700 pt-2">{milestone.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The visionary minds driving Qloron's success
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Founder",
                bio: "20+ years in software architecture and business strategy",
                img: tech1
              },
              {
                name: "Priya Sharma",
                role: "CTO",
                bio: "Expert in AI/ML and large-scale system design",
                img: tech2
              },
              {
                name: "Amit Patel",
                role: "VP of Engineering",
                bio: "Specializes in cloud-native solutions",
                img: tech3
              },
              {
                name: "Neha Gupta",
                role: "Head of Product",
                bio: "User-centric product development expert",
                img: tech4
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's discuss how Qloron can help transform your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
            >
              Join Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;