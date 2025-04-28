import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import emailjs from 'emailjs-com';
import heroBg from '../assets/Hero11.jpg';

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "bohareananya3@gmail.com",
          subject: formData.subject,
          message: formData.message
        }
      );

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-[#007D82]" />,
      title: "Phone",
      info: "+91 7020038436",
      action: "tel:+917020038436"
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#007D82]" />,
      title: "Email",
      info: "info@qloron.com",
      action: "mailto:info@qloron.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#007D82]" />,
      title: "Office",
      info: "Qloron Pvt Ltd, 7th floor, Innov8 coworking space, Pranava Business park, Kothaguda, Hyderabad, Telangana 500084",
      action: "https://maps.google.com"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://linkedin.com/company/qloron"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      url: "https://twitter.com/qlorontech"
    },
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/qloron"
    },
    {
      icon: <SiGmail className="text-xl" />,
      url: "mailto:contact@qloron.com"
    }
  ];

  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <section className="relative text-white h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Contact background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#007D82]/80 to-[#00C2C9]/50"></div>
        </div> 

        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Let's <span className="text-cyan-300">Connect</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white mb-10"
          >
            We'd love to hear from you. Reach out to start your next project.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <motion.a 
              href="#contact-form" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#00C2C9] hover:bg-[#0099A0] text-white font-medium rounded-lg flex items-center gap-2 shadow-lg hover:shadow-teal-500/30"
            >
              <FaEnvelope />
              Send Message
            </motion.a>
            <motion.a 
              href="tel:+917020038436" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg flex items-center gap-2 hover:shadow-lg"
            >
              <FaPhone />
              Call Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
              <p className="text-gray-600 max-w-lg">
                Have questions or want to discuss a project? We're here to help and would love to hear from you.
              </p>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ x: 5 }}
                    href={method.action}
                    className="flex items-start gap-4 group p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#00C2C9]/50"
                  >
                    <div className="p-3 bg-[#00C2C9]/10 text-[#007D82] rounded-lg group-hover:bg-[#00C2C9] group-hover:text-white transition-colors">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#007D82] transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-gray-600">{method.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-[#007D82] rounded-full shadow-sm hover:bg-[#00C2C9] hover:text-white transition-colors border border-gray-200"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
              id="contact-form"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200"
                >
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </motion.div>
              )}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200"
                >
                  {submitError}
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00C2C9] focus:border-[#00C2C9] text-gray-800 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00C2C9] focus:border-[#00C2C9] text-gray-800 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00C2C9] focus:border-[#00C2C9] text-gray-800 transition"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#00C2C9] focus:border-[#00C2C9] text-gray-800 transition"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-colors ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-[#00C2C9] to-[#007D82] hover:from-[#0099A0] hover:to-[#006266] shadow-md'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
          >
            <div className="h-96 w-full bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4149773.739809196!2d76.21803021127427!3d19.097822644185662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91612ab4721d%3A0x5b9ca42836fc8c3f!2sQloron%20Technology!5e0!3m2!1sen!2sin!4v1744890687846!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;