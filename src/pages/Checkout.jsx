import React from 'react'
import Header from '../components/Header'

function Checkout() {
  return (
    <>
    <Header/>
    <div className='min-h-screen bg-grey-50'>
                <div className='container mx-auto px-10 py-10 '>
                    <h1 className='text-3xl font-semibold mb-3 text-gray-800'>Checkout</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        <div className='shadow-md lg:col-span-2 px-3 py-3 rounded-lg h-fit bg-blue-50'>
                          <h2 className='text-xl font-semibold mb-4'>Delivery Address</h2>
                          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            <div>
                              <label className='block text-sm font-medium mb-1'>First Name</label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                            <div>
                              <label className='block text-sm font-medium mb-1'>Last Name</label>
                              <input required type="text" className='w-full border rounded-lg px-3 py-1'/>
                            </div>
                          </div>
                           
                        </div>
                        <div className='shadow-md p-6 rounded-lg  '>
                            <h2 className='text-xl'>Order Summary</h2>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default Checkout