/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import jwt_decode from 'jwt-decode';
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Tab, Tabs, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link, useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ReorderIcon from '@mui/icons-material/Reorder';


const BASE_API_URL = "http://localhost:3535/api";
const Profile = () => {

const [user, setUser] = useState({});
const navigate = useNavigate();

useEffect(() => {
  if (localStorage.getItem("jwt")===null){
    navigate(`/login`);
  }
  else {
  const storedToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(storedToken);
  console.log(decoded)
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



const columns = [
  { field: 'title', headerName: 'Product', width: 300 },
  { field: 'quantity', headerName: 'QTY', width: 100 },
  { field: 'addInfo', headerName: 'Additional Information', width: 400 },
  { field: 'status', headerName: 'Status', width: 100 },

];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={10}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
     <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
         <Tab icon={<PersonPinIcon />} iconPosition="start" label="My profile" {...a11yProps(0)} />
          <Tab icon={<ReorderIcon />} iconPosition="start" label="My orders" {...a11yProps(1)} />
    </Tabs>
    </Box>

    <TabPanel value={value} index={0}>
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
  </TabPanel>

  <TabPanel value={value} index={1}>
<div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={orders.filter(order => order.user === userID)}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[7]}
        disableSelectionOnClick
      />
    </div>
  </TabPanel>
  </Grid>
</Grid>
  )
}

export default Profile;
