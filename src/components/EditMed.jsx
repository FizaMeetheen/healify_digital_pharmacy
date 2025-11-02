import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { editMedicineAPI } from "../service/allAPI";
import Swal from "sweetalert2";

const EditMed = ({ seteditMedicine, seteditId, editId, setadminInput, adminInput, getMedicine }) => {
    const categories = [
        "Personal Care",
        "Nutrition supplements",
        "Ayurvedic Products",
        "Mother and Baby Care",
        "Eye Care Products",
        "Cold & Cough Products",
        "Health Care Devices",
        "Elderly Care",
    ];

    const handleEditMedicine = async (editId) => {
        try {
            const result = await editMedicineAPI(editId, adminInput);
            if (result.status === 200) {
                seteditMedicine(false);
                seteditId(null);
                Swal.fire({
                    title: "Success!",
                    text: "Medicine Updated Successfully!",
                    icon: "success",
                    confirmButtonText: "Back",
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
                getMedicine();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...Error in updation",
                    text: "Something went wrong!",
                });
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setadminInput({ ...adminInput, [name]: value });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-center items-center z-50">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative"
            >
                {/* Close Button */}
                <button
                    onClick={() => seteditMedicine(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                >
                    <FaTimes />
                </button>

                {/* Header */}
                <h2 className="text-2xl font-bold text-center mb-6 text-teal-600">
                    Edit Medicine
                </h2>

                {/* Form Fields */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            name="name"
                            value={adminInput.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter medicine name"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Price (₹)
                        </label>
                        <input
                            name="price"
                            value={adminInput.price}
                            onChange={handleChange}
                            type="number"
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Brand</label>
                        <input
                            name="brand"
                            value={adminInput.brand}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter brand name"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Used For
                        </label>
                        <input
                            name="usedFor"
                            value={adminInput.usedFor}
                            onChange={handleChange}
                            type="text"
                            placeholder="E.g. Fever, Cold..."
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Precautions
                        </label>
                        <textarea
                            name="precuations"
                            value={adminInput.precuations}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Enter precautions"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Side Effects
                        </label>
                        <textarea
                            name="sideEffects"
                            value={adminInput.sideEffects}
                            onChange={handleChange}
                            rows="2"
                            placeholder="Enter side effects"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Category
                        </label>
                        <select
                            name="category"
                            value={adminInput.category}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        >
                            <option value="">Select category</option>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Image URL
                        </label>
                        <input
                            name="image"
                            value={adminInput.image}
                            onChange={handleChange}
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-400 outline-none"
                        />
                    </div>
                </div>

                {/* Update Button */}
                <motion.button
                    onClick={() => handleEditMedicine(editId)}
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition"
                >
                    <FaCheckCircle className="inline mr-2" />
                    Update Medicine
                </motion.button>
            </motion.div>
        </div>
    );
};

export default EditMed;
