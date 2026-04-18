import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// MAIN IMAGES
import laptopMain from "../assets/laptop.png";
import desktopMain from "../assets/desktop.png";
import cctvMain from "../assets/cctv.png";
import printerMain from "../assets/printer.jpg";
import projectorMain from "../assets/projector.jpg";

// ALL IMAGES
import laptop1 from "../assets/laptop1.jpg";
import laptop2 from "../assets/laptop2.jpg";
import laptop3 from "../assets/laptop3.jpg";
import laptop4 from "../assets/laptop4.jpg";
import laptop5 from "../assets/laptop5.jpg";

import desktop1 from "../assets/desktop1.jpg";
import desktop2 from "../assets/desktop2.jpg";
import desktop3 from "../assets/desktop3.jpg";
import desktop4 from "../assets/desktop4.jpg";
import desktop5 from "../assets/desktop5.jpg";

import cctv1 from "../assets/cctv1.jpg";
import cctv2 from "../assets/cctv2.jpg";
import cctv3 from "../assets/cctv3.jpg";
import cctv4 from "../assets/cctv4.jpg";
import cctv5 from "../assets/cctv5.jpg";

import printer1 from "../assets/printer1.jpg";
import printer2 from "../assets/printer2.jpg";
import printer3 from "../assets/printer3.jpg";
import printer4 from "../assets/printer4.jpg";
import printer5 from "../assets/printer5.jpg";

import projector1 from "../assets/projector1.jpg";
import projector2 from "../assets/projector2.jpg";
import projector3 from "../assets/projector3.jpg";
import projector4 from "../assets/projector4.jpg";
import projector5 from "../assets/projector5.jpg";

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      name: "Laptop",
      mainImg: laptopMain,
      images: [laptop1, laptop2, laptop3, laptop4, laptop5],
    },
    {
      name: "Desktop",
      mainImg: desktopMain,
      images: [desktop1, desktop2, desktop3, desktop4, desktop5],
    },
    {
      name: "CCTV",
      mainImg: cctvMain,
      images: [cctv1, cctv2, cctv3, cctv4, cctv5],
    },
    {
      name: "Printer",
      mainImg: printerMain,
      images: [printer1, printer2, printer3, printer4, printer5],
    },
    {
      name: "Projector",
      mainImg: projectorMain,
      images: [projector1, projector2, projector3, projector4, projector5],
    },
  ];

  return (
    <div className="w-full py-24 bg-black text-white px-6 relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-blue-600 blur-[120px] opacity-20 top-10 left-1/2 -translate-x-1/2" />

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 relative z-10">
        Latest <span className="text-blue-500">Products</span>
      </h2>

      {/* 🔥 TOP CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-5 relative z-10">

        {products.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActiveIndex(i)}
            whileHover={{ scale: 1.12, y: -10 }}
            className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-lg ${
              activeIndex === i
                ? "bg-blue-600/30 border border-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.6)]"
                : "bg-white/5 border border-white/10"
            }`}
          >

            <motion.img
              src={item.mainImg}
              alt={item.name}
              className="h-20 mx-auto object-contain"
              whileHover={{ scale: 1.2, rotate: 3 }}
              transition={{ type: "spring", stiffness: 120 }}
            />

            {/* ✅ NAME ADDED */}
            <h3 className="text-center text-sm mt-3 font-semibold text-white">
              {item.name}
            </h3>

          </motion.div>
        ))}

      </div>

      {/* 🔥 BOTTOM CARDS */}
      <div className="max-w-6xl mx-auto mt-14 relative z-10">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >

            {products[activeIndex].images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotateY: 5 }}
                className="flex-1 p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
              >

                <motion.img
                  src={img}
                  className="w-full h-32 object-contain mb-3"
                  whileHover={{ scale: 1.15 }}
                />

                <h3 className="text-sm font-semibold text-center">
                  {products[activeIndex].name}
                </h3>

                <p className="text-xs text-gray-400 text-center mt-1">
                  Premium build quality, high-speed performance & reliable technology.
                </p>

              </motion.div>
            ))}

          </motion.div>
        </AnimatePresence>

      </div>

    </div>
  );
};

export default Products;