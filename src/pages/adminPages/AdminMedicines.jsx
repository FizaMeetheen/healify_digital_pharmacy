/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { addMedicineAPI, deleteMedicineAPI, editMedicineAPI, showMedicineAPI } from "../../service/allAPI";
import Swal from 'sweetalert2'
import { useState } from "react";
import EditMed from "../../components/EditMed";

const AdminMedicines = () => {
  const categories = ["Personal Care", "Nutrition supplements", "Ayurvedic Products", "Mother and Baby Care", " Eye Care Products", "Cold & Cough Products", "Health Care Devices", "Elderly Care"];

  const [medicine, setMedicine] = useState([])
  const [adminInput, setadminInput] = useState({
    name: "",
    image: "",
    price: "",
    precuations: "",
    usedFor: "",
    sideEffects: "",
    brand: "",
    category: ""
  })

  const [editMedicine, seteditMedicine] = useState(false)
  const [editId, seteditId] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setadminInput({ ...adminInput, [name]: value })
  }

  //adding medicine 
  const handleaddMedicine = async () => {
    const result = await addMedicineAPI(adminInput)
    console.log(result);
    Swal.fire({
      title: "Good job!",
      text: "Medicine added successfully!",
      icon: "success"
    });
    setadminInput({
      name: "",
      image: "",
      price: "",
      precuations: "",
      usedFor: "",
      sideEffects: "",
      brand: "",
      category: "",
    });
    getMedicine()
  }

  //getMedicines
  const getMedicine = async () => {
    const result = await showMedicineAPI()
    console.log(result);
    setMedicine(result?.data)
  }

  useEffect(() => {
    getMedicine()
  }, [])

  // edit medicines

  const handleEdit = async (med) => {
    seteditId(med.id)
    setadminInput({
      name: med.name,
      image: med.image,
      price: med.price,
      precuations: med.precuations,
      usedFor: med.usedFor,
      sideEffects: med.sideEffects,
      brand: med.brand,
      category: med.category

    })
    seteditMedicine(true)
  }



  // delete medicines 
  const handledeleteMedicine = async (id) => {
    const result = await deleteMedicineAPI(id)
    console.log(result);
    Swal.fire({
      title: "Good job!",
      text: "Medicine Deleted successfully!",
      icon: "success"
    });
    getMedicine()
  }



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
      {!editMedicine ? (
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
              <input name="name" value={adminInput.name} onChange={handleChange}
                type="text"
                placeholder="Enter medicine name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price (₹)</label>
              <input name="price" value={adminInput.price} onChange={handleChange}
                type="number"
                placeholder="Enter price"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Precautions */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Precautions</label>
              <textarea name="precuations" value={adminInput.precuations} onChange={handleChange}
                placeholder="Enter precautions"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                rows="2"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Image URL</label>
              <input name="image" value={adminInput.image} onChange={handleChange}
                type="text"
                placeholder="Enter image URL"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Used For */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Used For</label>
              <input name="usedFor" value={adminInput.usedFor} onChange={handleChange}
                type="text"
                placeholder="E.g. Fever, Pain Relief..."
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Side Effects */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Side Effects</label>
              <textarea name="sideEffects" value={adminInput.sideEffects} onChange={handleChange}
                placeholder="Enter side effects"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                rows="2"
              ></textarea>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Brand</label>
              <input name="brand" value={adminInput.brand} onChange={handleChange}
                type="text"
                placeholder="Enter brand name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
              />
            </div>

            {/* Category Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <select name="category" value={adminInput.category} onChange={handleChange} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none">
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
          <motion.button onClick={handleaddMedicine}
            whileHover={{ scale: 1.05 }}
            className="mt-8 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <FaCheckCircle className="inline mr-2" /> Add Medicine
          </motion.button>
        </motion.div>)
        :

       (
        <EditMed  //edit modal appears
          seteditMedicine={seteditMedicine}
          seteditId={seteditId}
          editId={editId}
          setadminInput={setadminInput}
          adminInput={adminInput}
          getMedicine={getMedicine} //passing props
        />
      )}

      {/* SHOW MEDICINES */}
      <div class="w-full max-w-6xl mt-12">
        <h3 class="text-2xl font-bold mb-6 text-gray-700">List of Medicines</h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {medicine.map((med) => (
            <motion.div whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 hover:shadow-2xl transition-all"
            >
              <img src={med.image} alt="Medicine" class="w-full h-40 object-cover rounded-xl mb-4" />

              <h4 class="text-lg font-semibold text-gray-800">{med.name}</h4>
              <p class="text-sm text-gray-500 mb-2">Brand: <span class="font-medium text-gray-700">{med.brand}</span></p>
              <p class="text-sm text-gray-500 mb-2">Used For: <span class="font-medium text-gray-700">{med.usedFor}</span></p>
              <p class="text-green-600 font-semibold text-lg mb-4">₹{med.price}</p>

              <div class="flex justify-between">
                <button onClick={() => handleEdit(med)} class="bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold px-4 py-1 rounded-lg  transition">Edit</button>
                <button onClick={() => handledeleteMedicine(med.id)} class="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">Delete</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



    </div>




  );
};

export default AdminMedicines;
