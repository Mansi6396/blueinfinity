import { Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import showPwdImg from "../../IMAGE/showPwdImg.svg";
import hidePwdImg from "../../IMAGE/hidePwdImg.svg";

export default function Profile(props) {

  const[firstName,setFirstName]=useState();
  const[lastName,setLastName]=useState()
  const[email,setEmail]=useState()
  const [file, setFile] = useState();
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  function submit  (){
    console.log(firstName,lastName,email,pwd)
  }
 
  return (
    <div style={{ display: "flex", marginLeft: "3%" }}>
      <div style={{ alignItems: "start" }}>
        <h1>Edit Profile</h1>
        <div
          style={{
            alignItems: "center",
            gap: "30px",
            display: "flex",
           marginTop:"15%"
            
          }}
        >
            
          <TextField value={firstName} onChange={(e)=>setFirstName(e.target.value)} id="standard-basic" label="FirstName" variant="standard" />
          <TextField value={lastName} onChange={(e)=>setLastName(e.target.value)} id="standard-basic" label="LastName" variant="standard" />
        </div>
        <br />
        <TextField
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
        />
        <div style={{ display: "flex" }}>
          <TextField
            name="pwd"
            placeholder="Enter Password"
            type={isRevealPwd ? "text" : "password"}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            style={{ marginTop: "5%" }}
            id="standard-basic"
            label="Password"
            variant="standard"
            fullWidth
          />
          <img
            style={{ height: "25px", marginTop: "9%" }}
            title={isRevealPwd ? "Hide password" : "Show password"}
            src={isRevealPwd ? showPwdImg : hidePwdImg}
            onClick={() => setIsRevealPwd((prevState) => !prevState)}
          />
        </div>
        <div style={{ display: "flex", marginTop: "8%" }}>
          <Link href="#" color="inherit">
            <h3>Forgot Password?</h3>
          </Link>
          <Button
          onClick={submit}
            style={{
              width: "20%",
              height: "40px",
              marginTop: "4%",
              marginLeft: "10%",
              backgroundColor: "#000080",
              color: "wheat",
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              height: "220px",
              width: "20%",
              position: "absolute",
              backgroundColor: "white",
              marginLeft: "10%",
              marginTop: "10%",
              borderColor: "white",
              borderRadius: "5px 5px",
            }}
          >
            <img
              src={file}
              style={{
                height: "165px",
                width: "90%",
                marginLeft: "5%",
                marginTop: "4%",
              }}
            />

            <input
              type="file"
              onChange={handleChange}
              style={{ marginLeft: "5%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
