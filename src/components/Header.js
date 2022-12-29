import { Typography } from "@mui/material";
import React from "react";
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CircleIcon from '@mui/icons-material/Circle';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import InputAdornment from '@mui/material/InputAdornment';
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CustomizedMenus from "./DropDown";

export default function Header() {
    return <React.Fragment>
        <div style={{position: "relative",left: "210px",width: "1010px",paddingTop: "20px"}}>
            <div style={{ display: "flex" }}>
                <Typography variant="h5" sx={{ color: " #6633CC", fontWeight: "medium",pl:"13px", width: "200px", flex: "1 1 0", textAlign: "left" }}>Students</Typography>
                <NotificationsNoneRoundedIcon sx={{ border: "1px solid grey", borderRadius: "50%", backgroundColor: "white", fontSize: "25px", color: "gray", p: 0.01 }} />
                <SettingsRoundedIcon sx={{ border: "1px solid grey", borderRadius: "50%", backgroundColor: "white", fontSize: "25px", color: "gray", p: 0.01, ml: 1, mr: 1 }} />
                <div>
                    <Typography sx={{ fontSize: "10px", color: "blueviolet", mr: 3 }}>Nabila.A </Typography>
                    <Typography sx={{ fontSize: "10px", color: "gray", mr: 1 }} variant="subtitle1" >Admin</Typography>
                </div>
                <CircleIcon sx={{ mr: 1, color: "lightblue",fontSize: "32px" }} />
            </div>
            <div style={{ display: "flex" }}>
                <TextField sx={{ ml: 2, mt: 2, bgcolor: "whitesmoke", width: "200px" }} id="outlined-basic" placeholder="Search here.." variant="outlined" size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchRoundedIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <div style={{ display: "flex",marginLeft:"425px" }}>
                    <CustomizedMenus />
                    <Button variant="contained" sx={{ width: 150, padding: 1, borderRadius: "20px", margin: 2, fontSize: 8 }} startIcon={<AddIcon />}>New Student</Button>
                </div>
            </div>
        </div>
    </React.Fragment>
}