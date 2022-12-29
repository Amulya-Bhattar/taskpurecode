import { Typography } from "@mui/material";
import React from "react";
import Tabs from "./Tabs";
export default function LeftPane(props) {
    return <React.Fragment>
        <div style={{ width: "210px", backgroundColor: "#6633CC", height: "630px", position: "relative", top: "-123px" }}>
            <div style={{ display: "flex" }}>
                <h3 style={{ color:"white",background: "orangeRed", borderRadius: "10px", marginLeft: "35px", marginRight: "10px", fontSize: "20px", padding: "0 6px" }}> A</h3>
                <Typography variant="h5" sx={{ color: "white", pt: "18px" }}> Akadami</Typography>
            </div>
            <Tabs setDisplay={props.setDisplay} display ={props.display}/>
            <Typography variant="subtitle2" sx={{ fontSize: 9, color: "white" }}>Akademi - School Administration Dashboard</Typography>
            <Typography variant="h6" sx={{ fontSize: 9, color: "white" }}>Made with love by An Vu</Typography>
        </div>
    </React.Fragment>
}