import React from 'react'
import { Link } from 'react-router-dom'
import {TiHomeOutline} from "react-icons/ti"
import {VscTable} from "react-icons/vsc"
import {TbBorderAll} from "react-icons/tb"
import {BiBorderOuter,BiShoppingBag} from "react-icons/bi"
import {RiBillLine} from "react-icons/ri"

const Sidebar = () => {
  return (
    <div className='h-screen text-white border-black rounded bg-blue-950 border-r-1 '>

   <div className='flex gap-3 mx-3'>
   <BiShoppingBag className='my-3 text-3xl '/>
  <h1 className='my-3 text-xl font-bold'>Shop</h1>
   </div>

 <div className='flex flex-col gap-10 my-10 list-none '>

 <div className='flex gap-3 mx-3'>
  <TiHomeOutline className='text-2xl'/>
 <li className='font-bold '><Link to="/">Dashboard</Link></li> 
    </div>

 <div className='flex gap-3 mx-3 '>
  <VscTable className='text-2xl' />
 <li className='font-bold'><Link to="/table">Table</Link></li>
 </div>

 <div className='flex gap-3 mx-3'>
 <TbBorderAll className='text-2xl' />
 <li className='font-bold'><Link to="/product">Product</Link></li>
 </div>

<div className='flex gap-3 mx-3'>
 <BiBorderOuter className="text-2xl" />
 <li className='font-bold'>Order</li>
</div>

<div className='flex gap-3 mx-3'>
 <RiBillLine className="text-2xl" />
 <li className='font-bold'>Billing</li>
</div>
   </div>

    </div>
  )
}

export default Sidebar
