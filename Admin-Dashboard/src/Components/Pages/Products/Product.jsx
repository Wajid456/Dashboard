import React from 'react'
import Navbar from '../Home/Navbar'
import Sidebar from '../Home/Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './ProductData';
import { rows } from './ProductData';

const Product = () => {
  return (
    <div className='flex'>

    <div className='' >
    <Sidebar/>
    </div>

    <div className='w-full'>
    <Navbar/>

    <div className='my-8 mx-10'>
    <h1 className='text-2xl'>All Products</h1>
    </div>
    {/* Product Table */}
    <div className='mx-8  bg-white shadow-xl rounded'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

    </div>
    </div>
  )
}

export default Product
