import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [acceptedUsers, setacceptedUsers] = useState([])
  const [rejectedUsers , setrejectedUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/user")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err)
      )
  }, [])

  const handleAccept = (id) => {
    alert("User Accepted Successfully!!")
    setacceptedUsers([...acceptedUsers, id])

  }

  const handleReject = (id) => {
    alert("Oops...User got rejected !!")
    setrejectedUsers([...rejectedUsers,id])
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
                <th className="py-3 px-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>

              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-teal-50 transition">
                  <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">{user.name}</td>
                  <td className="py-3 px-4 text-gray-600">{user.gmail}</td>
                  <td className="py-3 px-4 text-gray-600">{user.phone}</td>

                  <td className="py-3 px-4 flex justify-center space-x-3">
                    {acceptedUsers.includes(user.id) ?
                      (<span className="text-green-600 font-semibold">Accepted</span>) :
                      rejectedUsers.includes(user.id) ? 
                      (<span className="text-red-600 font-semibold">Rejected</span>) :
                      (
                        <>
                          <button onClick={() => handleAccept(user.id)}
                            className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition"
                          >Accept </button>
                          <button onClick={() => handleReject(user.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition"
                          >
                            Reject
                          </button>
                        </>
                      )}





                  </td>

                </tr>
              ))
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
