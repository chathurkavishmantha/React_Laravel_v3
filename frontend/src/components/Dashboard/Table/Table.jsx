import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/Table.css';
import { DataGrid } from '@mui/x-data-grid';
// import { shadows } from '@mui/system';

function createData(id,name, trackingId, date, status) {
  return {id, name, trackingId, date,status };
}

const rows = [
  createData(1,'Frozen yoghurt', 18526545, "2 March 2022","Approved"),
  createData(2,'Frozen yoghurt2', 18526545, "2 March 2022","Pending"),
  createData(3,'Frozen yoghurt3', 18526545, "2 March 2022","Approved"),
  createData(4,'Frozen yoghurt4', 18526545, "2 March 2022","Delivered"),
  createData(5,'Frozen yoghurt5', 18526545, "2 March 2022","Pending"),
  createData(6,'Frozen yoghurt6', 18526545, "2 March 2022","Pending"),
];

const makeStyles = (status)=>{
    if(status === 'Approved')
    {
        return{
            background: 'rgb(145 254 159 /47%)',
            color: 'green',
        }
    }
    else if(status === 'Pending')
    {
        return{
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else{
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}



export default function BasicTable() {
    
  return (
    <div className='Table'>
        <h2>Order Details</h2>
    <TableContainer component={Paper} style={{boxShadow: '0px 13px 20px 0px #80808029'}}>
    
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left"><span className='status' style={makeStyles(row.status)}>{row.status}</span></TableCell>
              <TableCell align="left" >Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DataGrid
        rows={rows}
        columns={[]}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </TableContainer>
    </div>
    
  );
  
}