import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FolderIcon from "@mui/icons-material/Folder";
import { Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DescriptionIcon from '@mui/icons-material/Description';
import PieChartIcon from '@mui/icons-material/PieChart';
import MenuIcon from '@mui/icons-material/Menu';
export default function Drawer() {
  return (
    <div
      style={{
        height: "90.5vh",
        width: "23%",
        backgroundColor: "#000080",
        borderRadius: "0px 0px 0px 20px",
      }}
    >
        <div style={{display:"flex",flexDirection:"column",float:"right",padding:"30px 15px",gap:"25px"}}>
        <AccountBoxIcon style={{backgroundColor:"white"}}/>
         <DescriptionIcon style={{backgroundColor:"white"}}/>
         <PieChartIcon style={{backgroundColor:"white"}}/>
         < MenuIcon style={{backgroundColor:"white"}}/>
        </div>
         
      <div style={{padding:"17% 0% 0% 14%",width:"100%"}}>
      <div
        style={{
          height: "70vh",
          width: "60%",
          backgroundColor: "#B9D9EB",
          borderRadius: "10px",
        }}
      >
       
        <div style={{ display: "flex",alignItems:"center",justifyContent:"center" }}>
          <FolderIcon style={{ color: "yellow" }} />
          <Button id="basic-button" aria-haspopup="true">
            Project 1
          </Button>
          <KeyboardArrowDownIcon
          />
          <MoreVertIcon  />
        </div>
        <div style={{ display: "flex",alignItems:"center",justifyContent:"center" }}>
          <FolderIcon style={{ color: "yellow"}} />
          <Button id="basic-button" aria-haspopup="true">
            Project 2
          </Button>
          <KeyboardArrowDownIcon
            
          />
          <MoreVertIcon />
        </div>
        <div style={{padding:"15% 0% 2% 14%",display:"flex",flexDirection:"column",gap:"15px"}}>
        <div style={{ display: "flex",gap:"10px" }}>
          <GroupsIcon style={{ color: "red" }} />
          <Typography>Team 1</Typography>
        </div>
        <div style={{ display: "flex",gap:"10px" }}>
          <GroupsIcon style={{ color: "red" }} />
          <Typography>Team 2</Typography>
        </div>
        <div style={{ display: "flex",gap:"10px" }}>
          <GroupsIcon style={{ color: "red" }} />
          <Typography>Team 3</Typography>
        </div>
        <div style={{ display: "flex",gap:"10px" }}>
          <GroupsIcon style={{ color: "red" }} />
          <Typography>Team 4</Typography>
        </div>
        </div>
        <Button
          style={{
            color: "white",
            textTransform: "initial",
            borderColor: "white",
            marginTop: "7%",
            marginLeft: "10%",
            width:"70%"
          }}
          variant="outlined"
        >
          <GroupsIcon style={{ color: "red" }} />+ Add Team
        </Button>
        <div style={{ padding:"70% 0% 0% 12%"}}>
        <Button
          style={{
            color: "white",
            textTransform: "initial",
            borderColor: "white",
            
           
            backgroundColor:"#000080"
          }}
          variant="outlined"
        >
          <FolderIcon style={{ color: "yellow"}} />+ Add Project
        </Button>
        </div>
      </div>
      </div>
    </div>
  );
}
