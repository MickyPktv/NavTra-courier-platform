import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ForumIcon from '@mui/icons-material/Forum';


const HowItWorksFunc = () => {
  return (
  
      <Grid container spacing={2} mt={0.1}>

        <Grid item xs={12} md={4} display="flex" alignitems="stretch"> 

        <Card sx={{backgroundColor:"rgb(242, 240, 241)", marginTop: "10px", width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
            <CardHeader
            title="How it Works?"
              titleTypographyProps={{
                fontSize: 16,
              }}
              subheader={`Smart and Simple International Delivery!`}
                subheaderTypographyProps={{
                fontSize: 14,
              }}>
            </CardHeader>
            <CardContent sx={{margin:"auto", textAlign:"left"}}>
            <List sx={{ width: '100%',}}>
        	    <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LooksOneIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Choose your product" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LooksTwoIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Send us a link - place order" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Looks3Icon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="We will deliver to your home!" />
              </ListItem>
            </List>
            </CardContent>
            <Box>
            <Button sx={{color:"#cd7700"}} aria-label="delete">
              Place order
            </Button>        
            </Box>
            </Card>
            </Grid>

            <Grid item xs={12} md={4} display="flex" alignitems="stretch"> 
            <Card sx={{backgroundColor:"rgb(242, 240, 241)", marginTop: "10px",  width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
            <CardHeader
              title="Why to choose our services?"
              titleTypographyProps={{
                fontSize: 16,
              }}
              subheader={`Always on time!`}
                subheaderTypographyProps={{
                fontSize: 14,
              }}>
            </CardHeader>
            <CardContent sx={{margin:"auto", textAlign:"left"}}>
              <List sx={{ width: '100%',}}>
        	    <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalAtmIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Pricing starts from 3,42 BGN" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <LocalShippingIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Fast delivery" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ForwardToInboxIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Track your parcel " />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ForumIcon/>
                 </Avatar>
              </ListItemAvatar>
              <ListItemText primary="We answer your enquires shortly" />
              </ListItem>
            </List>
            </CardContent>
            <Box>
            <Button sx={{color:"#cd7700"}} type="submit" name="submit" aria-label="favorite">
             Find more
            </Button>              
            </Box>
            </Card>
            </Grid>

            <Grid item xs={12} md={4} display="flex" alignitems="stretch"> 
            <Card sx={{backgroundColor:"rgb(242, 240, 241)", marginTop: "10px",  width:"100%", display:"flex", flexWrap:"wrap", flexDirection:"column"}}>
            <CardHeader
            title="Our Story"
              titleTypographyProps={{
                fontSize: 16,
              }}
              subheader={`About us`}
                subheaderTypographyProps={{
                fontSize: 14,
              }}>
            </CardHeader>
            <CardMedia
              component="img"
              height="150"
              image="../images/111.jpg"
              sx={{margin:"auto"}}
            ></CardMedia>
            <CardContent sx={{margin:"auto", textAlign:"left"}}>
              <Typography sx={{marginTop:"30px"}} variant="body2" color="black">
              NavTra is your personal delivery partner that allows you to explore products from worldwide markets with one simple click.
              Now you can shop from online stores from USA, Europe and Asia and have your parcels delivered to your home.Discover new markets today!
            </Typography> 
            </CardContent>
            
            <Box>
            
            <Button sx={{color:"#cd7700"}} aria-label="delete">
              Contact us
            </Button>        

            </Box>
            </Card>

        </Grid>
    </Grid> 
    
  );
}
export default HowItWorksFunc;