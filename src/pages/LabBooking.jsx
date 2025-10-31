import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LabBooking = () => {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-5xl">
          
          {/* Left Image Section */}
          <div className="hidden md:block">
            <img
              src="https://static.vecteezy.com/system/resources/previews/003/410/952/large_2x/medical-laboratory-microscope-in-chemistry-biology-lab-test-photo.jpg"
              alt="Lab"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right Form Section */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Lab Test Booking
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input type="text" placeholder="Enter your name" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone</label>
                <input type="text" placeholder="Enter your phone number" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Date</label>
                  <input type="date" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Time</label>
                  <input type="text" placeholder="e.g. 10:00 AM - 11:00 AM" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Test</label>
                <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none">
                  <option value="">-- Select a Test --</option>
                  <option value="Blood Sugar Test">Blood Sugar Test</option>
                  <option value="Cholesterol Test">Cholesterol Test</option>
                  <option value="Thyroid Test">Thyroid Test</option>
                  <option value="Complete Blood Count">Complete Blood Count</option>
                  <option value="Vitamin D Test">Vitamin D Test</option>
                </select>
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-500 transition"
                >
                  Book Test
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default LabBooking;
