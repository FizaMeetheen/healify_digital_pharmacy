import React from 'react'

function AdminLab() {
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
                <tr className="border-b border-gray-100 hover:bg-teal-50 transition">
                  <td className="py-3 px-4 text-gray-700">1</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">Akash</td>
                  <td className="py-3 px-4 text-gray-600">akash@gmail.com</td>
                  <td className="py-3 px-4 text-gray-600">93187637181</td>
                  <td className="py-3 px-4 text-gray-600">Blood Sugar Test</td>
                  <td className="py-3 px-4 text-gray-600">2025-11-02</td>
                  <td className="py-3 px-4 text-gray-600">10:00 AM - 11:00 AM</td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-teal-50 transition">
                  <td className="py-3 px-4 text-gray-700">2</td>
                  <td className="py-3 px-4 text-gray-800 font-medium">Neha</td>
                  <td className="py-3 px-4 text-gray-600">neha@gmail.com</td>
                  <td className="py-3 px-4 text-gray-600">9876543210</td>
                  <td className="py-3 px-4 text-gray-600">Cholesterol Test</td>
                  <td className="py-3 px-4 text-gray-600">2025-11-03</td>
                  <td className="py-3 px-4 text-gray-600">09:00 AM - 10:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLab
