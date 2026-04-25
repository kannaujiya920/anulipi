import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -60; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      <motion.div
        animate={{
          height: scrolled ? "55px" : "65px",
        }}
        className={`w-full transition-all duration-500 flex items-center justify-between px-6 md:px-12 
          bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] 
          rounded-b-[25px] border-b border-gray-100 overflow-visible`} 
          /* 👆 rounded-b-[25px] se sirf niche ke corners round honge */
      >
        
        {/* LOGO */}
        <div
          onClick={() => handleScrollToSection("home")}
          className="cursor-pointer group"
        >
          <h1 className="text-xl md:text-2xl font-black tracking-tighter text-gray-900 leading-none">
            <span className="text-blue-600">Anu</span>lipi
          </h1>
          <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-gray-400">
            Technology
          </p>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-bold text-[13px] text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollToSection(link.id)}
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
          
          <button
            onClick={() => handleScrollToSection("contact")}
            className="px-6 py-2 bg-blue-600 text-white text-[12px] font-black rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            Contact
          </button>
        </ul>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full"
        >
          <div className="flex flex-col gap-1 w-4">
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-b-[25px] border-t border-gray-50 p-6 md:hidden"
            >
              <div className="flex flex-col gap-5 text-center">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-lg font-bold text-gray-800"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;