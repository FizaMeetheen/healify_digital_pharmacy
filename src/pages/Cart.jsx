import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { getCartItemsAPI } from '../service/allAPI'

function Cart() {
    const [cart, setCart] = useState([])
    const [subtotal, setSubTotal] = useState(0)

    //fetch cart 
    const fetchCartItems = async () => {
        const userId = localStorage.getItem("userId")
        if (!userId) return alert("please login in first")
        try {
            const response = await getCartItemsAPI(userId)
            setCart(response.data.Cart || [])
        } catch (error) {
            console.log("Error fetching cart", error);
        }
    }
    useEffect(() => {
        fetchCartItems()
    }, [])

    //calculate
    useEffect(() => {
        const total = cart.reduce((prev, curr) => prev + (curr.price * curr.quantity))
        setSubTotal(total)
    }, [cart])

    return (
        <>
            <Header />
            <div className='min-h-screen bg-grey-50'>
                <div className='w-full bg-linear-to-r from-cyan-300 to-cyan-500 h-50 mb-8 flex justify-center items-center'>
                    <div className='container '>
                        <h1 className='text-center text-5xl  font-bold text-white'>My Cart</h1>
                    </div>
                </div>
                <div className='container mx-auto px-10 py-10 '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                        <div className='shadow-md lg:col-span-2 px-3 py-3 rounded-lg h-fit border '>

                            {cart?.length > 0 ? cart.map((item) => (
                                <div key={item.medicineId} className='items-center gap-4 flex border-b py-3  '>
                                    <img src={item.image} alt="" className='w-20 h-20' />
                                    <div className='flex-1' >
                                        <h3 className='font-semibold'>{item.name}</h3>
                                        <p className='text-sm'>{item.brand}</p>
                                        <div className='mt-2 flex items-center gap-3'>
                                            <button className='border w-8 h-8 items-center justify-center rounded-lg'>-</button>
                                            <span className='text-center w-4'>{item.quantity}</span>
                                            <button className='border w-8 h-8 items-center justify-center rounded-lg'>+</button>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='font-sem-bold mr-1'>₹{item.price * item.quantity}</div>
                                        <button><FontAwesomeIcon icon={faTrash} className='text-red-500' /></button>
                                    </div>
                                </div>
                            ))
                        :
                        <p className='text-center py-10'>Your cart is empty</p>
                        }
                        </div>
                        <div className='shadow-md p-6 rounded-lg  '>
                            <h2 className='text-xl'>Order Summary</h2>
                            <div className='text-sm m-2 '>
                                <div className='flex justify-between'>subtotal <span className='font-medium'>₹{subtotal}</span></div>
                                <div className='flex justify-between'>tax <span className='font-medium'>₹{Math.round(subtotal * 0.05)}</span></div>
                                <div className='border-t mt-2 pt-2 flex justify-between text-lg font-semibold'>Total <span>56</span></div>
                            </div>
                            <Link to="/checkout" className='block mt-6 text-center px-6 py-2 rounded bg-blue-900 text-white'>checkout</Link>
                            <Link to={"/medicine"} className='block mt-6 text-center px-6 py-2 rounded bg-gray-400'>continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Cart