import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="w-full py-24 px-6 bg-white text-gray-900">

      {/* 🔥 TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16"
      >
        Get in <span className="text-blue-600">Touch</span>
      </motion.h2>

      {/* 🔥 MAIN GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          {/* CARD 1 */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              📍 Office Location
            </h3>
            <p className="text-gray-600 text-sm">
              C-187, Nirala Nagar, Lucknow
Uttar Pradesh 226020, India

            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              📧 Email Support
            </h3>
            <p className="text-gray-600 text-sm">
              anuulipi@gmail.com
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              📞 Call Us
            </h3>
            <p className="text-gray-600 text-sm">
              91 9918859659
            </p>
          </div>

          {/* EXTRA TEXT */}
          <p className="text-gray-500 text-sm mt-6">
            We provide reliable IT solutions including laptops, desktops,
            CCTV systems, networking, and technical support. Our goal is to
            deliver fast and trusted service to businesses.
          </p>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Send a Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
            ></textarea>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition"
            >
              Send Message 🚀
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;