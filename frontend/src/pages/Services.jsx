import { motion } from "framer-motion";

// IMPORT IMAGES
import sitImg from "../assets/sit.jpg";
import nscImg from "../assets/nsc.jpg";
import itsImg from "../assets/its.jpg";
import ihsImg from "../assets/ihs.jpg";
import csImg from "../assets/cs.jpg";
import amcImg from "../assets/amc.jpg";

const Services = () => {
  const services = [
    {
      title: "System Integration",
      tagline: "Infrastructure",
      desc: "Complete IT infrastructure setup for government departments and corporates across U.P. with reliable execution.",
      image: sitImg,
    },
    {
      title: "Security Surveillance",
      tagline: "Security",
      desc: "Advanced CCTV and IP monitoring systems with full installation support for industries and public projects.",
      image: csImg,
    },
    {
      title: "IT Hardware Supply",
      tagline: "Hardware",
      desc: "Wide range of products from high-performance servers to peripherals, delivered across all districts.",
      image: itsImg,
    },
    {
      title: "Network Connectivity",
      tagline: "Networking",
      desc: "Structured LAN, WAN, and enterprise networking designed for speed, security, and scalability.",
      image: ihsImg,
    },
    {
      title: "AMC & Support",
      tagline: "Maintenance",
      desc: "Annual Maintenance Contracts ensuring smooth operation and zero downtime for critical IT assets.",
      image: amcImg,
    },
    {
      title: "Technical Services",
      tagline: "Expert Help",
      desc: "On-site installation, configuration, and repair services for industrial and government sectors.",
      image: nscImg,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "circOut" } 
    },
  };

  return (
    <section id="services" className="relative w-full py-24 px-4 bg-[#fcfdfe] overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-600 font-black tracking-[0.2em] uppercase text-sm border-b-2 border-blue-600 pb-2"
          >
            Our Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mt-6 tracking-tight"
          >
            Professional <span className="text-blue-600">Services</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              
              className="group relative bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] transition-all duration-500"
            >
              
              <div className="relative h-64 w-full rounded-[2rem] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={index < 2 ? "eager" : "lazy"} // ✅ FIXED HERE
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="backdrop-blur-md bg-white/20 text-white text-[10px] font-black uppercase px-4 py-2 rounded-full border border-white/30 tracking-widest">
                    {item.tagline}
                  </span>
                </div>
              </div>

              <div className="pt-8 pb-4 px-4">
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed line-clamp-3 text-sm">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center justify-between">
                   <div className="h-1 w-12 bg-blue-600 rounded-full group-hover:w-24 transition-all duration-500" />
                   <span className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-xs uppercase tracking-tighter">
                     Learn More →
                   </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;