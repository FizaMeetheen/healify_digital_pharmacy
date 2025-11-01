import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { acceptUserAPI, rejectUserAPI, userManageAPI } from "../../service/allAPI";


const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [acceptedUsers, setacceptedUsers] = useState([])
  const [rejectedUsers, setrejectedUsers] = useState([])

  const userManage = async () => {
    const result = await userManageAPI()
    console.log(result)
    setUsers(result?.data)
  }

  useEffect(() => {
    userManage()
  }, [])

  const handleAccept = async (id) => {
    await acceptUserAPI(id, { status: "Accepted" })
    alert("User Accepted Successfully!!")
    setacceptedUsers([...acceptedUsers, id])
    userManage()

  }

  const handleReject = async (id) => {
    await rejectUserAPI(id, { status: "Rejected" })
    alert("Oops...User got rejected !!")
    setrejectedUsers([...rejectedUsers, id])
    userManage()
  }

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

      {/* User Table */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-teal-50 text-teal-700">
                <th className="py-3 px-4 font-semibold">#</th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Phone</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 transition ${user.status === "Accepted"
                    ? "bg-green-50"
                    : user.status === "Rejected"
                      ? "bg-red-50"
                      : "hover:bg-teal-50"
                    }`}
                >
                  <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">{user.name}</td>
                  <td className="py-3 px-4 text-gray-600">{user.gmail}</td>
                  <td className="py-3 px-4 text-gray-600">{user.phone}</td>

                  {/* Status */}
                  <td className="py-3 px-4 text-center">
                    {user.status === "Accepted" ? (
                      <span className="text-green-600 font-semibold">Accepted</span>
                    ) : user.status === "Rejected" ? (
                      <span className="text-red-600 font-semibold">Rejected</span>
                    ) : (
                      <span className="text-gray-500 italic">Pending</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 flex justify-center space-x-3">
                    {user.status === "Accepted" || user.status === "Rejected" ? (
                      <span className="text-sm text-gray-400">No actions</span>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAccept(user.id)}
                          className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleReject(user.id)}
                          className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Empty state */}
          {users.length === 0 && (
            <p className="text-center py-4 text-gray-500">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
