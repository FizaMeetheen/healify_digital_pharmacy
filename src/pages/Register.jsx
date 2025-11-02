import React from "react";
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaPills, FaFlask, FaPlus } from "react-icons/fa";
import healifyLogo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAPI } from "../service/allAPI";
import axios from "axios";
import Swal from "sweetalert2";

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

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gmail: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateUserId = () => "u" + Math.floor(Math.random() * 100000);

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, gmail, password } = formData;
    if (!name || !phone || !gmail || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields!",
      });
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3000/user?phone=${phone}`);
      if (res.data.length > 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User already exists!"
        });
        return;
      }

      // Create new user object
      const newUser = {
        id: generateUserId(),
        name,
        phone,
        gmail,
        password,
        Cart: [],
        status: "Pending",
      };

      await registerUserAPI(newUser);
      Swal.fire({
        title: "Registration successful!",
        icon: "success"
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error registering user"
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Background */}
      <div className="relative w-full md:w-1/2 bg-linear-to-br from-cyan-600 via-teal-500 to-green-500 flex items-center justify-center overflow-hidden">
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
        <FloatingIcon Icon={FaHeartbeat} xStart="20%" yStart="25%" size="3rem" delay={0} />
        <FloatingIcon Icon={FaPills} xStart="70%" yStart="35%" size="3.5rem" delay={1.5} />
        <FloatingIcon Icon={FaFlask} xStart="30%" yStart="70%" size="3.2rem" delay={2} />
        <FloatingIcon Icon={FaPlus} xStart="75%" yStart="65%" size="2.8rem" delay={2.5} />
        <FloatingIcon Icon={FaHeartbeat} xStart="50%" yStart="10%" size="2.5rem" delay={3} />
        <h1 className="text-white text-4xl font-bold tracking-wide z-10 text-center px-4">
          Join Healify Today.
        </h1>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white px-8 py-12">
        <motion.img
          src={healifyLogo}
          alt="Healify Logo"
          className="w-56 mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <motion.div
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Your Account
          </h2>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="email"
              name="gmail"
              placeholder="Gmail"
              value={formData.gmail}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-all"
            >
              Register
            </button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <p>
              Already have an account?{" "}
              <Link to={"/"} className="text-teal-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
