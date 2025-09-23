"use client";
import { motion } from "framer-motion";

const ProjectsMarquee = () => {
  // Government projects data
  const governmentProjects = [
    {
      id: 1,
      title: "Zilla Parishad Nanded",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419492/zilla_parishad_nanded_gxeizl.png",
    },
    {
      id: 2,
      title: "Zilla Parishad Nagpur",
      client: "Revenue Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419476/zilla_parishad_nagpur_gfuejj.jpg",
    },
    {
      id: 3,
      title: "Zilla Parishad Latur",
      client: "Department of Health",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419475/zilla_parishad_latur_mlg0ka.png",
    },
    {
      id: 4,
      title: "Zilla Parishad Gadchiroli",
      client: "Ministry of Education",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419461/zilla_parishad_gadchiroli_y2p3nb.png",
    },
    {
      id: 5,
      title: "Sarvajanik Arogya Vibhag",
      client: "Urban Development Authority",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419445/sarvajanik_arogya_vibhag_wsaxbn.png",
    },
    {
      id: 6,
      title: "Samta Nyay Ekmatta",
      client: "Administrative Services",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419445/samta_nyay_ekmata_jsklxd.png",
    },
    {
      id: 7,
      title: "Navodyay Vidyalaya Samiti",
      client: "Health Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419445/navoday_vidyalaya_samiti_vjgr5p.png",
    },
    {
      id: 8,
      title: "National Health Mission",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419439/national_health_mission_r3cczk.png",
    },
    {
      id: 9,
      title: "Nanded Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419438/nanded_municipal_vfwleq.png",
    },
    {
      id: 10,
      title: "Nagpur Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419438/nagpur_municipal_hgupzl.png",
    },
    {
      id: 11,
      title: "Maharashtra Kamgar Kalyan Mandal",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419437/maharashtra_kamgar_xndrlh.png",
    },
    {
      id: 12,
      title: "Panvel Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419437/mahanagar_palika_panvel_qcuyfw.png",
    },
    {
      id: 13,
      title: "Mukhed Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419437/mahanagar_palika_mukhed_ogfahi.jpg",
    },
    {
      id: 14,
      title: "Maharashtra Public Welfare Department",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419293/maha_pwd_zqarhf.jpg",
    },
    {
      id: 15,
      title: "Latur Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419273/latur_municipal_hjaqnm.jpg",
    },
    {
      id: 16,
      title: "Maharashtra State Police",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419272/maha_police_j8reuy.png",
    },
    {
      id: 17,
      title: "Government Ayurvedic College and Hospital Nanded",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419272/goverment_ayurved_college_nanded_hgdjxc.jpg",
    },
    {
      id: 18,
      title: "Indira Gandhi Government Medical College and Hospital, Nagpur ",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419271/iggmc_nagpur_na4nve.jpg",
    },
    {
      id: 19,
      title: "Government Medical College, Solapur",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418776/gmc_solapur_qckyps.png",
    },
    {
      id: 20,
      title: "Aurangabad Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418742/aurangabad_municipal_rbc0g9.jpg",
    },
    {
      id: 21,
      title: "Dr Shankarrao Chavan Government Medical College, Nanded",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418742/gmc_nanded_zuobuz.jpg",
    },
    {
      id: 22,
      title: "Chandrapur Municipal Corporation",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418742/chandrapur_mahanagarpalika_dnkqct.png",
    },
    {
      id: 23,
      title: "Maharashtra Tribal Development Department",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418742/aadivaasi_vikas_vibhag_hqlptb.png",
    },
    {
      id: 24,
      title: "Government Medical College and Hospital, Nagpur",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418742/gmc_nanded_zuobuz.jpg",
    },
    {
      id: 25,
      title: "Government Medical College, Nalgonda",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418741/gmc_nalgonda_g2gzfy.jpg",
    },
    {
      id: 26,
      title: "Vilasrao Deshmukh Government Medical College, Latur",
      client: "Public Works Department",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755418741/gmc_latur_o79kjt.jpg",
    },
  ];

  // Private sector projects data
  const privateSectorProjects = [
    {
      id: 1,
      title: "XRBIA Builders and Developers",
      client: "TechCorp Inc.",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755420595/xrbia_qy9vbe.webp",
    },
    {
      id: 2,
      title: "Shiv Chhatrapatil Shikshan Sansthan",
      client: "FinanceHub",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755420595/shahu_college_enz1bn.png",
    },
    {
      id: 3,
      title: "Unitop Aquacare Limited",
      client: "DataMind Solutions",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755420595/unitap_aquacare_im9xqg.png",
    },
    {
      id: 4,
      title: "Jijo Ent(OPC) Private Limited",
      client: "StartupXYZ",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755420595/something-something_osljhe.jpg",
    },
    {
      id: 5,
      title: "Unique Group",
      client: "PropertyPro",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755420595/unique_group_ku90k8.png",
    },
    {
      id: 6,
      title: "Royal Orange County",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419600/royal_orange_county_mha5zb.jpg",
    },
    {
      id: 7,
      title: "Royal Connaught Boat Club",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419553/royal_connaught_boat_club_obgo9o.jpg",
    },
    {
      id: 8,
      title: "Rohan Corporation",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419552/rohan_corporation_lzua1r.svg",
    },
    {
      id: 9,
      title: "Rajeev Education Trust",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419551/rajeev_education_trust_wv4jvg.png",
    },
    {
      id: 10,
      title: "Pyramid Infratech Private Limited",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419550/pyramid-infratech-logo_v3f7uj.jpg",
    },
    {
      id: 11,
      title: "Profile Property Group Private Limited",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419550/profile_property_group_qjpr7m.gif",
    },
    {
      id: 12,
      title: "Oxford 1Earth Group",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419549/oxford_1earth_hsjflk.jpg",
    },
    {
      id: 13,
      title: "Logicon Technologies Private Limited",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419548/logicon_technosolutions_gjrkpj.png",
    },
    {
      id: 14,
      title: "Kirloskar Industries",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419548/kirloskar_industries_a0ibvy.jpg",
    },
    {
      id: 15,
      title: "Golden Group",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419547/Golden_Group_kt4rsr.jpg",
    },
    {
      id: 16,
      title: "Filesure India Private Limited",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419546/filesure_fp1dj4.png",
    },
    {
      id: 17,
      title: "Dayanand Shikshan Sansthan, Latur",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419546/dayanand_college_wppsrf.jpg",
    },
    {
      id: 18,
      title: "Daund Sugar Private Limited",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419545/daund_sugar_ucaqhr.jpg",
    },
    {
      id: 19,
      title: "Agro Diamond Water and Cooling Solution",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419545/Agro_diamond_water_htbhbv.jpg",
    },
    {
      id: 20,
      title: "Bluedrop Enviro",
      client: "MedTech Group",
      logo: "https://res.cloudinary.com/dsvfcckqy/image/upload/v1755419545/bluedrop_enviro_aglo4m.webp",
    },
  ];

  interface Project {
    id: number;
    title: string;
    client?: string;
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
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-auto w-[10rem] md:h-36 h-28 overflow-hidden hover:shadow-2xs transition-shadow duration-300">
        <div className="p-4 flex flex-col justify-between h-full">
          {/* Logo and Client Section */}
          <div className="flex items-center justify-center mb-4 mx-auto">
            <div className="flex-1">
              <img
                src={project.logo}
                alt={`${project.client} logo`}
                className="md:h-16 h-14 object-contain mb-2"
              />
            </div>
          </div>

          {/* Project Title */}
          <div className="flex-1">
            <h3
              className={`md:text-md text-xs md:w-[15rem] w-[8rem] mx-auto text-center font-semibold text-gray-900 mb-3 transition-colors duration-300 ${
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
    <div className="mb-8">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2
          className={`text-lg md:text-xl font-semibold mb-2 ${
            isGovernment ? "text-blue-900" : "text-green-900"
          }`}
        >
          {title}
        </h2>
        <p className="text-gray-600 text-l">{subtitle}</p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-2">
        <motion.div
          className="flex"
          animate={{
            x: direction === "left" ? [0, "-50%"] : ["-50%", 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 70,
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
      </div>
    </div>
  );

  return (
    <div className="py-16 overflow-hidden max-w-6xl mx-auto px-6">
      {/* Main Header */}
      <div className="text-center mb-8">
        <span className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Trusted By
        </span>
        <p className="text-gray-600 text-2xl">
          Driving Excellence in Both Government and Private Sectors
        </p>
      </div>

      {/* Government Projects Marquee */}
      <MarqueeSection
        projects={governmentProjects}
        title="Government Projects"
        subtitle="Partnering with Governments to create infrastructure for a better future."
        isGovernment={true}
        direction="left"
      />

      {/* Private Sector Projects Marquee */}
      <MarqueeSection
        projects={privateSectorProjects}
        title="Private Sector Projects"
        subtitle="Collaborating with Private enterprises to deliver performance-driven projects."
        isGovernment={false}
        direction="right"
      />
    </div>
  );
};

export default ProjectsMarquee;
