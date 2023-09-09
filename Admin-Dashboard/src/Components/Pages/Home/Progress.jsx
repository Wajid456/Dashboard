import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Progress = () => {
  return (
    <div className='m-5'>

   <div className='px-10 bg-white shadow-2xl'> 
   <h1 className='text-2xl mx-3 font-bold'>Total Revenue</h1>
   <div className='my-5 flex items-center justify-center'>
  <CircularProgressbar className='w-[100px] h-[100px]' value={50} text='50%' strokeWidth={5}/>
   </div>
   <div className='flex items-center justify-center'>
    <p className='text-xl text-gray-500'>Total sale made today</p>
   </div>
   <div  className='flex items-center justify-center my-5 '>
  <h1 className='text-xl font-bold'>$400</h1> 
   </div>
   <div className='flex items-center justify-center my-5 '>
    <p className='mb-5'>Lorem ipsum dolor sit amet</p>
   </div>
    </div>

    </div>
  )
}

export default Progress
