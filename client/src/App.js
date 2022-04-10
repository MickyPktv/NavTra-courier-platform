import { Container, Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllUsersList from "./components/FetchUsers";
import FooterBasic from "./components/Footer";
import Navigation from "./components/NavBar";
import TrackItem from "./components/TrackItem";
import Main from "./components/Main"
import LogInContent from "./components/LoginContent";
import Profile from "./components/MyProfile";
import NewOrder from "./components/PostOrders";
import AllOrdersList from "./components/FetchOrders";


const SignUp = React.lazy(() => import("./components/SignUp"));

function App() {


  return (
    <div className="App">
        <Navigation />
        <Container >
          <Grid
            container
            spacing={2}
            display="flex"
            alignItems="stretch"
            mt="20px"
            fullwidth="true"
          >
          <Routes>
            <Route path="/" element={<Main/>} />
            
            <Route path="/sign-up" element={<React.Suspense fallback={<>Loading...</>}>
                <SignUp />
              </React.Suspense>} />
            <Route path="/login" element={<LogInContent/>} />
            <Route path="/my-profile" element={<Profile/>} />
            <Route path="/track-your-item" element={<TrackItem/>} />
            <Route path="/make-new-order" element={<NewOrder/>} />
            <Route path="/users-list" element={<AllUsersList/>} />
            <Route path="/orders-list" element={<AllOrdersList/>} />
          </Routes>
          </Grid>
        </Container>
        <FooterBasic/>
    </div>
  );
}


export default App;
