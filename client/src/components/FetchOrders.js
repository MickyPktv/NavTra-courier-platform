import {Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const BASE_API_URL = "http://localhost:3535/api";
const AllOrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(BASE_API_URL + "/orders");
      const json = await res.json();
      setOrders(json);
    };
    fetchRecipe();
  }, []);

  const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'url', headerName: 'Url of the product', width: 200 },
    { field: 'quantity', headerName: 'QTY', width: 50 },
    { field: 'userName', headerName: 'User', width: 150 },
    { field: 'address', headerName: 'Address', width: 300 },
    { field: 'addInfo', headerName: 'Add Info', width: 100 },
  
  ];

  return (
    <Grid container>
          <div style={{ height: 500, width: '100%' }}>
  <DataGrid
    rows={orders}
    getRowId={(row) => row._id}
    columns={columns}
    pageSize={7}
    rowsPerPageOptions={[5]}
    checkboxSelection
    disableSelectionOnClick
  />
</div>

    </Grid>
  );
};

// async function deletePost(recipeId){
//   const resp = await fetch(`${BASE_API_URL}/recipes/${orderId}`, {
//       method: 'DELETE',
//   });
//   const deleted = await resp.json();
// }


export default AllOrdersList;
