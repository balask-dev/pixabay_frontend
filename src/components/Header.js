import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
function Header(){
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "white" ,position:"relative", textAlign: "center"}} >
        <Toolbar sx={{ backgroundColor: "white" ,position:"relative", textAlign: "center"}}>
          <NavLink to="/" style={{ color: "black" }} >
  <img height="50px" width="150px" src="http://www.charmainecole.net/uploads/2/9/5/8/29583623/pixabay-logo_orig.png"></img>
  <div  style={{marginTop:"150px",marginLeft:"450px",position:"absolute",fontWeight:"900",fontSize:"40px",color:"white",fontFamily:"'Montserrat', sans-serif"}}className="centered">Stunning Free Images & Royalty Free Stock</div>
 
           </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab style={{color:"black"}} LinkComponent={NavLink} to="/Photos" label="Photos" />
            <Tab style={{color:"black"}} LinkComponent={NavLink} to="/Vectors" label="Vectors" />
            <Tab style={{color:"black"}} LinkComponent={NavLink} to="/Video" label="Video" />
            <Tab style={{color:"black"}}LinkComponent={NavLink} to="/Music" label="Music" />
            <Tab style={{color:"black"}} LinkComponent={NavLink} to="/add" label="Add Yours" />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
