import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import jwt_decode from 'jwt-decode';


const Navigation = () => {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    if (localStorage.getItem("jwt")===null){
    }
    else {
    const storedToken = localStorage.getItem('jwt');
    const decoded = jwt_decode(storedToken);
    if (decoded.user) {
     setUser(decoded.user);
    } 
  }
  }, []);


  return (
    <AppBar position="static" style={{ backgroundColor: "#273649" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters >
          <Box
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >

            <NavLink to="/">
            <img
              className="logo-style"
              src={"../images/NavTraLogo.jpg"}
              alt="logo"
            />
            </NavLink>
          
          </Box>

          <Box sx={{flexGrow: 1, width:"80%", display: { md: "flex", justifyContent: "flex-start"} }}>
         
          <Button>
            <NavLink to="/"  className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Home
            </NavLink>
          </Button>

          <Button>
            <NavLink to="/track-your-item" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Track parcel
            </NavLink>
          </Button>

          <Button>
            <NavLink to="/pricing" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Pricing
            </NavLink>
          </Button>

          <Button>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Contacts
            </NavLink>
          </Button>

        </Box>

          <Box sx={{flexGrow: 1, width:"80%", display: { md: "flex", justifyContent: "flex-end"} }}>

            {/* <Typography className="hello">{user.name}</Typography> */}
        
          <Button className="login" >
            <NavLink to="/my-profile"  className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              My profile
            </NavLink>
          </Button>

          <Button className="signUp">
            <NavLink to="/sign-up" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Sign Up
            </NavLink>
          </Button>

        </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
