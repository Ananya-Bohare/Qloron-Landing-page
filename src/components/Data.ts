import { FaCode, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud, FaUsersCog } from 'react-icons/fa';
import { IconType } from 'react-icons';
export const jobOpenings = [
    {
      id: 1,
      title: "Senior React Developer",
      type: "Full-time",
      location: "Hyderabad (Remote Available)",
      department: "Frontend Development",
      description: "Lead our React projects and mentor junior developers while building cutting-edge web applications.",
      requirements: [
        "5+ years of React experience",
        "Strong TypeScript skills",
        "Experience with state management (e.g., Redux, Zustand, Context API)",
        "Familiarity with testing frameworks (e.g., Jest, React Testing Library)"
      ]
    },
    {
      id: 2,
      title: "Java Backend Engineer",
      type: "Full-time",
      location: "Hyderabad",
      department: "Backend Development",
      description: "Design and implement scalable Java solutions for enterprise clients using Spring Boot.",
      requirements: [
        "5+ years of Java development experience",
        "Extensive experience with Spring Boot framework",
        "Strong understanding of database technologies (e.g., PostgreSQL, MySQL)",
        "Experience with RESTful API design and development"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      type: "Contract",
      location: "Remote",
      department: "Operations",
      description: "Implement CI/CD pipelines and manage cloud infrastructure on AWS and Azure.",
      requirements: [
        "3+ years of experience with AWS and/or Azure cloud platforms",
        "Proficiency in CI/CD tools (e.g., Jenkins, GitLab CI, CircleCI)",
        "Strong scripting skills (e.g., Bash, Python, PowerShell)",
        "Experience with containerization technologies (Docker, Kubernetes)"
      ]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      type: "Full-time",
      location: "Hyderabad",
      department: "Design",
      description: "Create beautiful, intuitive interfaces for our clients' digital products.",
      requirements: [
        "5+ years of proven experience in UI/UX design",
        "Mastery of design and prototyping tools (e.g., Figma, Sketch, Adobe XD)",
        "Deep understanding of user-centered design principles and methodologies",
        "Experience with user research and usability testing"
      ]
    },
    {
      id: 5,
      title: "Frontend Developer (Angular)",
      type: "Full-time",
      location: "Nagpur (Remote Available)",
      department: "Frontend Development",
      description: "Develop and maintain user interfaces using the Angular framework.",
      requirements: [
        "3+ years of Angular experience (version 2+)",
        "Solid understanding of HTML, CSS, and JavaScript/TypeScript",
        "Experience with Angular CLI and component-based architecture",
        "Familiarity with reactive programming (RxJS)"
      ]
    },
    {
      id: 6,
      title: "Data Scientist",
      type: "Full-time",
      location: "Bangalore",
      department: "Data Science",
      description: "Analyze large datasets to extract meaningful insights and build predictive models.",
      requirements: [
        "Master's or PhD in a quantitative field (e.g., Statistics, Computer Science, Mathematics)",
        "Strong programming skills in Python or R",
        "Experience with machine learning algorithms and libraries (e.g., scikit-learn, TensorFlow, PyTorch)",
        "Knowledge of data visualization tools (e.g., Matplotlib, Seaborn, Tableau)"
      ]
    },
    {
      id: 7,
      title: "Mobile Developer (React Native)",
      type: "Full-time",
      location: "Remote",
      department: "Mobile Development",
      description: "Build cross-platform mobile applications using React Native.",
      requirements: [
        "3+ years of React Native development experience",
        "Solid understanding of JavaScript/TypeScript and React principles",
        "Experience with mobile development workflows (iOS and Android)",
        "Familiarity with native mobile development concepts"
      ]
    },
    {
      id: 8,
      title: "Technical Lead",
      type: "Full-time",
      location: "Hyderabad",
      department: "Engineering Management",
      description: "Lead a team of engineers and drive technical direction for key projects.",
      requirements: [
        "8+ years of software development experience",
        "Proven experience leading and mentoring engineering teams",
        "Strong architectural and system design skills",
        "Excellent communication and leadership abilities"
      ]
    }
  ];

  export interface Benefit {
    icon: IconType;
    className?: string;
    title: string;
    description: string;
  }
  
  export const benefits: Benefit[] = [
    {
      icon: FaCode, // Assuming FaCode is imported from react-icons
      className: "text-3xl text-teal-500",
      title: "Technical Growth",
      description: "Regular tech talks, conference sponsorships, and learning budgets"
    },
    {
      icon: FaUsers, // Assuming FaUsers is imported from react-icons
      className: "text-3xl text-blue-500",
      title: "Team Culture",
      description: "Collaborative environment with smart, passionate colleagues"
    },
    {
      icon: FaChartLine, // Assuming FaChartLine is imported from react-icons
      className: "text-3xl text-purple-500",
      title: "Career Pathing",
      description: "Clear growth trajectories with regular performance reviews"
    },
    {
      icon: FaHandshake, // Assuming FaHandshake is imported from react-icons
      className: "text-3xl text-amber-500",
      title: "Work-Life Balance",
      description: "Flexible hours and generous PTO policies"
    }
  ];

  export const developerTeams = [
    {
      icon: FaLaptopCode, // Store the component
      className: "text-3xl text-blue-500",
      title: "Web Development Teams",
      description: "Hire dedicated React, Angular, or Vue.js developers for your frontend projects",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: FaServer,
      className: "text-3xl text-green-500",
      title: "Backend Specialists",
      description: "Experienced Java, Node.js, and Python developers for robust backend solutions",
      skills: ["Spring Boot", "Node.js", "Django", "GraphQL"]
    },
    {
      icon: FaMobileAlt,
      className: "text-3xl text-purple-500",
      title: "Mobile Developers",
      description: "iOS and Android experts for native and cross-platform mobile apps",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: FaCloud,
      className: "text-3xl text-amber-500",
      title: "DevOps Engineers",
      description: "Infrastructure specialists to streamline your deployment pipelines",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      icon: FaUsersCog,
      className: "text-3xl text-teal-500",
      title: "Full Stack Teams",
      description: "Complete teams ready to take your project from concept to production",
      skills: ["MERN Stack", "JAM Stack", "Serverless", "Microservices"]
    }
  ];

export const hiringModels = [
    {
      title: "Dedicated Team",
      description: "Exclusive team working only on your project",
      bestFor: "Long-term complex projects"
    },
    {
      title: "Staff Augmentation",
      description: "Add our developers to your existing team",
      bestFor: "Short-term needs or skill gaps"
    },
    {
      title: "Project-Based",
      description: "Fixed-price delivery of complete solutions",
      bestFor: "Well-defined projects with clear scope"
    }
  ];

  export const techSkills = [
    'React',
    'Node.js',
    'Python',
    'Java',
    'AWS',
    'Docker',
    'Kubernetes',
    'TypeScript',
    'GraphQL',
    'MongoDB',
    'PostgreSQL',
    'Flutter',
    'Swift',
    'Kotlin',
    'TensorFlow'
  ];