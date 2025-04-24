import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { jobOpenings, benefits, Benefit } from './Data';


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

  const [applicationStep, setApplicationStep] = useState<number>(0);
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
    setApplicationStep(1);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setApplicationStep(2); // Move to success step
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your <span className="text-teal-300">Career</span> With Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Join Qloron Technology and work on challenging projects with cutting-edge technologies
          </p>
        </motion.div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join Qloron?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building more than software - we're building careers and fostering innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {benefits.map((benefit: Benefit, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-50 p-8 rounded-xl text-center"
    >
      <div className="flex justify-center mb-4">
        {/* Render the icon component with its className */}
        {React.createElement(benefit.icon, { className: benefit.className })}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
      <p className="text-gray-600">{benefit.description}</p>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-md mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={filters.search}
                  onChange={handleFilterChange}
                  placeholder="Job title or keywords"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              
              {/* Department Filter */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={filters.department}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">{job.type}</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{job.location}</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{job.department}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleJobSelect(job)}
                      className="mt-4 md:mt-0 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                  <p className="mt-4 text-gray-600">{job.description}</p>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                <h3 className="text-xl font-medium text-gray-800">No jobs match your filters</h3>
                <p className="text-gray-600 mt-2">Try adjusting your search criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Step 1: Job Details */}
            {applicationStep === 0 && (
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedJob.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">{selectedJob.type}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{selectedJob.location}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{selectedJob.department}</span>
                </div>
                <div className="prose prose-teal max-w-none">
                  <p className="text-gray-600 mb-4">{selectedJob.description}</p>
                  {selectedJob.requirements && (
                    <>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
                      <ul className="list-disc pl-5 mb-6">
                        {selectedJob.requirements.map((req: string, i: number) => (
                          <li key={i} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="flex justify-end gap-4 mt-8">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setApplicationStep(1)}
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Continue to Apply
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Application Form */}
            {applicationStep === 1 && (
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <button 
                    onClick={() => setApplicationStep(0)}
                    className="mr-4 text-gray-500 hover:text-teal-600"
                  >
                    ← Back
                  </button>
                  <h2 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h2>
                </div>
                
                <div className="mb-6">
                  <div className="flex mb-2">
                    <div className="w-1/3 h-1 bg-teal-600 rounded-l-full"></div>
                    <div className="w-1/3 h-1 bg-teal-600"></div>
                    <div className="w-1/3 h-1 bg-gray-200 rounded-r-full"></div>
                  </div>
                  <p className="text-sm text-gray-500">Step 1 of 2: Personal Information</p>
                </div>

                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn Profile
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <p className="mt-1 text-sm text-gray-500">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>

                  <div>
                    <label htmlFor="cover-letter" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter
                    </label>
                    <textarea
                      id="cover-letter"
                      name="cover-letter"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    ></textarea>
                  </div>

                  <div className="flex justify-end gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setApplicationStep(0)}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Application Success */}
            {applicationStep === 2 && (
              <div className="p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for applying to {selectedJob.title}. We've received your application and will review it shortly.
                </p>
                <button
                  onClick={() => {
                    setSelectedJob(null);
                    setApplicationStep(0);
                  }}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
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