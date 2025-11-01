import React, { useEffect, useState } from 'react'
import { labManageAPI } from '../../service/allAPI'

function AdminLab() {
  const [labTest, setlabTest] = useState([])

  const getLabDetails = async () => {
    const result = await labManageAPI()
    console.log(result);
    setlabTest(result?.data)
  }

  useEffect(() => {
    getLabDetails()
  }, [])

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-500">
          Lab Booking Details
        </h2>

        {/* Table */}
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-teal-50 text-teal-700">
                  <th className="py-3 px-4 font-semibold">#</th>
                  <th className="py-3 px-4 font-semibold">Name</th>
                  <th className="py-3 px-4 font-semibold">Email</th>
                  <th className="py-3 px-4 font-semibold">Phone</th>
                  <th className="py-3 px-4 font-semibold">Test Name</th>
                  <th className="py-3 px-4 font-semibold">Date</th>
                  <th className="py-3 px-4 font-semibold">Time</th>
                </tr>
              </thead>

              <tbody>

                {labTest.map((lab, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-teal-50 transition">
                    <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">{lab.name}</td>
                    <td className="py-3 px-4 text-gray-600">{lab.email}</td>
                    <td className="py-3 px-4 text-gray-600">{lab.phone}</td>
                    <td className="py-3 px-4 text-gray-600">{lab.test_name}</td>
                    <td className="py-3 px-4 text-gray-600">{lab.date}</td>
                    <td className="py-3 px-4 text-gray-600">{lab.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {labTest.length === 0 && (
              <p className="text-center py-4 text-gray-500 italic">No lab bookings yet.</p>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLab
