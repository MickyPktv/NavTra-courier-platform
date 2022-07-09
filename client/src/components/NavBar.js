import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./NavBar.css"
import { NavLink } from "react-router-dom";


const Navigation = () => {

  // const [change, reset] = useState(false);
  // const changeNavBar = () => {
  //   reset(!change);
  // };

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
            <NavLink to="/pricing" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Pricing
            </NavLink>
          </Button>


          <Button>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              Contacts
            </NavLink>
          </Button>

          {/* <Button>
            <NavLink to="/users-list" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              USERS
            </NavLink>
          </Button>

          <Button>
            <NavLink to="/orders-list" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              ORDERS
            </NavLink>
          </Button> */}


        </Box>

          <Box sx={{flexGrow: 1, width:"80%", display: { md: "flex", justifyContent: "flex-end"} }}>


                {/* <Button className="logout">
              <NavLink to="/my-profile" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
                My profile
              </NavLink>
            </Button>
              */}


 
          <Button className="login" >
            <NavLink to="/login"  className={({ isActive }) => isActive ? "active-link" : "myLink"} >
             Login
            </NavLink>
          </Button>


          <Button className="signUp">
            <NavLink to="/sign-up" className={({ isActive }) => isActive ? "active-link" : "myLink"}>
              SignUp
            </NavLink>
          </Button>
        
        </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}


// const logout = () => {
//   localStorage.removeItem("jwt");
// }

export default Navigation;
