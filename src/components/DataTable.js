import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Table } from '@mui/material';

const columns = [
  { field: 'fullName', headerName: 'Name', width: 170, headerClassName: 'super-app-theme--header' },
  { field: 'id', headerName: 'ID', width: 110 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'parentName', headerName: 'Parent Name', width: 170 },
  { field: 'city', headerName: 'City', width: 80 },
  { field: 'contact', headerName: 'Contact', width: 80 },
  { field: 'grade', headerName: 'Grade', width: 100 },
  { field: 'action', headerName: 'Action', width: 80 },
];


const rows = [
  { fullName: 'Samantha William', id: '#1234567891', date: 'March 21, 2022', parentName: 'Mana William', city: 'Jakarta', contact: null, grade: "VII A", action: "..." },
  { fullName: 'Tony Soap', id: '#1234567892', date: 'March 21, 2022', parentName: 'James Soap', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
  { fullName: 'Karen Hope', id: '#1234567893', date: 'March 21, 2022', parentName: 'Justin Hope', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
  { fullName: 'Jordan Nico', id: '#1234567894', date: 'March 21, 2022', parentName: 'Amanda Nico', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
  { fullName: 'Nadila Adja', id: '#1234567895', date: 'March 21, 2022', parentName: 'Jack Adja', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
  { fullName: 'Johnny Ahmad', id: '#1234567896', date: 'March 21, 2022', parentName: 'Danny Ahmad', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
];


export default function DataTable(props) {
  const rowHandler = () => {
    setActive(!active);
    console.log("invoked");
  }
  const [active, setActive] = useState(false);
  
  return (
    props.display ? 
    <div style={{ position: "relative", height: "423px", width: "1000px", top: "-625px", left: "226px" }}>
      <DataGrid onRowClick={(rowHandler)}
        sx={{
          "'& .MuiDataGrid-cell:hover" : {
          borderLeft: '4px solid blue' ,
          color:  'blue' 
        }}}
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection

      // sx={{ color: 'black', backgroundColor: 'blue' }}
      />
    </div> : <h1>No data</h1>
  );
}
