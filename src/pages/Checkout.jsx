import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

function Checkout() {
  const[userInput, setUserInput] = useState({
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    phone: '',
    cardholdername: '',
    cardnumber:'',
    exipry:'',
    cvc:''
  })
  const [paymentMethod, setPaymentMethod] = useState('cod')
  return (
    <>
      <Header />
      <div className='min-h-screen bg-grey-50'>
        <div className='w-full bg-linear-to-r from-cyan-300 to-cyan-500 h-50 mb-8 flex justify-center items-center'>
          <div className='container '>
            <h1 className='text-center text-5xl  font-bold text-white'>Checkout</h1>
          </div>
        </div>

        <div className='container mx-auto px-4 pb-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4'>Billing Address</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>First Name</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Last Name</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Address</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>City</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>State</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Zip Code</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>Phone</label>
                  <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                </div>
              </div>

              <h2 className='text-xl font-semibold text-gray-800 mb-4 mt-8'>Payment Method</h2>
              <div className='bg-white border border-gray-100 rounded-lg p-4'>
                <label className='flex items-center space-x-3'>
                  <input type="radio" name='payment' value="cod" checked={paymentMethod == 'cod'} onChange={() => setPaymentMethod('cod')} className='form-radio h-4 w-4 text-blue-500' />
                  <span className='text-sm font-medium text-gray-800'>Cash on Delivery (COD)</span>
                </label>
                <label className='flex items-center space-x-3'>
                  <input type="radio" name='payment' value="card" checked={paymentMethod == 'card'} onChange={() => setPaymentMethod('card')} className='form-radio h-4 w-4 text-blue-500' />
                  <div className='flrx items-center space-x-3'>
                    <span className='text-sm font-medium text-gray-800'>Pay with Card <FontAwesomeIcon icon={faCreditCard} /></span>
                  </div>
                </label>
                {paymentMethod === 'card' && (
                  <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className='sm:col-span-2'>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Cardholder Name</label>
                      <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                    <div className='sm:col-span-2'>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Card Number</label>
                      <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>Expiry (MM/YY)</label>
                      <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700 mb-1'>CVC</label>
                      <input type="text" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='bg-white border border-gray-200 shadow-sm rounded-xl p-6 h-fit'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4'>Order Review</h2>
              <div className='space-y-4'>
                <div className='w-16 h-16 rounded-md bg-white shrink-0 flex items-center justify-center'>
                  <img src="https://ayushcare.in/cdn/shop/products/Calpol500.jpg?v=1747141376" alt="" height={"100px"} width={"100px"} />
                </div>
                <div className='flex-1'>
                  <div className='block text-sm font-medium text-gray-800'>name</div>
                  <div className='text-sm text-gray-500'>Qty: <span>1</span></div>
                </div>
                <div className='text-sm font-medium text-gray-800'>price</div>
              </div>

              <div className='mt-6 text-sm space-y-2 border-t pt-4'>
                <div className='flex justify-between text-gray-600'><span>Subtotal</span><span className='font-medium'>50</span></div>
                <div className='flex justify-between text-gray-600'><span>Tax</span><span className='font-medium'>56</span></div>
                <div className='flex justify-between border-t pt-2 text-lg font-semibold'><span>Grand Total</span><span>56</span></div>
              </div>
              <div className='mt-4'>
                <label className='inline-flex items-center'>
                  <input type="checkbox" className='form-checkbox h-4 w-4 text-blue-500' />
                  <span className='ml-2 text-sm text-gray-700'>Please check box to acknowledge Privacy & Policy.</span>
                </label>
              </div>
              <div className='mt-6'>
                <Link className='w-full rounded-xl shadow-sm text-white font-semibold py-3 px-4 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'>Pay Now</Link>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Checkout