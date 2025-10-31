/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

const AdminMedicines = () => {
  const categories = ["Baby Products", "Nutritious", "Ayurvedic", "Capsules"];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-3xl mb-8">
        <Link
          to="/adminHome"
          className="text-teal-600 hover:text-teal-700 flex items-center font-semibold"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-green-500">
          Manage Medicines
        </h2>
      </div>

      {/* Form Card */}
      <motion.div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter medicine name"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price (₹)</label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Precautions */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Precautions</label>
            <textarea
              placeholder="Enter precautions"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              rows="2"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Used For */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Used For</label>
            <input
              type="text"
              placeholder="E.g. Fever, Pain Relief..."
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Side Effects */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Side Effects</label>
            <textarea
              placeholder="Enter side effects"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              rows="2"
            ></textarea>
          </div>

          {/* Brand */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Brand</label>
            <input
              type="text"
              placeholder="Enter brand name"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none">
              <option value="">Select category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <FaCheckCircle className="inline mr-2" /> Save Medicine
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AdminMedicines;
