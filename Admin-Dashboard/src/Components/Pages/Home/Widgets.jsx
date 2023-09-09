import React from 'react'
import {GrMoney} from "react-icons/gr"
import {FaUserFriends,FaUsers,FaShoppingBag} from "react-icons/fa"

const Widgets = () => {
  return (
 <div className='flex justify-between my-5 '>

   {/* First  */}
 <div className='flex items-center m-5 bg-gray-100 shadow-lg rounded'>
  <div className='mx-5'>
  <p className='text-lg text-gray-500'>TODAY'S MONEY</p>
  <h1 className='text-xl font-bold'>$53,000</h1>
  <p className='my-2 text-green-600'>+5% since yesterday</p>
  </div>
  <div className='mx-5'>
  <GrMoney className='mb-8 text-2xl'/>
  </div>
   </div>

  {/* Second */}
  <div className='flex items-center m-5 bg-gray-100  shadow-lg rounded'>
  <div className='mx-5'>
  <p className='text-lg text-gray-500'>TODAY'S USER</p>
  <h1 className='text-xl font-bold'>2,300</h1>
  <p className='my-2 text-green-600'>+55% since last week</p>
  </div>
  <div className='mx-5'>
  <FaUserFriends className='mb-8 text-2xl'/>
  </div>
   </div>

   {/* Third */}
  <div className='flex items-center m-5 bg-gray-100  shadow-lg rounded'>
  <div className='mx-5'>
  <p className='text-lg text-gray-500'>NEW CLIENTS</p>
  <h1 className='text-xl font-bold'>+3,462</h1>
  <p className='my-2 text-green-600'>-2% since last quarter</p>
  </div>
  <div className='mx-5'>
  <FaUsers className='mb-8 text-2xl'/>
  </div>
   </div>

   {/* Fourth */}
  <div className='flex items-center m-5 bg-gray-100  shadow-lg rounded'>
  <div className='mx-5'>
  <p className='text-lg text-gray-500'>SALES</p>
  <h1 className='text-xl font-bold'>$103,430</h1>
  <p className='my-2 text-green-600'>+5% than last month</p>
  </div>
  <div className='mx-5'>
  <FaShoppingBag className='mb-8 text-2xl'/>
  </div>
   </div>

    </div>
  )
}

export default Widgets
