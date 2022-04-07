import {Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

const BASE_API_URL = "http://localhost:3535/api";
const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(BASE_API_URL + "/orders");
      const json = await res.json();
      setRecipes(json);
    };
    fetchRecipe();
  }, []);

  return (
    <Grid container spacing={2}>
          {recipes.map((recipe) => (   
               <Grid item xs={12} md={6} display="flex" alignitems="stretch">    
          <Card sx={{marginTop: "10px", width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
                <CardHeader
              title={recipe.title}
              titleTypographyProps={{
                fontSize: 16,
              }}
              subheader={`Cooking Time: ${recipe.cookingTime} minutes`}
                subheaderTypographyProps={{
                fontSize: 14,
              }}>
            </CardHeader>
            <CardMedia
              component="img"
              height="200"
              image={recipe.imageUrl}
              sx={{margin:"auto"}}
            ></CardMedia>
            <CardContent sx={{margin:"auto", textAlign:"left"}}>
              <Typography variant="body2" color="text.secondary">
            {recipe.content}
              </Typography>
            </CardContent>
            
            <Box>

            <Button sx={{color:"#cd7700"}} type="submit" name="submit" aria-label="favorite">
              <FavoriteIcon />
            </Button>
            
            <Button sx={{color:"#cd7700"}} onClick={() => {
               deletePost(recipe.id);
             }}aria-label="delete">
              <DeleteIcon />
            </Button>

            

            </Box>
            </Card>
            </Grid>
          ))}
    </Grid>
  );
};

async function deletePost(recipeId){
  const resp = await fetch(`${BASE_API_URL}/recipes/${recipeId}`, {
      method: 'DELETE',
  });
  const deleted = await resp.json();
}


export default RecipesList;
