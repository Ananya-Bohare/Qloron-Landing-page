import { useState } from 'react';
import { motion } from 'framer-motion';
import { developerTeams, hiringModels, techSkills, DeveloperTeam, HiringModel } from './Data';
import heroBg from '../assets/Hero13.jpg';
// Example icon imports (replace with your actual icon components)
// import { IconVetting } from './icons/VettingIcon';

const HireDevelopersPage = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else if (selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form Data:', formData);
    console.log('Selected Skills:', selectedSkills);
    alert('Request Submitted! (This is a placeholder)');
    setFormData({ name: '', email: '', company: '', message: '' });
    setSelectedSkills([]);
  };

  return (
    <div className="font-sans text-gray-300">
      {/* Hero Section */}
      <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">

        {/* Background image with subtle overlay */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Hire developers background"
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.7)' }} // Slightly darken the image
          />
          <div className="absolute inset-0 bg-teal-950/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-md" // Larger text, text shadow
          >
            Hire <span className="text-[#00C2C9]">Top Developers</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8" // Lighter text
          >
            Scale your team with our vetted developers and dedicated engineering teams
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <a
              href="#developers"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-md" // More padding, shadow
            >
              Browse Developers
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-teal-400 hover:border-cyan-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors" // More padding
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Hire From Us */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Hire Qloron Developers?</h2> {/* Darker heading */}
      <p className="text-gray-600 max-w-2xl mx-auto"> {/* Slightly darker paragraph */}
        We provide top-tier talent that integrates seamlessly with your workflows
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl shadow-md border border-gray-200" 
      >
        {/* Example Icon (replace with your actual icon component) */}
        <div className="mb-4 text-teal-500 text-2xl">
          {/* <IconVetting /> */}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Rigorous Vetting</h3> {/* Darker heading */}
        <p className="text-gray-600">
          Only 3% of applicants pass our technical and communication assessments
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
      >
        <div className="mb-4 text-teal-500 text-2xl">
          {/* Add your icon here */}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Time Zone Aligned</h3>
        <p className="text-gray-600">
          Developers available in your timezone for real-time collaboration
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
      >
        <div className="mb-4 text-teal-500 text-2xl">
          {/* Add your icon here */}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Flexible Engagement</h3>
        <p className="text-gray-600">
          Scale up or down as needed with no long-term commitments
        </p>
      </motion.div>
    </div>
  </div>
</section>

      {/* Developer Teams */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Developer Specializations</h2> {/* Darker heading */}
      <p className="text-gray-600 max-w-2xl mx-auto"> {/* Slightly darker paragraph */}
        Hire individuals or complete teams across all major technologies
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {developerTeams.map((team: DeveloperTeam, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }} // Subtle shadow on hover
          className="bg-white p-8 rounded-xl shadow-md transition-shadow border border-gray-200 hover:border-teal-300" // Light card, border, teal hover
        >
          <div className="flex items-center mb-4">
            <div className="p-3 bg-teal-100 rounded-lg mr-4 text-teal-500 text-xl"> {/* Teal background for icon */}
              <team.icon className={team.className} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{team.title}</h3> {/* Darker title */}
          </div>
          <p className="text-gray-600 mb-4">{team.description}</p> {/* Slightly darker description */}
          <div className="flex flex-wrap gap-2">
            {team.skills.map((skill: string, skillIndex: number) => (
              <span key={skillIndex} className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full"> {/* Cyan skill tags */}
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Hiring Models */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Flexible Hiring Models</h2> {/* Darker heading */}
      <p className="text-gray-600 max-w-2xl mx-auto"> {/* Slightly darker paragraph */}
        Choose the engagement model that works best for your needs
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {hiringModels.map((model: HiringModel, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl border border-gray-200 hover:border-cyan-300 transition-colors shadow-md" // Light card, border, cyan hover
        >
          <h3 className="text-xl font-bold text-gray-800 mb-3">{model.title}</h3> {/* Darker title */}
          <p className="text-gray-600 mb-4">{model.description}</p> {/* Slightly darker description */}
          <div className="text-sm text-teal-600 font-semibold"> {/* More prominent "Best for" */}
            Best for: <span className="text-teal-700">{model.bestFor}</span> {/* Darker teal for value */}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* 4 Easy Steps Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Hire Developers in 4 Easy Steps</h2> {/* Darker heading */}
      <p className="text-gray-600 max-w-2xl mx-auto"> {/* Slightly darker paragraph */}
        Our streamlined process gets you the talent you need quickly and efficiently
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Fill the Form",
          description: "Tell us in brief about your ideas and needs. Don't worry it's secure and confidential."
        },
        {
          title: "Discuss Requirement",
          description: "Let us present the benefits of our Employee model while we understand your project requirements."
        },
        {
          title: "Accept Our Offer",
          description: "Meet the eligible developers and sign the agreement with deliverables to ensure transparent collaboration."
        },
        {
          title: "Onboard Your Team",
          description: "Set your success metrics, onboard our developers to your organization, and begin your project."
        }
      ].map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-xl border-l-4 border-teal-500 shadow-md" // Light card, teal border
        >
          <div className="flex items-start mb-4">
            <motion.div // Added motion to the number circle
              className="flex items-center justify-center bg-teal-500 text-white rounded-full w-8 h-8 mr-4"
              whileHover={{ scale: 1.1 }}
            >
              {index + 1}
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800">{step.title}</h3> {/* Darker title */}
          </div>
          <p className="text-gray-600 pl-12">{step.description}</p> {/* Slightly darker description */}
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Hiring Form Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-6 max-w-4xl">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Tell Us About Your Project</h2> {/* Darker heading */}
      <p className="text-gray-600"> {/* Slightly darker paragraph */}
        We'll match you with the perfect developers for your needs
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-md border border-gray-200" // Light background for form
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800" // Light input fields
              required
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
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Required Skills (Select up to 5)
          </label>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill) => (
              <motion.button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedSkills.includes(skill)
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } ${selectedSkills.length >= 5 && !selectedSkills.includes(skill) ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={selectedSkills.length >= 5 && !selectedSkills.includes(skill)}
              >
                {skill}
              </motion.button>
            ))}
          </div>
          {selectedSkills.length >= 5 && (
            <p className="text-sm text-yellow-500 mt-1">You can select a maximum of 5 skills.</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
            placeholder="Tell us about your project, timeline, and specific requirements..."
          ></textarea>
        </div>

        <div className="pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-medium hover:bg-teal-700 transition-colors shadow-md"
          >
            Submit Request
          </motion.button>
        </div>
      </form>
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00C2C9] to-[#007D82] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Hire Top Developers?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Tell us about your project and we'll match you with the perfect team
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md"
          >
            Request Developers
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default HireDevelopersPage;