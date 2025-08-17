"use client";
import { motion } from "framer-motion";

const ProjectsMarquee = () => {
  // Government projects data
  const governmentProjects = [
    {
      id: 1,
      title: "Digital ID Management System",
      client: "Ministry of Digital Affairs",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=GOV",
    },
    {
      id: 2,
      title: "Tax Portal Modernization",
      client: "Revenue Department",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=TAX",
    },
    {
      id: 3,
      title: "Healthcare Management System",
      client: "Department of Health",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=HEALTH",
    },
    {
      id: 4,
      title: "Education Portal",
      client: "Ministry of Education",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=EDU",
    },
    {
      id: 5,
      title: "Smart City Dashboard",
      client: "Urban Development Authority",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=SMART",
    },
    {
      id: 6,
      title: "E-Governance Platform",
      client: "Administrative Services",
      logo: "https://via.placeholder.com/80x40/1e3a8a/FFFFFF?text=EGOV",
    },
  ];

  // Private sector projects data
  const privateSectorProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      client: "TechCorp Inc.",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=TECH",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      client: "FinanceHub",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=FINANCE",
    },
    {
      id: 3,
      title: "AI Dashboard",
      client: "DataMind Solutions",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=DATA",
    },
    {
      id: 4,
      title: "SaaS Management Tool",
      client: "StartupXYZ",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=SAAS",
    },
    {
      id: 5,
      title: "Real Estate Portal",
      client: "PropertyPro",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=PROP",
    },
    {
      id: 6,
      title: "Healthcare System",
      client: "MedTech Group",
      logo: "https://via.placeholder.com/80x40/059669/FFFFFF?text=MED",
    },
  ];

  interface Project {
    id: number;
    title: string;
    client: string;
    logo: string;
  }

  const ProjectCard = ({
    project,
    index,
    isGovernment = false,
  }: {
    project: Project;
    index: number;
    isGovernment?: boolean;
  }) => (
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
                width={80}
                height={40}
                className="h-10 object-contain mb-2"
              />
              <p className="text-sm text-gray-500 font-medium">
                {project.client}
              </p>
              {/* Sector badge */}
              <span
                className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-2 ${
                  isGovernment
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {isGovernment ? "Government" : "Private Sector"}
              </span>
            </div>
          </div>

          {/* Project Title */}
          <div className="flex-1">
            <h3
              className={`text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${
                isGovernment
                  ? "group-hover:text-blue-600"
                  : "group-hover:text-green-600"
              }`}
            >
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const MarqueeSection = ({
    projects,
    title,
    subtitle,
    isGovernment = false,
    direction = "left",
  }: {
    projects: Project[];
    title: string;
    subtitle: string;
    isGovernment?: boolean;
    direction?: "left" | "right";
  }) => (
    <div className="mb-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2
          className={`text-lg md:text-xl font-semibold mb-2 ${
            isGovernment ? "text-blue-900" : "text-green-900"
          }`}
        >
          {title}
        </h2>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-8">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" ? ["-100%", "0%"] : ["0%", "-100%"],
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
              key={`${title}-${index}`}
              project={project}
              index={index}
              isGovernment={isGovernment}
            />
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edge fade */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );

  return (
    <div className="py-16 overflow-hidden max-w-7xl mx-auto">
      {/* Main Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Our Client Portfolio
        </h1>
        <p className="text-gray-600 text-xl">
          Delivering excellence across government and private sectors
        </p>
      </div>

      {/* Government Projects Marquee */}
      <MarqueeSection
        projects={governmentProjects}
        title="Government Projects"
        subtitle="Empowering public services with innovative digital solutions"
        isGovernment={true}
        direction="left"
      />

      {/* Private Sector Projects Marquee */}
      <MarqueeSection
        projects={privateSectorProjects}
        title="Private Sector Projects"
        subtitle="Driving business growth through cutting-edge technology"
        isGovernment={false}
        direction="right"
      />
    </div>
  );
};

export default ProjectsMarquee;
