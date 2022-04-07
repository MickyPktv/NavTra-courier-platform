import { Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import React, { useRef, useState } from "react";
import "../index.css";


const TrackItem = () => {

  const baseURL = "http://localhost:3535/api";
  const recipe_title = useRef(null);
  const recipe_content = useRef(null);
  const recipe_cookingTime = useRef(null);
  const recipe_image = useRef(null);
  const dataCreated = new Date();
  const recipe_instructions = useRef(null);
  const [recipeResult, setRecipeResult] = useState(null);
  

  async function postData() {
    const postData = {
      title: recipe_title.current.value,
      content: recipe_content.current.value,
      cookingTime: recipe_cookingTime.current.value,
      imageUrl: recipe_image.current.value,
      dateAndTimeShare: dataCreated,
      longContent: recipe_instructions.current.value
    };
    try {
      const res = await fetch(`${baseURL}/orders`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (!res.ok) {
        const message = `An error has occured:`;
        throw new Error(message);
      }
      const result = <Typography sx={{backgroundColor:"#ebc999", color:"#442C2E"}}>Your</Typography>;
      setRecipeResult(result);
    } catch (err) {
      setRecipeResult(err.message);
    }
  }


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
            {recipeResult && (
              <Typography>
                <pre>{recipeResult}</pre>
              </Typography>
            )}
              <Typography variant="h6" component="h2" sx={{ fontFamily: 'Roboto' }}  >
              TRACK YOUR ITEM
              </Typography>
              <TextField id="recipe-title" label="Tracking Number" variant="standard"/>
              <Button 
              sx={{ mb: 3, mt: 3}}
              variant="outlined" 
              onClick={postData}
              >Submit</Button>
              </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TrackItem;


