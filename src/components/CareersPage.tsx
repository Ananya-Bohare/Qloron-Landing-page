import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jobOpenings, benefits, Benefit } from './Data';
import heroBg from '../assets/Hero12.jpg';

// Define types for your data
type JobOpening = {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements?: string[];
};

type Filters = {
  search: string;
  department: string;
  location: string;
  type: string;
};

const CareersPage = () => {
  const [filters, setFilters] = useState<Filters>({
    search: '',
    department: 'all',
    location: 'all',
    type: 'all'
  });

  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  // Filter jobs based on active filters
  const filteredJobs = jobOpenings.filter((job: JobOpening) => {
    const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                          job.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesDepartment = filters.department === 'all' || job.department === filters.department;
    const matchesLocation = filters.location === 'all' || job.location.includes(filters.location);
    const matchesType = filters.type === 'all' || job.type === filters.type;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  // Get unique values for filter dropdowns
  const departments = ['all', ...new Set(jobOpenings.map((job: JobOpening) => job.department))];
  const locations = ['all', ...new Set(jobOpenings.flatMap((job: JobOpening) =>
    job.location.includes('(')
      ? [job.location.split('(')[0].trim(), 'Remote']
      : [job.location]
  ))];
  const types = ['all', ...new Set(jobOpenings.map((job: JobOpening) => job.type))];

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleJobSelect = (job: JobOpening) => {
    setSelectedJob(job);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (since it's the only step now)
    console.log('Application submitted:', Object.fromEntries(new FormData(e.target as HTMLFormElement)));
    setSelectedJob(null); // Close the modal after submission
    alert('Application Submitted! (This is a placeholder)');
  };

  return (
    <div className="font-sans bg-[#121212]">
      {/* Hero Section */}
      <section className="relative text-white h-hero min-h-hero-mobile max-h-hero-desktop overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Careers background"
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <span className="px-4 py-1 bg-cyan-600/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30">
              We're Hiring
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Build Your <span className="text-[#00C2C9]">Future</span> With Us
          </h1>

          <p className="text-xl md:text-1xl max-w-1xl mx-auto text-white mb-10">
            Join Qloron Technology and work on challenging projects with cutting-edge technologies
          </p>

          {/* Animated CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <a
              href="#open-positions"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-100 text-gray-900 font-medium rounded-lg transition-all flex items-center gap-2 "
            >
              View Open Positions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#culture"
              className="px-6 py-2 bg-transparent border-2 border-cyan-300 text-cyan-100 hover:bg-cyan-400/10 font-medium rounded-lg transition-all flex items-center gap-2"
            >
              Our Culture
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-300/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -3, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-teal-400/10 rounded-full blur-xl"
        />
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#007D82] mb-6">Why Choose a Career at Qloron?</h2> {/* More engaging title */}
            <p className="text-gray-700 max-w-3xl mx-auto text-lg"> {/* Improved text color and size */}
              Join a team that's not just building software, but shaping the future of technology and fostering a culture of growth and innovation.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"> {/* Increased gap for better spacing */}
            {benefits.map((benefit: Benefit, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{ duration: 0, }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 194, 201, 0.2)" }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                <div className="flex justify-center items-center h-12 w-12 mx-auto mb-6 rounded-full bg-[#E0F7FA] text-[#007D82]"> {/* Circular icon background */}
                  {React.createElement(benefit.icon, { className: `text-2xl` })} {/* Consistent icon size */}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3> {/* Darker heading */}
                <p className="text-gray-600 text-sm">{benefit.description}</p> {/* Slightly smaller description */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-100"> {/* Changed background to a lighter gray */}
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#007D82] mb-4">Explore Current Opportunities</h2> {/* More inviting title */}
            <p className="text-gray-700 max-w-3xl mx-auto text-lg"> {/* Improved text color and size */}
              Discover your next career move with our dynamic and innovative teams.
            </p>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-600 mb-1"> {/* Darker label */}
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Job title or keywords"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                />
              </div>

              {/* Department Filter */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-600 mb-1"> {/* Darker label */}
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={filters.department}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                >
                  {departments.map((dept: string) => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Filter */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-600 mb-1"> {/* Darker label */}
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                >
                  {locations.map((loc: string) => (
                    <option key={loc} value={loc}>
                      {loc === 'all' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Job Type Filter */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-600 mb-1"> {/* Darker label */}
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                >
                  {types.map((type: string) => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job: JobOpening) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:bg-cyan-200 transition-colors duration-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3> {/* Darker job title */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">{job.type}</span> {/* Lighter tag backgrounds */}
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{job.location}</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">{job.department}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleJobSelect(job)}
                      className="mt-4 md:mt-0 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="mt-4 text-gray-700">{job.description}</p> {/* Darker description */}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-200"
              >
                <h3 className="text-xl font-medium text-gray-700">No jobs match your filters</h3> {/* Darker message */}
                <p className="text-gray-600 mt-2">Try adjusting your search criteria</p> {/* Slightly darker suggestion */}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6 z-50"> {/* Slightly darker backdrop with more padding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Job Details */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{selectedJob.title}</h2> {/* Darker title */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">{selectedJob.type}</span> {/* Lighter tag backgrounds */}
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">{selectedJob.location}</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">{selectedJob.department}</span>
              </div>
              <div className="prose prose-teal max-w-none text-gray-700"> {/* Darker prose text */}
                <p className="mb-4">{selectedJob.description}</p>
                {selectedJob.requirements && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3> {/* Darker heading */}
                    <ul className="list-disc pl-5 mb-6 text-gray-700"> {/* Darker list text */}
                      {selectedJob.requirements.map((req: string, i: number) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Application Form */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Application</h2> {/* Darker title for form */}
              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> 
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800" 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800" 
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800" 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
                    Resume/CV *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800"
                  />
                  <p className="mt-1 text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                </div>

                <div>
                  <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1"> {/* Darker label */}
                    Cover Letter
                  </label>
                  <textarea
                    id="cover-letter"
                    name="cover-letter"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-gray-50 text-gray-800" 
                  ></textarea>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors" 
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        
      )}
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
            Don't See Your Perfect Role?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            We're always looking for talented individuals. Send us your resume!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Submit General Application
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;