import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/abouts.png";

const About = () => {
  const ref = useRef(null);

  // Smooth 3D Physics for Image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const features = [
    "High-End IT Hardware Solutions",
    "Advanced CCTV Surveillance Systems",
    "Business Grade Laptops & Desktops",
    "Fast Installation & Technical Support",
    "Trusted by Small & Large Enterprises",
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 px-6 bg-[#fafafa] overflow-hidden">
      
      {/* --- TAGDA UI BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="relative mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full"
          >
            Anulipi IT Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight"
          >
            About <span className="text-blue-600">us</span>
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - THE "TAGDA" 3D VISUAL */}
          <div className="relative flex justify-center lg:justify-start">
            <motion.div
              ref={ref}
              style={{ rotateX, rotateY, perspective: 1200 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={reset}
              className="relative w-full max-w-lg group"
            >
              <div className="absolute -inset-4 border-2 border-dashed border-blue-200 rounded-[2.5rem] -z-10 group-hover:scale-105 transition-transform duration-500" />
              
              <motion.div className="relative overflow-hidden rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-white p-2">
                <img
                  src={aboutImg}
                  alt="Anulipi IT Solutions"
                  className="w-full h-auto rounded-[1.5rem] object-cover"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT - CONTENT SECTION */}
          <div className="flex flex-col">
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
            >
              Smart & Reliable IT Infrastructure Solutions
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-600 text-lg leading-relaxed border-l-4 border-blue-600 pl-6 mb-8"
            >
              <p>
                Anulipi is a System Integrator. We supply security hardware to various departments and corporates in Uttar Pradesh.
              </p>
              <p>
                Our product range covers everything from keyboard and mouse to servers. We offer services like AMC, Network, and CCTV installation.
              </p>
              <p>
                Our largest orders are from various districts and industries where we have supplied material throughout the state of U.P. and installed the same.
              </p>
            </motion.div>

            {/* --- COMPACT FEATURE GRID --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 5, backgroundColor: "#f0f7ff" }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <span className="text-blue-600 group-hover:text-white text-sm transition-colors">⚡</span>
                  </div>
                  <p className="text-gray-800 font-bold text-sm leading-tight">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;