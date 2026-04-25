import { motion } from "framer-motion";
import { FaWhatsapp, FaPaperPlane, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "919918859659";
  const message = encodeURIComponent("Hello Anulipi! I'm interested in your IT solutions.");

  // Exact Google Maps Embed URL for Nirala Nagar, Lucknow
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.544158913936!2d80.93510527522338!3d26.886221576664057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a200787e9%3A0xc3f58a7f05252b47!2sNirala%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div id="contact" className="relative w-full py-24 px-6 bg-[#fcfdfe] text-gray-900 overflow-hidden">

      {/* 🚀 FLOATING WHATSAPP */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[999] bg-[#25D366] text-white p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-all"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={32} />
      </motion.a>

      {/* 🎯 HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-600 font-black tracking-[0.2em] uppercase text-xs mb-4"
        >
          Connect With Us
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-5xl font-black tracking-tighter"
        >
          Get In  <span className="text-blue-600"> Touch.</span>
        </motion.h2>
        <div className="w-24 h-2 bg-blue-600 mx-auto mt-6 rounded-full shadow-lg shadow-blue-100"></div>
      </div>

      <div className="max-w-[1400px] mx-auto">

        {/* 📱 INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-400 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <FaPhoneAlt size={20} />
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Direct Line</p>
            <p className="text-xl font-black">+91 99188 59659</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col items-center text-center group hover:border-indigo-400 transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <FaHeadset size={20} />
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Technical Support</p>
            <p className="text-xl font-black uppercase tracking-tighter text-sm md:text-base"> suport@anulipi.com</p>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col items-center text-center group hover:border-emerald-400 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <FaEnvelope size={20} />
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Sales Inquiry</p>
            <p className="text-xl font-black uppercase tracking-tighter text-sm md:text-base">sales@anulipi.com</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ✉️ MODERN FORM WITH VISIBLE BORDERS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[3rem] border border-gray-200 shadow-xl shadow-blue-900/5"
          >
            <h3 className="text-3xl font-black mb-8 text-gray-900">Get Technical Support</h3>
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder=" Name"
                  className="w-full px-6 py-5 bg-white rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-gray-800 placeholder:text-gray-400 shadow-sm"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full px-6 py-5 bg-white rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-gray-800 placeholder:text-gray-400 shadow-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-5 bg-white rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-gray-800 placeholder:text-gray-400 shadow-sm"
              />
              <textarea
                rows="4"
                placeholder="Describe your requirements..."
                className="w-full px-6 py-5 bg-white rounded-2xl border-2 border-gray-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-bold text-gray-800 placeholder:text-gray-400 shadow-sm"
              ></textarea>
              <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-sm flex items-center justify-center gap-4 hover:bg-gray-900 transition-all shadow-xl shadow-blue-200 active:scale-95">
                DISPATCH MESSAGE <FaPaperPlane />
              </button>
            </form>
          </motion.div>

          {/* 🗺️ LOCATION BOX */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <div className="flex-1 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl min-h-[400px] relative">
              <iframe
                title="Exact Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

            <div className="bg-gray-900 p-8 rounded-[2.5rem] flex items-center gap-6 text-white shadow-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h4 className="font-black text-xl mb-1 text-blue-400 uppercase tracking-tighter">Anulipi Technology</h4>
                <p className="text-gray-400 font-bold leading-relaxed">
                  C-187, Nirala Nagar, Lucknow, <br />Uttar Pradesh 226020
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;