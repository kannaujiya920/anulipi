import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  const ref = useRef(null);

  // 3D tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const offsetX = e.clientX - rect.left - width / 2;
    const offsetY = e.clientY - rect.top - height / 2;

    x.set(offsetX / 10);
    y.set(offsetY / 10);
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
    <section className="relative w-full py-28 px-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
      >
        About <span className="text-blue-600">Anulipi</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT - 3D IMAGE */}
        <motion.div
          ref={ref}
          style={{ rotateX, rotateY, perspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          className="relative flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
          >
            <img
              src={aboutImg}
              alt="Anulipi IT Solutions"
              className="w-full max-w-md object-cover"
            />
          </motion.div>

          {/* floating glow */}
          <div className="absolute -z-10 w-64 h-64 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl md:text-3xl font-bold text-gray-900"
          >
            Smart & Reliable IT Infrastructure Solutions
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-gray-600 leading-relaxed"
          >
            We provide enterprise-grade IT hardware, security systems, and digital infrastructure
            solutions designed for performance, stability, and long-term business growth.
          </motion.p>

          {/* FEATURE CARDS */}
          <div className="grid gap-3 mt-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03, x: 5 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl 
                           bg-white/70 backdrop-blur-md border border-gray-100 
                           shadow-sm hover:shadow-md transition"
              >
                <span className="text-blue-600 font-bold">⚡</span>
                <p className="text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-7 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Explore Solutions
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default About;