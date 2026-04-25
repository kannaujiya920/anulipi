import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// IMAGES
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";

const slides = [slider1, slider2];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-50%" : "50%", // Subtle parallax exit
      opacity: 0,
      zIndex: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden bg-[#050505]">
      
      {/* --- MAIN SLIDER IMAGE --- */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 180, damping: 25 },
            opacity: { duration: 0.4 }
          }}
          className="absolute w-full h-full"
        >
          {/* Top & Bottom Subtle Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10" />
          
          <img
            src={slides[current]}
            className="w-full h-full object-cover select-none"
            alt={`Slide ${current + 1}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* --- MINIMALIST NAVIGATION --- */}
      <div className="absolute inset-0 flex items-center justify-between px-4 lg:px-8 z-20 pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className="group pointer-events-auto w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-white backdrop-blur-md border border-white/10 text-white hover:text-black rounded-full transition-all duration-300 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          className="group pointer-events-auto w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-white backdrop-blur-md border border-white/10 text-white hover:text-black rounded-full transition-all duration-300 shadow-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* --- SMART PAGINATION DOTS --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="relative h-2 flex items-center"
          >
            <div className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? "w-10 bg-blue-500 shadow-[0_0_12px_#3b82f6]" : "w-3 bg-white/40 hover:bg-white/70"
            }`} />
          </button>
        ))}
      </div>

      {/* --- SLIM PROGRESS INDICATOR --- */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-20 overflow-hidden">
        <motion.div 
          key={current}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-blue-600"
        />
      </div>

    </div>
  );
}