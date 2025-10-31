/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-5xl mb-8">
        <Link
          to="/adminHome"
          className="text-teal-600 hover:text-teal-700 flex items-center font-semibold"
        >
          <FaArrowLeft className="mr-2" /> Back to Dashboard
        </Link>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-500 to-green-500">
          Manage Users
        </h2>
      </div>

      {/* User Table Card */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50 text-teal-700">
                <th className="py-3 px-4 font-semibold">#</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* Row 1 (Pending) */}
              <tr className="border-b border-gray-100 hover:bg-teal-50 transition">
                <td className="py-3 px-4 text-gray-700">1</td>
                <td className="py-3 px-4 text-gray-800 font-medium">Amjad S</td>
                <td className="py-3 px-4 text-gray-600">amjad@healify.com</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                    Pending
                  </span>
                </td>
                <td className="py-3 px-4 flex justify-center space-x-3">
                  <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition">
                    Accept
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition">
                    Reject
                  </button>
                </td>
              </tr>

              {/* Row 2 (Approved) */}
              <tr className="border-b border-gray-100 hover:bg-teal-50 transition">
                <td className="py-3 px-4 text-gray-700">2</td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Fiza Meetheen
                </td>
                <td className="py-3 px-4 text-gray-600">fiza@healify.com</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    Approved
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-gray-400 italic">
                  No actions
                </td>
              </tr>

              {/* Row 3 (Rejected) */}
              <tr className="border-b border-gray-100 hover:bg-teal-50 transition">
                <td className="py-3 px-4 text-gray-700">3</td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Chinju Ann John
                </td>
                <td className="py-3 px-4 text-gray-600">chinju@healify.com</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-red-100 text-red-600">
                    Rejected
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-gray-400 italic">
                  No actions
                </td>
              </tr>

              {/* Row 4 (Approved) */}
              <tr className="hover:bg-teal-50 transition">
                <td className="py-3 px-4 text-gray-700">4</td>
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Akash Thilakan
                </td>
                <td className="py-3 px-4 text-gray-600">akash@healify.com</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white">
                    Approved
                  </span>
                </td>
                <td className="py-3 px-4 text-center text-gray-400 italic">
                  No actions
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
