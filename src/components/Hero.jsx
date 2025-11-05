import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage2.png"; // Desktop image
import heroMobile from "../assets/heroMobile.png"; // Mobile image

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start px-10 md:px-20"
      style={{
        marginTop: "0",
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        filter: "contrast(1.15)",
      }}
    >
      {/* Mobile background */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: `url(${heroMobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Desktop Button (unchanged) */}
      <div className="hidden md:block mt-6">
        <Link to="/contact">
          <button className="mt-67 ml-38 w-full bg-[#1c4392e7] hover:bg-[#001b73] text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Contact Us
          </button>
        </Link>
      </div>

      {/* Mobile Text + Button */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full md:hidden px-4">
        <h1 className="text-5xl font-bold text-[#001b73] leading-tight">
          ONE STOP <span className="text-[#0077b6]">SOLUTION</span>
        </h1>
        <p className="mt-2 text-[#0d3b66] text-base">
          to all your medicine needs
        </p>
        <p className="mt-1 text-gray-700 text-sm">
          We’re available 24/7, Order Now &
        </p>
        <Link to="/contact">
          <button className="mt-6 bg-[#1c4392e7] hover:bg-[#001b73] text-white px-6 py-3 rounded-full font-semibold shadow-md">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
