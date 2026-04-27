import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter, FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative w-full bg-[#080808] text-white pt-24 pb-8 px-6 overflow-hidden">
      
      {/* 🌌 DYNAMIC BACKGROUND GLOW */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[130px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >

          {/* 🏢 BRAND SECTION (TEXT LOGO) */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="cursor-default group">
              <h1 className="text-3xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-105">
                <span className="text-blue-600">Anu</span>
                <span className="text-white">lipi</span>
              </h1>
              <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-blue-500/80 -mt-1">
                Technologies
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing premium IT hardware solutions and security systems in Lucknow. 
              Quality products, trusted service, and reliable support.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-600", link: "#" },
                { icon: <FaInstagram />, color: "hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500", link: "#" },
                { icon: <FaFacebookF />, color: "hover:bg-blue-700", link: "#" },
                { icon: <FaXTwitter />, color: "hover:bg-white hover:text-black", link: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  className={`w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* 🔗 NAVIGATION */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight border-l-4 border-blue-600 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Products", "Contact"].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-500 text-sm transition-all flex items-center group">
                    <FaArrowRight className="text-[10px] mr-0 opacity-0 group-hover:mr-2 group-hover:opacity-100 transition-all text-blue-600" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🛠 SERVICES */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight border-l-4 border-blue-600 pl-3">
              Solutions
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {["IT Hardware", "CCTV Security", "Network Setup", "Printers & Projectors", "Maintenance (AMC)"].map((service, i) => (
                <li key={i} className="hover:text-blue-400 cursor-pointer transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 📞 OFFICE INFO */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-white font-bold mb-6 text-lg tracking-tight border-l-4 border-blue-600 pl-3">
              Contact Us
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-4">
                <span className="text-blue-600">📍</span>
                <p className="text-gray-400 leading-snug">
                  C-187, Nirala Nagar,<br />
                  Lucknow, UP 226020
                </p>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <span className="text-blue-600">📧</span>
                <p className="text-gray-400 group-hover:text-white transition-colors">suport@anulipi.com</p>
              </div>
              <div className="flex gap-4 group cursor-pointer">
                <span className="text-blue-600">📞</span>
                <p className="text-gray-400 group-hover:text-white transition-colors">+91 9918859659</p>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* 📋 COPYRIGHT BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-gray-300 font-bold">Anulipi Technologies</span>. Lucknow.
          </p>
          
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;