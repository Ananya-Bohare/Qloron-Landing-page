import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaReact, FaJava, FaNodeJs, FaDatabase,
  FaAws, FaDocker, FaGitAlt, FaCode,
  FaAngular, FaVuejs, FaPython
} from 'react-icons/fa';
import {
  SiTypescript, SiSpring, SiPostgresql,
  SiMongodb, SiKubernetes, SiGraphql,
  SiNextdotjs, SiTailwindcss, SiRedux,
  SiNestjs, SiExpress, SiFirebase
} from 'react-icons/si';

const TechnologiesPage: React.FC = () => {
    const techCategories = [
        {
          title: "Frontend Power",
          icon: <FaReact className="text-3xl text-blue-500" />, // added color
          color: "from-cyan-400 to-blue-500",
          technologies: [
            { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-black" /> },
            { name: "Angular", icon: <FaAngular className="text-2xl text-red-500" /> },
            { name: "Vue", icon: <FaVuejs className="text-2xl text-green-500" /> },
            { name: "Tailwind", icon: <SiTailwindcss className="text-2xl text-cyan-400" /> },
            { name: "Redux", icon: <SiRedux className="text-2xl text-purple-500" /> }
          ]
        },
        {
          title: "Backend Mastery",
          icon: <FaNodeJs className="text-3xl text-green-600" />,
          color: "from-purple-400 to-indigo-500",
          technologies: [
            { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-600" /> },
            { name: "Java/Spring", icon: <SiSpring className="text-2xl text-green-600" /> },
            { name: "NestJS", icon: <SiNestjs className="text-2xl text-red-500" /> },
            { name: "Express", icon: <SiExpress className="text-2xl text-gray-800" /> },
            { name: "Python", icon: <FaPython className="text-2xl text-blue-400" /> },
            { name: "GraphQL", icon: <SiGraphql className="text-2xl text-pink-600" /> }
          ]
        },
        {
          title: "Data & Storage",
          icon: <FaDatabase className="text-3xl text-amber-600" />,
          color: "from-amber-400 to-orange-500",
          technologies: [
            { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-700" /> },
            { name: "Firebase", icon: <SiFirebase className="text-2xl text-yellow-500" /> },
            { name: "MySQL", icon: <FaDatabase className="text-2xl text-blue-500" /> }
          ]
        },
        {
          title: "DevOps & Cloud",
          icon: <FaAws className="text-3xl text-orange-500" />,
          color: "from-emerald-400 to-teal-500",
          technologies: [
            { name: "AWS", icon: <FaAws className="text-2xl text-orange-500" /> },
            { name: "Docker", icon: <FaDocker className="text-2xl text-blue-400" /> },
            { name: "Kubernetes", icon: <SiKubernetes className="text-2xl text-blue-500" /> },
            { name: "CI/CD", icon: <FaGitAlt className="text-2xl text-red-500" /> }
          ]
        }
      ];
      

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
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-teal-300">Tech Stack</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            The powerful technologies we use to build exceptional digital products
          </p>
        </div>
      </section>

      {/* Technology Categories - Modern Design */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Technologies We Love</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From frontend flair to backend powerhouses — here's our tech toolbox
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {techCategories.map((category, index) => (
              <div 
                key={index} 
                className="rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center justify-center h-16 w-16 backdrop-blur-sm mx-auto">
                    {React.cloneElement(category.icon, { className: "text-6xl text-white" })}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mt-4">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex flex-col items-center p-3 bg-gray-50 hover:bg-gray-100 transition rounded-lg w-20"
                      >
                        {React.cloneElement(tech.icon, { className: `${tech.icon.props.className} text-2xl mb-1` })}
                        <span className="text-xs font-medium text-gray-700 text-center">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Build</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our development philosophy ensures quality at every stage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Modular Architecture",
                description: "Building with reusable components for scalability",
                icon: <FaCode className="text-4xl text-teal-500" />
              },
              {
                title: "Agile Process",
                description: "Iterative development with continuous feedback",
                icon: <FaGitAlt className="text-4xl text-blue-500" />
              },
              {
                title: "Quality Focus",
                description: "Rigorous testing and code reviews",
                icon: <FaAws className="text-4xl text-amber-500" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can leverage these technologies for your project
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contacts"
              className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologiesPage;