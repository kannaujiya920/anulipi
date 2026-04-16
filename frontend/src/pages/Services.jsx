import { motion } from "framer-motion";
import {
  Cpu,
  ShieldCheck,
  Laptop,
  Network,
  ClipboardList,
  Wrench,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "IT Infrastructure Solutions",
      desc: "End-to-end IT setup for offices, schools, and enterprises with scalable architecture.",
      icon: <Cpu size={26} />,
    },
    {
      title: "Advanced Security Systems",
      desc: "Smart CCTV, IP cameras, and surveillance solutions for complete protection.",
      icon: <ShieldCheck size={26} />,
    },
    {
      title: "Hardware Supply & Integration",
      desc: "Laptops, desktops, printers, and accessories with seamless installation.",
      icon: <Laptop size={26} />,
    },
    {
      title: "Network & Connectivity",
      desc: "LAN, WAN, WiFi, and enterprise networking solutions for fast connectivity.",
      icon: <Network size={26} />,
    },
    {
      title: "Annual Maintenance Contract",
      desc: "Reliable AMC support for uninterrupted IT system performance.",
      icon: <ClipboardList size={26} />,
    },
    {
      title: "Repair & Technical Support",
      desc: "Fast repair services for computers, printers, and IT hardware systems.",
      icon: <Wrench size={26} />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-24 px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-14"
      >
        Our <span className="text-blue-600">Professional Services</span>
      </motion.h2>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="group relative bg-white border border-gray-100 
                       rounded-2xl p-6 shadow-md hover:shadow-2xl 
                       transition-all duration-300 overflow-hidden"
          >
            {/* glowing background */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>

            {/* ANIMATED ICON */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-12 h-12 flex items-center justify-center rounded-xl 
                         bg-blue-50 text-blue-600 mb-4 group-hover:bg-blue-600 
                         group-hover:text-white transition"
            >
              {item.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* bottom line animation */}
            <div className="mt-5 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Services;