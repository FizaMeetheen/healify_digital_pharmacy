/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaPills,
  FaFlask,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import healifyLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

// Floating icon component (animated background icons)
const FloatingIcon = ({ Icon, xStart, yStart, size, delay }) => (
  <motion.div
    className="absolute text-white/80"
    style={{ fontSize: size, left: xStart, top: yStart }}
    animate={{
      x: [0, 40, -40, 25, -25, 0],
      y: [0, -30, 30, -20, 20, 0],
      rotate: [0, 10, -10, 0],
      opacity: [0.7, 1, 0.8, 0.7],
    }}
    transition={{
      duration: 10,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon />
  </motion.div>
);

const AdminHome = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Section - Gradient Background + Floating Icons */}
      <div className="relative w-full md:w-1/2 bg-gradient-to-br from-cyan-600 via-teal-500 to-green-500 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [-60, 60, -60],
            y: [-40, 40, -40],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Icons */}
        <FloatingIcon Icon={FaPills} xStart="20%" yStart="25%" size="3rem" delay={0} />
        <FloatingIcon Icon={FaUsers} xStart="70%" yStart="35%" size="3.5rem" delay={1.5} />
        <FloatingIcon Icon={FaFlask} xStart="30%" yStart="70%" size="3.2rem" delay={2} />
        <FloatingIcon
          Icon={FaClipboardList}
          xStart="75%"
          yStart="65%"
          size="2.8rem"
          delay={2.5}
        />

        <h1 className="text-white text-4xl font-bold tracking-wide z-10 text-center px-4">
          Healify Admin Portal
        </h1>
      </div>

      {/* Right Section - Dashboard Area */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-8 py-12 overflow-y-auto">
        {/* Logo */}
        <motion.img
          src={healifyLogo}
          alt="Healify Logo"
          className="w-64 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Welcome Text */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-green-500 mb-10 text-center tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome Admin 👨‍⚕️
        </motion.h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
          {/* Manage Medicines */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-400 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">
              <FaPills />
            </div>
            <h3 className="text-lg font-semibold mb-2">Manage Medicines</h3>
            <Link
              to="/adminHome/adminMedicines"
              className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition"
            >
              Open
            </Link>
          </motion.div>

          {/* Manage Users */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-400 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">
              <FaUsers />
            </div>
            <h3 className="text-lg font-semibold mb-2">Manage Users</h3>
            <Link
              to="/adminHome/adminUsers"
              className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition"
            >
              Open
            </Link>
          </motion.div>

          {/* Lab Bookings */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-400 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">
              <FaFlask />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lab Bookings</h3>
            <Link
              to="#"
              className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition"
            >
              Open
            </Link>
          </motion.div>

          {/* Cart Bookings */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-teal-400 to-green-500 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition cursor-pointer"
          >
            <div className="text-4xl mb-3">
              <FaClipboardList />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cart Bookings</h3>
            <Link
              to="#"
              className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition"
            >
              Open
            </Link>
          </motion.div>
        </div>
        {/* Logout Button */}
        <Link
          to="/"
          className="mt-10 flex items-center text-red-500 font-semibold hover:text-red-600 transition cursor-pointer"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </Link>

      </div>
    </div>
  );
};

export default AdminHome;
