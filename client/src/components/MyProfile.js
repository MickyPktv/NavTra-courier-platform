/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from "react-router-dom";

const BASE_API_URL = "http://localhost:3535/api";
const Profile = () => {


const [user, setUser] = useState({});

useEffect(() => {
  if (localStorage.getItem("jwt")===null){
    location.assign('/login')
  }
  else {
  const storedToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(storedToken);
  if (decoded.user) {
   setUser(decoded.user);
  } 
}
}, []);

const userID = user._id


const [orders, setOrders] = useState([]);
  
useEffect(() => {
  const fetchOrders = async () => {
    const res = await fetch(`${BASE_API_URL}/orders/`);
    const json = await res.json();
    setOrders(json);
  };
  fetchOrders();
}, []);


  return (
    <Grid container spacing={6} justifyContent="center">
      
     <Grid item xs={12} md={4} display="flex" alignitems="stretch">    
        <Card sx={{marginTop: "10px", width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
      <CardHeader
    title={`Welcome, ${user.name}`}
    titleTypographyProps={{
      fontSize: 16,
    }}>
  </CardHeader>
  <CardMedia
    component="img"
    height="200"
    image={user.avatarUrl ? user.avatarUrl : "images/newAvatar.png"}
    sx={{margin:"auto", width:"150px"}}
  ></CardMedia>

  <CardContent sx={{margin:"auto", textAlign:"left"}}>
  <Typography variant="h8">
  Your details:
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Email: ${user.email}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Mobile: +359${user.phoneNumber}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Your address: ${user.address}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Date of Birth: ${user.dateOfBirth}`}
    </Typography>
  </CardContent>
    <Box>
      <Button><AddCircleIcon sx={{padding:"1px"}}></AddCircleIcon><Link to="/make-new-order" className="myLink-content" >Add new order</Link></Button>
    </Box>
  </Card>
  </Grid>
  
   
  <Grid item xs={12} md={6} display="flex" alignitems="stretch" justifyContent="center" flexDirection="column">

    <Box alignSelf="center"><Typography variant="h6" color="#cd7700">Order History</Typography></Box>

  {orders
  .filter(order => order.user === userID)
  .map((order) => (  
        <Card sx={{marginTop: "10px", width:"100%", display:"flex", flexWrap:"wrap"}}>
      <CardHeader
    title={`Order`}
    titleTypographyProps={{
      fontSize: 16,
    }}>
  </CardHeader>
  <CardContent sx={{margin:"auto", textAlign:"left"}}>
    <Typography variant="body2" color="text.secondary">
  {`Product: ${order.title}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`URL: ${order.url}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Qunatity: ${order.quantity} pcs`}
    </Typography>
  </CardContent>
  </Card>
    ))}  
  </Grid>

</Grid>
  )
}

export default Profile;



