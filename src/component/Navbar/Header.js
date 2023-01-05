import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Typography } from "@mui/material";
import Profile from "../Profile/Profile";

export default function Header(props) {

  return (
    <div style={{ height: "70px", backgroundColor: "white", display: "flex" ,alignItems:"center",gap:"30px"}}>
      <div
        style={{
          backgroundColor: "#000080",
          width: "20%",
          
          borderRadius: "20px 0px 0px",
          
          height:"70px",
          
        }}
      >
        <Typography style={{
          fontSize:"1.5rem",
          textAlign:"center",
          fontWeight: "bold",
          color: "white",
          marginTop:"5%"
        }}>Company Logo</Typography>
        
      </div>
      <div style={{ display: "flex",marginLeft:"auto",gap:"50px" }}>
        <div style={{display:"flex",alignItems:"center"}}>
        <HelpOutlineIcon />
        <Typography >help</Typography>
        </div>
        <div style={{marginRight:"35px"}}>
        <Button
          id="basic-button"
          aria-haspopup="true"
          endIcon={<KeyboardArrowDownIcon />}
        >
          Cody Fishe
        </Button>
        
        </div>
      </div>
    </div>
  );
}
