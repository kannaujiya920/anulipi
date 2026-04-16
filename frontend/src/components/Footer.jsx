import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-20 pb-6 px-6 border-t border-gray-800">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* 🏢 COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Anulipi
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering reliable IT hardware solutions including laptops, desktops,
            CCTV systems, printers, and projectors with trusted support.
          </p>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://x.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaXTwitter />
            </a>

          </div>
        </motion.div>

        {/* 🔗 QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home", "About", "Services", "Products", "Contact"].map((item, i) => (
              <li key={i} className="hover:text-blue-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 📦 SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Services</h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-blue-500">IT Solutions</li>
            <li className="hover:text-blue-500">Security Systems</li>
            <li className="hover:text-blue-500">Hardware Supply</li>
            <li className="hover:text-blue-500">Network Setup</li>
            <li className="hover:text-blue-500">AMC Support</li>
          </ul>
        </motion.div>

        {/* 📞 CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>
              📍 C-187, Nirala Nagar <br />
              Lucknow, Uttar Pradesh
            </p>

            <p className="hover:text-blue-500 cursor-pointer">
              📧 anuulipi@gmail.com
            </p>

            <p className="hover:text-blue-500 cursor-pointer">
              📞 +91 9918859659
            </p>
          </div>
        </motion.div>

      </div>

      {/* 🔥 BOTTOM */}
      <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

        <p>© {new Date().getFullYear()} Anulipi. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;