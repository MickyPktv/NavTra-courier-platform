import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";

const Profile = () => {

const [user, setUser] = useState({});

useEffect(() => {
  const storedToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(storedToken);
  if (decoded.user) {
   setUser(decoded.user);
  }
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
    image={user.avatarUrl ? user.avatarUrl : "images/avatar-man.jpg"}
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
  {`Date of Birth: ${user.dateOfBirth}`}
    </Typography>
  </CardContent>

  </Card>
  </Grid>
  
  <Grid item xs={12} md={6} display="flex" alignitems="stretch">    
        <Card sx={{marginTop: "10px", width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
      <CardHeader
    title={`ORDERS HISTORY`}
    titleTypographyProps={{
      fontSize: 16,
    }}>
  </CardHeader>
  <CardMedia
    component="img"
    height="200"
    image={user.imageUrl}
    sx={{margin:"auto"}}
  ></CardMedia>

  <CardContent sx={{margin:"auto", textAlign:"left"}}>
    <Typography variant="body2" color="text.secondary">
  {`Email:${user.email}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Mobile: +359${user.phoneNumber}`}
    </Typography>
    <Typography variant="body2" color="text.secondary">
  {`Date of Birth:${user.dataOfBirth}`}
    </Typography>
  </CardContent>
  </Card>
  </Grid>

</Grid>
  )
}

export default Profile;



