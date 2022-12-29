import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import TablePaginationDemo from './TablePagination';
import { Pagination } from "@mui/material";



const rows = [
    { fullName: 'Samantha William', id: '#1234567891', date: 'March 21, 2022', parentName: 'Mana William', city: 'Jakarta', contact: null, grade: "VII A", action: "..." },
    { fullName: 'Tony Soap', id: '#1234567892', date: 'March 21, 2022', parentName: 'James Soap', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
    { fullName: 'Karen Hope', id: '#1234567893', date: 'March 21, 2022', parentName: 'Justin Hope', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
    { fullName: 'Jordan Nico', id: '#1234567894', date: 'March 21, 2022', parentName: 'Amanda Nico', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
    { fullName: 'Nadila Adja', id: '#1234567895', date: 'March 21, 2022', parentName: 'Jack Adja', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
    { fullName: 'Johnny Ahmad', id: '#1234567896', date: 'March 21, 2022', parentName: 'Danny Ahmad', city: 'Jakarta', contact: null, grade: "VII B", action: "..." },
];

function Contact() {
    return <div>
        <span><LocalPhoneIcon sx={{fontSize:"17px",color:"blueviolet",borderRadius:"50%",p:"2px",mr:"8px",background:"lightgrey"}}/></span>
        <span ><EmailIcon sx={{fontSize:"17px",color:"blueviolet",borderRadius:"50%",p:"2px",mr:"8px",background:"lightgrey"}}/></span>
    </div>
}
export default function BasicTable(props) {
    const [active, setActive] = React.useState(false);
    function changeBorderHandler() {
        setActive(!active);
        console.log("HI");
    }
    return (
        props.display ? <TableContainer component={Paper} style={{ position: "relative", height: "500px", width: "1000px", top: "-625px", left: "226px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Parent Name</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            onClick={changeBorderHandler}
                            key={row.name}
                            sx={{
                                "'& .MuiDataGrid-row:hover" : {
                                borderLeft: '4px solid blue' ,
                                color:  'blue' 
                              }}}
                            // sx={active && { borderLeft: "4px solid blue" }}
                        // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" sx={{ color: "black", fontWeight: "bold" }} >
                                <input type="checkbox"/>{row.fullName}
                            </TableCell>
                            <TableCell align="left" sx={{ color: "blue" }}>{row.id}</TableCell>
                            <TableCell align="left" sx={{ color: "gray" }}>{row.date}</TableCell>
                            <TableCell align="left">{row.parentName}</TableCell>
                            <TableCell align="left">{row.city}</TableCell>
                            <TableCell align="left"><Contact /></TableCell>
                            <TableCell align="left">{row.grade}</TableCell>
                            <TableCell align="left">{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TablePaginationDemo/>
        </TableContainer> : ""
    );
}
