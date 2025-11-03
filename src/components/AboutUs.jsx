/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/logo.png"; // sample image

const AboutUs = () => {
  return (
    <section className="w-full py-16 bg-linear-to-b from-white to-blue-50 font-[Outfit]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12">
        
        {/* Image Section */}
        <motion.div
          className="flex-1 mr-30"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={aboutImg}
            alt="Healify About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[#001B73] mb-4">
            About <span className="text-[#0B5ED7]">Healify</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Healify is a modern <span className="font-medium text-[#003399]">digital pharmacy </span> 
            redefining how people access medicines. We combine technology with trusted 
            neighborhood medical stores to ensure you get your medicines 
            quickly and reliably.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6 pb-10">
            With stores established in multiple cities, Healify delivers medicines 
            directly from your <span className="font-medium text-[#0B3C91]">nearest Healify Medicals</span> store — 
            ensuring authentic products, fast delivery, and expert care every time.
          </p>

          
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
