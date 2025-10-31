import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <>
    <Header/>
    <div className='min-h-screen bg-grey-50'>
                <div className='container mx-auto px-10 py-10 '>
                    <h1 className='text-3xl font-semibold mb-3 text-gray-800'>Checkout</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className='shadow-md lg:col-span-2 px-3 py-3 rounded-lg h-fit'>
                          <h2 className='text-xl font-semibold mb-4'>Delivery Address</h2>
                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                              <label className='block text-sm font-medium mb-1'>First Name <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>Last Name <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div className='sm:col-span-2'>
                              <label className='block text-sm font-medium mb-1'>Street Address<span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>City <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>State<span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>Pin Code <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>Phone <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                          </div>
                          <h2 className='text-xl font-semibold mb-4 mt-8'>Payment Details</h2>
                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div className='sm:col-span-2'>
                              <label className='block text-sm font-medium mb-1'>Cardholder Name<span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div className='sm:col-span-2'>
                              <label className='block text-sm font-medium mb-1'>Card Number<span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>Expiry Date <span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>CVV<span className='text-red-600'>*</span></label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                          </div>
                          
                        </div>

                        <div className='shadow-md p-6 rounded-lg p-6 h-fit '>
                            <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>
                            <div className='space-y-2 text-sm'>
                              <div className='flex justify-between'><span> Subtotal</span> <span className='font-medium'>50</span></div>
                              <div className='flex justify-between'><span> Shipping</span> <span className='font-medium'>Free</span></div>
                              <div className='flex justify-between'><span> Tax</span> <span className='font-medium'>6</span></div>
                              <div className='border-t pt-2 flex justify-between text-lg font-semibold'><span>Total</span><span>56</span></div>
                            </div>
                            <Link className='mt-6 flex  bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors pl-30'>Place Order</Link>
                            <p className='text-xs mt-4 text-gray-500'>By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Checkout