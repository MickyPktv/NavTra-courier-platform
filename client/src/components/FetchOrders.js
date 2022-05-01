import {Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditOrder from "./EditOrder";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { withStyles } from "@mui/styles";

const BASE_API_URL = "http://localhost:3535/api";
const AllOrdersList = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [user, setUser] = useState({});

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

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(BASE_API_URL + "/orders");
      const json = await res.json();
      setOrders(json);
    };
    fetchRecipe();
  }, []);
  

  const renderDetailsButton = () => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(id) => {
                    <EditOrder/>
                }}
            >
                Edit 
            </Button>
        </strong>
    )
}

  const columns = [
    { field: '_id', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'imageUrl', headerName: 'Image Url', width: 120, renderCell: (imageUrl) => <img src={imageUrl.value} width="100px" alt="orderImage"/> },
    { field: 'url', headerName: 'Url of the product', width: 150 },
    { field: 'quantity', headerName: 'QTY', width: 50 },
    { field: 'userName', headerName: 'User', width: 120 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'addInfo', headerName: 'Add Info', width: 100},
    { field: 'status', headerName: 'Status', width: 100},
    { field: 'edit', headerName: 'Edit', width: 80, renderCell: renderDetailsButton, disableClickEventBubbling: true,},
  ];

  const StyledDataGrid = withStyles({
    root: {
      "& .MuiDataGrid-renderingZone": {
        maxHeight: "none !important"
      },
      "& .MuiDataGrid-cell": {
        lineHeight: "unset !important",
        maxHeight: "none !important",
        whiteSpace: "normal"
      },
      "& .MuiDataGrid-row": {
        maxHeight: "none !important"
      }
    }
  })(DataGrid);

  return (
    <Grid container>
          <div style={{ height: 500, width: '100%' }}>
  <StyledDataGrid
    rows={orders}
    getRowId={(row) => row._id}
    columns={columns}
    pageSize={7}
    rowsPerPageOptions={[5]}
    disableSelectionOnClick
  />
</div>

    </Grid>
  );
};

// async function deletePost(_id){
//   const resp = await fetch(`${BASE_API_URL}/orders/${order._id}`, {
//       method: 'DELETE',
//   });
//   const deleted = await resp.json();
// }


export default AllOrdersList;
