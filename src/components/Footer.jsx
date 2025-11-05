import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import healifyLogo from "../assets/logo.png"; // your logo path
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#e4f4f9] text-[#0a2e43] py-10 px-8 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Logo and Address */}
        <div>
          <img src={healifyLogo} alt="Healify" className="w-44 mb-4" />
          <p className="text-sm leading-relaxed">
            HealifyMeds - Corporate Office<br />
            Marasi Dr - Business Bay<br />
            Bay Square
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="bg-[#0a2e43] text-white p-2 rounded-full hover:bg-[#007b8f]">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#0a2e43] text-white p-2 rounded-full hover:bg-[#007b8f]">
              <FaInstagram />
            </a>
            <a href="#" className="bg-[#0a2e43] text-white p-2 rounded-full hover:bg-[#007b8f]">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-[#0a2e43] text-white p-2 rounded-full hover:bg-[#007b8f]">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Who We Are */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to={"/home"} href="#" className="hover:underline">About Healify</Link></li>
            <li><Link to={"/contact"} className="hover:underline">Contact Us</Link></li>
            <li><Link to={"/storelocator"} className="hover:underline">Store Locator</Link></li>
          </ul>
        </div>

        {/* Our Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigate</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to={"/home"} className="hover:underline">Home</Link></li>
            <li><Link to={"/cart"} className="hover:underline">Cart</Link></li>
            <li><Link to={"/products"} className="hover:underline">Medicines</Link></li>
            <li><Link to={"/labtest"} className="hover:underline">Lab Test</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><Link to={"/products"} className="hover:underline">Browse All Medicines</Link></li>
            <li><Link to={"/category"} className="hover:underline">Browse By Category</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-500">
        © 2025 Healify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
