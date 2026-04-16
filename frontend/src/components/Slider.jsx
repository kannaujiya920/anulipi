import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import laptop from "../assets/laptop.png";
import cctv from "../assets/cctv.png";
import desktop from "../assets/desktop.png";
import projector from "../assets/projector.png";

const slides = [
  {
    title: "Smart IT Infrastructure",
    desc: "Anulipi delivers reliable laptops and computing solutions built for performance and scalability.",
    img: laptop,
    accent: "bg-[#1f1f1f]",
  },
  {
    title: "Advanced Security Systems",
    desc: "Secure your business with intelligent CCTV surveillance and real-time monitoring solutions.",
    img: cctv,
    accent: "bg-yellow-400",
  },
  {
    title: "High-Performance Workstations",
    desc: "Powerful desktop systems engineered by Anulipi for business efficiency and professional workflows.",
    img: desktop,
    accent: "bg-[#2a2a2a]",
  },
  {
    title: "Next-Gen Display Solutions",
    desc: "Experience crystal-clear visuals with advanced projection systems designed for modern environments.",
    img: projector,
    accent: "bg-pink-500",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="w-full h-screen bg-[#111] flex items-center justify-center">
      
      <div className="w-full max-w-7xl h-[90vh] relative overflow-hidden flex rounded-2xl">

        {/* LEFT TEXT */}
        <div className="w-1/2 flex flex-col justify-center px-10 z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            {slide.title}
          </h1>

          <p className="text-gray-400 mt-6 max-w-md">
            {slide.desc}
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3 rounded-full text-sm font-medium w-fit hover:scale-105 transition">
            Explore →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 relative flex items-center justify-center">

          <div
            className={`absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-70 ${slide.accent}`}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.img}
              alt="product"
              className={`relative object-contain z-10 ${
                slide.title === "High-Performance Workstations"
                  ? "w-[300px] md:w-[380px]"   // 👈 balanced (1x chhota)
                  : "w-[400px] md:w-[520px]"
              }`}
              initial={{ y: -180, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 180, opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 16,
              }}
            />
          </AnimatePresence>
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() =>
            setCurrent((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-3xl hover:scale-125 transition"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() =>
            setCurrent((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-3xl hover:scale-125 transition"
        >
          ›
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                current === i ? "bg-white scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}