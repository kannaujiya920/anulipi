import { useState, useEffect } from "react";
import logo from "../assets/anulipi.png";

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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -65;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-visible ${
        scrolled
          ? "bg-blue-600/95 backdrop-blur-md shadow-md"
          : "bg-blue-500/70 backdrop-blur-md"
      }`}
    >
      {/* 🔥 HEIGHT FIX */}
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-end relative">

        {/* 🔥 BIG LOGO (navbar ko affect nahi karega) */}
        <img
          src={logo}
          alt="logo"
          onClick={() => handleScroll("home")}
          className="absolute left-6 h-20 md:h-24 object-contain cursor-pointer"
        />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-7 text-white text-sm font-medium">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* MOBILE BTN */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-3 space-y-2 text-white bg-blue-600/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="cursor-pointer"
            >
              {link.name}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;