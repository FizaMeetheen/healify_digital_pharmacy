/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import personalCare from "../assets/PC.webp";
import nutritionSupplements from "../assets/NS.webp";
import ayurvedicProducts from "../assets/AP.webp";
import motherAndBaby from "../assets/MotherAndChils.webp";
import eyeCare from "../assets/EC.webp";
import coughAndCold from "../assets/CC.webp";
import healthProducts from "../assets/HD.webp";
import elderlyCare from "../assets/elder.webp";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const Home = () => {
  const categories = [
    { name: "Personal Care", img: personalCare },
    { name: "Nutrition Supplements", img: nutritionSupplements },
    { name: "Ayurvedic Products", img: ayurvedicProducts },
    { name: "Mother & Baby Care", img: motherAndBaby },
    { name: "Eye Care Products", img: eyeCare },
    { name: "Cold & Cough Products", img: coughAndCold },
    { name: "Health Care Devices", img: healthProducts },
    { name: "Elderly Care", img: elderlyCare },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeInOut" } },
  };
  return (
    <>
      <Header />
      <div className="font-[Poppins]">
        {/* HERO SECTION */}
        <HeroSection />

        {/* CATEGORIES SECTION */}
        <section className="py-20 bg-[#f9fbff]">
          <h2 className="text-4xl font-bold text-[#001b73] ml-10 mb-12">
            Browse by Health Category
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-20">
            {categories.map((item) => (
              <div
                key={item.name}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-44 w-full object-cover brightness-110 hover:brightness-125 transition-all duration-700"
                />
                <div className="py-4 text-center">
                  <h3 className="font-semibold text-[#001b73] text-lg">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE HEALIFY (Animated) */}
        <motion.section
          className="py-20 bg-[#f0f5ff] text-center px-6 md:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold text-[#001b73] mb-14">
            Why Choose Healify?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Certified Medicines",
                desc: "We deliver only 100% genuine and verified products.",
                icon: "💊",
              },
              {
                title: "Fast Delivery",
                desc: "Get your orders at your doorstep within hours.",
                icon: "🚚",
              },
              {
                title: "Trusted by Thousands",
                desc: "Our platform is loved by thousands of customers daily.",
                icon: "🤝",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-700"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl text-[#001b73] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* TOP SELLING PRODUCTS (Static) */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold text-[#001b73] mb-12">
            Top Selling Generic Medicines
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-6 md:px-20">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-[#f8faff] shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <img
                  src={`https://images.unsplash.com/photo-1588776814546-3e8e058f3e3e?random=${i}`}
                  alt="Medicine"
                  className="h-44 w-full object-cover brightness-110 hover:brightness-125 transition-all duration-700"
                />
                <div className="py-4">
                  <h3 className="font-semibold text-[#001b73]">
                    Generic Medicine {i + 1}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">For daily wellness</p>
                  <button className="mt-3 bg-[#001b73] text-white px-5 py-2 rounded-full text-sm hover:bg-[#0033a0] transition-all duration-500">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT US*/}
        <AboutUs/>

        {/* CUSTOMER REVIEWS (Static) */}
        <section className="py-20 bg-[#001b73] text-white text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8 px-6 md:px-20">
            {[
              {
                name: "Arjun M",
                review:
                  "Healify made ordering medicines so easy! Got my products delivered in less than a day.",
              },
              {
                name: "Fathima R",
                review:
                  "Excellent quality and service. I love their user-friendly interface and quick support.",
              },
              {
                name: "Kiran S",
                review:
                  "The best online pharmacy experience I’ve ever had — smooth, reliable, and affordable!",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white text-[#001b73] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-700"
              >
                <p className="italic text-gray-700 mb-3">“{item.review}”</p>
                <h4 className="font-semibold text-lg">{item.name}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Home;
