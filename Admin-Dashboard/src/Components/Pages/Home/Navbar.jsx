import React from 'react'
import {HiOutlineSearch} from "react-icons/hi"
import {IoIosNotifications} from "react-icons/io"
import {BiMessageRoundedDots,BiUserCircle} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"

const Navbar = () => {
  return (
    <div>
    <div className='flex items-center justify-between bg-white shadow-lg border-b-1 border-black '>

    <div className='flex items-center m-3'>
   <input type="text" placeholder='Type here...' className='border-2 border-gray-400 rounded px-5 py-1 outline-none' />
   <HiOutlineSearch className=' mx-[-2rem] text-xl'/>
    </div>

  <div>
  <ul className='flex mx-5 gap-5  text-2xl my-3'>
 <li><IoIosNotifications/></li>
 <li><BiMessageRoundedDots/></li>
 <li><BiUserCircle/></li>
 <li><FiSettings/></li>
  </ul>
 </div>
    </div>
    <div className='md:hidden block'>hello</div>

    </div>
  )
}

export default Navbar
