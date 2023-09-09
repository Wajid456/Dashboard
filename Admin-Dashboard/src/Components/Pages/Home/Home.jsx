import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Widgets from './Widgets'
import Progress from './Progress'
import Chart from './Chart'

const Home = () => {
  return (
    <div className='flex'>

    <div className='' >
    <Sidebar/>
    </div>

    <div className='w-full'>
    <Navbar/>
    <Widgets/>
    <div className='flex items-center justify-evenly '>
    <Progress/>
    <Chart/>
    </div>

    </div>

    

    </div>
  )
}

export default Home
