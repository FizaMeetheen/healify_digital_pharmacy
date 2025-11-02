import React, { useEffect, useState } from "react";
import { deleteCartAPI, getCartDetailsAPI } from "../../service/allAPI";
import Swal from "sweetalert2";

function AdminCart() {
    const [cartData, setcartData] = useState([]);

    const getCartData = async () => {
        try {
            const res = await getCartDetailsAPI();
            console.log(res);
            setcartData(res.data || []);
        } catch (err) {
            console.error("Error fetching cart data:", err);
        }
    };

    useEffect(() => {
        getCartData();
    }, []);

    const handleclearCart = async (id) => {
        const res = await deleteCartAPI(id)
        console.log(res);
        Swal.fire({
            title: "Good job!",
            text: "Cart Data Deleted successfully!",
            icon: "success"
        });
        getCartData()
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <h1 className="text-3xl font-bold text-teal-600 mb-8 text-center">
                🛒 User Cart Details
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cartData.length > 0 ? (
                    cartData.map((cart) => (
                        <div
                            key={cart.id}
                            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
                        >
                            {/* User Info */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    👤 {cart.userName}
                                </h2>
                                <span className="text-sm text-gray-500">{cart.gmail}</span>
                            </div>

                            {/* Ordered Items */}
                            <div className="border-t border-gray-200 pt-4 space-y-3">
                                {cart.orderedItems?.length > 0 ? (
                                    cart.orderedItems.map((order, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                                        >
                                            <div>
                                                <p className="font-medium text-gray-800">
                                                    {order.name}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Qty: {order.quantity} × ₹{order.price}
                                                </p>
                                            </div>
                                            <p className="font-semibold text-teal-600">
                                                ₹{order.price * order.quantity}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500 italic text-center">
                                        No items in this cart
                                    </p>
                                )}
                            </div>

                            {/* Total Section */}
                            <div className="mt-4 flex justify-between items-center">
                                <span className="font-semibold text-gray-700">Total:</span>
                                <span className="font-bold text-green-600 text-lg">
                                    ₹
                                    {cart.orderedItems?.reduce(
                                        (sum, item) => sum + item.price * item.quantity,
                                        0
                                    ) || 0}
                                </span>
                            </div>

                            {/* Action Button */}
                            <div className="mt-5 flex justify-end">
                                <button onClick={()=>handleclearCart(cart.id)} className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition">
                                    Clear Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">
                        No cart data available.
                    </p>
                )}
            </div>
        </div>
    );
}

export default AdminCart;
