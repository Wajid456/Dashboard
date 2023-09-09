import React from 'react'
import {  XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart,Bar } from 'recharts';

const Chart = () => {

    const data = [
        {
          "name": "Jan",
          "Total": 500
        },
        {
          "name": "Feb",
          "Total": 300
        },
        {
          "name": "Mar",
          "Total": 1000
        },
        {
          "name": "Apr",
          "Total": 800
        },
        {
          "name": "May",
          "Total": 1200
        },
        {
          "name": "Jun",
          "Total": 700
        }
      ]

  return (
    <div className='bg-white shadow-xl rounded '>

<BarChart width={730} height={350} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="Total" fill="skyBlue" />
  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
</BarChart>

    </div>
  )
}

export default Chart
