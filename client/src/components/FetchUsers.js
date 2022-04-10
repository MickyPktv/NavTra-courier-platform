import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const BASE_API_URL = 'http://localhost:3535/api';

const AllUsersList = () =>  {

    const [users, setUsers] = useState([]);
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
      const fetchUser = async () => {
        const res = await fetch(
          BASE_API_URL+ '/users',
        );
        const json = await res.json();
        setUsers(json);
      };
      fetchUser();
    }, []);

    const columns = [
      { field: '_id', headerName: 'ID', width: 100 },
      { field: 'name', headerName: 'Full name', width: 250 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'phoneNumber', headerName: 'Phone number', width: 200 },
      { field: 'address', headerName: 'Address', width: 300 },
      { field: 'deleteUser', headerName: '', width: 30 },
    
    ];


  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={users}
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default AllUsersList;