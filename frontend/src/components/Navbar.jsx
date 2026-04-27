import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About US", id: "about" },
    { name: "Services", id: "services" },
    { name: "Products", id: "products" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -55; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100]">
      <motion.div
        animate={{
          // Height ekdum sleek kar di hai
          height: scrolled ? "50px" : "60px", 
        }}
        className={`w-full flex items-center justify-between px-6 md:px-16 
          bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-300
          border-b border-gray-100 rounded-b-[15px] overflow-visible`}
      >
        
        {/* LOGO - Adjusted for ultra-slim bar */}
        <div
          onClick={() => handleScrollToSection("home")}
          className="cursor-pointer flex flex-col justify-center"
        >
          <h1 className="text-xl md:text-2xl font-[1000] tracking-tighter text-gray-900 leading-[0.7]">
            <span className="text-blue-600">Anu</span>lipi
          </h1>
          <p className="text-[7px] md:text-[9px] uppercase font-black tracking-[0.3em] text-gray-400 mt-1">
            Technologies 
          </p>
        </div>

        {/* DESKTOP MENU - Tight Spacing */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollToSection(link.id)}
                className="text-[12px] font-black text-gray-700 hover:text-blue-600 transition-all uppercase tracking-tight relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center bg-gray-50 rounded-md"
        >
          <div className="flex flex-col gap-1 w-3.5">
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-[20px] border-t border-gray-50 p-5 md:hidden"
            >
              <div className="flex flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollToSection(link.id)}
                    className="text-md font-black text-gray-800"
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