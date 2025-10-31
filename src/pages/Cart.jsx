import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Cart() {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-grey-50'>
                <div className='container mx-auto px-10 py-10 '>
                    <h1 className='text-3xl font-semibold mb-3 text-gray-800'>Your Cart</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className='shadow-md lg:col-span-2 px-3 py-3 rounded-lg h-fit bg-blue-50'>
                            <div className='divide-y'>
                                <div className='items-center gap-4 flex '>
                                    <img src="https://ayushcare.in/cdn/shop/products/Calpol500.jpg?v=1747141376" alt="" className='w-20 h-20' />
                                    <div className='flex-1' >
                                        <h3 className='font-semibold'>name</h3>
                                        <p className='text-sm'>Brand</p>
                                        <div className='mt-2 flex items-center gap-3'>
                                            <button className='border w-8 h-8 items-center justify-center rounded-lg'>-</button>
                                            <span className='text-center w-4'>6</span>
                                            <button className='border w-8 h-8 items-center justify-center rounded-lg'>+</button>
                                        </div>
                                    </div>
                                    <div className='text-right'>
                                        <div className='font-sem-bold mr-1'>₹56</div>
                                        <button><FontAwesomeIcon icon={faTrash} className='text-red-500' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md p-6 rounded-lg  '>
                            <h2 className='text-xl'>Order Summary</h2>
                            <div className='text-sm m-2 '>
                                <div className='flex justify-between'>subtotal <span className='font-medium'>56</span></div>
                                <div className='flex justify-between'>tax <span className='font-medium'>5</span></div>
                                <div className='border-t mt-2 pt-2 flex justify-between text-lg font-semibold'>Total <span>61</span></div>
                            </div>
                            <Link to="/checkout" className='block mt-6 text-center px-6 py-2 rounded bg-blue-400'>checkout</Link>
                             <Link className='block mt-6 text-center px-6 py-2 rounded bg-gray-400'>continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart