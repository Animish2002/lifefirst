"use client";
import { motion } from "framer-motion";

const ProjectsMarquee = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "TechCorp Inc.",

      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=TECH",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      client: "FinanceHub",
      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=FINANCE",
    },
    {
      id: 3,
      title: "AI Dashboard",
      client: "DataMind Solutions",

      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=DATA",
    },
    {
      id: 4,
      title: "SaaS Management Tool",
      client: "StartupXYZ",
      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=SAAS",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      client: "PropertyPro",

      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=PROP",
    },
    {
      id: 6,
      title: "Healthcare System",
      client: "MedTech Group",

      logo: "https://via.placeholder.com/80x40/000000/FFFFFF?text=MED",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      key={`${project.id}-${index}`}
      className="flex-shrink-0 mx-4 relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-80 h-48 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 flex flex-col justify-between h-full">
          {/* Logo and Client Section */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <img
                src={project.logo}
                alt={`${project.client} logo`}
                className="h-10 object-contain mb-2"
              />
              <p className="text-sm text-gray-500 font-medium">
                {project.client}
              </p>
            </div>
          </div>

          {/* Project Title */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className=" py-16 overflow-hidden max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-lg">
          Showcasing successful collaborations with amazing clients
        </p>
      </div>

      <div className="relative">
        {/* First Marquee - Left to Right */}
        <div className="overflow-hidden py-8">
          <motion.div
            className="flex"
            animate={{
              x: ["-100%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: `${projects.length * 320 * 2}px`,
            }}
          >
            {/* Duplicate projects for seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={`row1-${index}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="overflow-hidden py-8">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{
              width: `${projects.length * 320 * 2}px`,
            }}
          >
            {/* Duplicate projects for seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={`row2-${index}`}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient overlays for smooth edge fade */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default ProjectsMarquee;
