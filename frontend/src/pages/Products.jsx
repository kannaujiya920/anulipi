import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- ALL IMAGE IMPORTS (Imports same rahenge) ---
import laptopMain from "../assets/laptop.png";
import desktopMain from "../assets/desktop.png";
import cctvMain from "../assets/cctv.png";
import printerMain from "../assets/printer.jpg";
import projectorMain from "../assets/projector.jpg";

import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.jpg";
import laptop4 from "../assets/laptop4.jpg";

import desktop1 from "../assets/desktop1.jpg";
import desktop2 from "../assets/desktop2.jpg";
import desktop3 from "../assets/desktop3.jpg";
import desktop4 from "../assets/desktop4.jpg";

import cctv1 from "../assets/cctv1.jpg";
import cctv2 from "../assets/cctv2.jpg";
import cctv3 from "../assets/cctv3.jpg";
import cctv4 from "../assets/cctv4.jpg";

import printer1 from "../assets/printer1.jpg";
import printer2 from "../assets/printer2.jpg";
import printer3 from "../assets/printer3.jpg";
import printer4 from "../assets/printer4.jpg";

import projector1 from "../assets/projector1.jpg";
import projector2 from "../assets/projector2.jpg";
import projector3 from "../assets/projector3.jpg";
import projector4 from "../assets/projector4.jpg";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = useMemo(() => [
    { 
      name: "Laptop", 
      mainImg: laptopMain, 
      tag: "Ultra Portable",
      desc: "Latest generation processors for high-speed multitasking and sleek portability.",
      images: [laptop1, laptop2, laptop3, laptop4] 
    },
    { 
      name: "Desktop", 
      mainImg: desktopMain, 
      tag: "Workstation",
      desc: "Heavy-duty performance with superior cooling and customizable hardware options.",
      images: [desktop1, desktop2, desktop3, desktop4] 
    },
    { 
      name: "CCTV", 
      mainImg: cctvMain, 
      tag: "Security",
      desc: "Night vision enabled 4K surveillance for complete safety and remote monitoring.",
      images: [cctv1, cctv2, cctv3, cctv4] 
    },
    { 
      name: "Printer", 
      mainImg: printerMain, 
      tag: "Precision",
      desc: "High-yield laser printing with wireless connectivity and crystal clear output.",
      images: [printer1, printer2, printer3, printer4] 
    },
    { 
      name: "Projector", 
      mainImg: projectorMain, 
      tag: "4K Visuals",
      desc: "Cinematic brightness and color accuracy for professional presentations and home media.",
      images: [projector1, projector2, projector3, projector4] 
    },
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.03, duration: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    visible: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { type: "tween", ease: "easeOut", duration: 0.2 } 
    }
  };

  return (
    <div className="relative w-full py-16 bg-[#fcfcfc] text-gray-900 px-4 overflow-hidden">
      
      <div className="max-w-[1550px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <motion.h2 className="text-5xl font-black tracking-tighter uppercase">
            Latest <span className="text-blue-600">Products</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {products.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-4 px-12 py-4 rounded-xl transition-all duration-200 ${
                activeIndex === i 
                ? "bg-white shadow-lg ring-1 ring-gray-200 scale-105" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              <img src={item.mainImg} alt="" className={`h-10 w-10 object-contain ${activeIndex === i ? "" : "grayscale opacity-40"}`} />
              <span className={`font-black text-lg uppercase ${activeIndex === i ? "text-blue-600" : ""}`}>
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* 4-BIG CARDS GRID */}
        <div className="min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {products[activeIndex].images.map((img, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  {/* HUGE IMAGE AREA */}
                  <div className="relative h-[320px] bg-[#f9fafb] flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={img}
                      alt={products[activeIndex].name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-[11px] font-bold px-4 py-1 rounded-md shadow-lg">
                        {products[activeIndex].tag}
                      </span>
                    </div>
                  </div>

                  {/* CLEAN TEXT AREA (3 Lines Only) */}
                  <div className="p-8 text-center bg-white">
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {products[activeIndex].name} Series 0{i + 1}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
                      {products[activeIndex].desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Products;