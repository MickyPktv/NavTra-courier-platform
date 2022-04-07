import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const BASE_API_URL = 'http://localhost:8080';
const AllUsersList = () => {
    const [users, setUsers] = useState([]);

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

    async function deleteUser(userId){
      const resp = await fetch(`${BASE_API_URL}/users/${userId}`, {
          method: 'DELETE',
      });
      const deleted = await resp.json();
      window.location.reload();
    }
  
    return (
      <Grid container spacing={2}>
          {users.map((user) => (
            <Grid item xs={12} md={3} display="flex" alignitems="stretch" >    
            <Card sx={{marginTop: "10px", width:"100%"}}>
                  <CardHeader
                title={user.name}
                titleTypographyProps={{
                  fontSize: 20,
                }}
                subheader={`Username: ${user.username}`}>
              </CardHeader>
              <CardMedia
                component="img"
                width="180"
                height="150"
                image={user.avatarUrl ? user.avatarUrl : "images/avatar-man.jpg"}
              ></CardMedia>
              <CardContent><Typography>{`Registered on: ${user.dateAndTimeRegistered}`}</Typography></CardContent>

              <Button sx={{color:"#cd7700"}} onClick={() => {
               deleteUser(user.id);
             }}aria-label="delete">
              <DeleteIcon />
            </Button>
            
              </Card>
              </Grid>
          ))}
      </Grid>
      );
  }

export default AllUsersList;

