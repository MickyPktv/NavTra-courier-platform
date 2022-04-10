import { Button, Card, CardContent, CardHeader, Grid, Paper, TextField, Typography,} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const BASE_API_URL = 'http://localhost:3535/api';

const TrackItem = () => {

  const [order, setOrder] = useState({});
  const track_item = useRef();

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await fetch(
        BASE_API_URL+ '/order/' + track_item,
      );
      const json = await res.json();
      setOrder(json);
    };
  }, []);


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} display="flex" alignitems="stretch" justifyContent="center">
      <Paper 
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '90%' }, minWidth:"500px"
        }}
        noValidate
        autoComplete="off"
        elevation={2}
        >
          <div >

              <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto' }}  >
              TRACK YOUR ITEM
              </Typography>
              <TextField 
              id="track item" 
              label="Tracking Number" 
              variant="standard"
              inputRef={track_item}/>
              <Button 
              sx={{ mb: 3, mt: 3}}
              variant="outlined" 
              onClick={setOrder}
              >Submit</Button>
              </div>
        </Paper>

        <Grid item xs={12} md={12} display="flex" alignitems="stretch" justifyContent="center">

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

        </Grid>
      </Grid>
    </Grid>
  );
};

export default TrackItem;


