import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Sidebar from '../Home/Sidebar';
import Navbar from '../Home/Navbar';
import { rows } from './TableData';


const TableList = () => {

 

  return (
    <div className='flex'>

<div className='' >
    <Sidebar/>
    </div>

   <div className='w-full'>
    <Navbar/>
   {/* Table */}
    <div className='m-5 bg-white shadow-xl '>
    <TableContainer  >
      <Table sx={{ minWidth: 600 }} >
        <TableHead>
          <TableRow>
            <TableCell >ID</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>

              <TableCell > {row.id}</TableCell>
              <TableCell >{row.name}</TableCell>
              <TableCell >{row.age}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.city}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

    </div>

    </div>
  )
}

export default TableList
