import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBolt,
  IconWorldCheck,
  IconBuildingFactory2,
  IconCertificate,
  IconTools,
  IconRecycle,
  IconCpu,
  IconCurrencyRupee,
} from "@tabler/icons-react";

export function WhyChooseUs() {
  return (
    <>
      <div className="md:px-4">
        <div className="text-3xl md:text-4xl font-semibold text-center py-8">
          Why Choose Us?
        </div>

        {/* First row - 3 items */}
        <BentoGrid className="max-w-7xl mx-auto ">
          {items.slice(0, 3).map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </BentoGrid>

        {/* Second row - 2 items centered */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:auto-rows-[12rem]">
            {items.slice(3, 5).map((item, i) => (
              <BentoGridItem
                key={i + 3}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* Third row - 3 items */}
        <BentoGrid className="max-w-7xl mx-auto">
          {items.slice(5, 8).map((item, i) => (
            <BentoGridItem
              key={i + 5}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  );
}

const items = [
  {
    title: "Energy Efficient",
    description:
      "Save power and reduce operating costs with our advanced, optimized treatment technologies.",
    icon: <IconBolt className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Global Standards",
    description:
      "ISO 9001:2015 certified and compliant with CPCB, SPCB, and ZLD norms — ready for global deployment.",
    icon: <IconWorldCheck className="h-10 w-10 text-green-600" />,
  },
  {
    title: "Plug & Play Solutions",
    description:
      "Prefabricated, containerized plants for quick setup, minimal civil work, and easy scalability.",
    icon: <IconBuildingFactory2 className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Proven Track Record",
    description:
      "500+ projects executed and 50 million+ litres treated per day across diverse industries.",
    icon: <IconCertificate className="h-10 w-10 text-amber-600" />,
  },
  {
    title: "Low Maintenance",
    description:
      "Smart automation and robust engineering deliver reduced downtime and reliable operations.",
    icon: <IconTools className="h-10 w-10 text-gray-600" />,
  },
  {
    title: "Sustainability First",
    description:
      "Turning wastewater into a resource through 3Rs: Reduce, Reuse and Restore.",
    icon: <IconRecycle className="h-10 w-10 text-green-500" />,
  },
  {
    title: "Innovative Technology",
    description:
      "IoT-enabled systems, smart meters, and real-time monitoring ensure smarter water management.",
    icon: <IconCpu className="h-10 w-10 text-purple-600" />,
  },
  {
    title: "Cost-Effective",
    description:
      "Efficient designs ensure high performance at lower lifecycle costs, delivering strong ROI.",
    icon: <IconCurrencyRupee className="h-10 w-10 text-emerald-600" />,
  },
];
