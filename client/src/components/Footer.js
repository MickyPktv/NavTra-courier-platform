import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import "./NavBar.css"

function FooterBasic() {
  

  return (
    <Box px={{xs:3, sm:5}} 
         py={{xs:5, sm:5}}
         bgcolor="#273649" 
         color="whitesmoke"
         mt={2} 
         mb={1} 
         display="flex" 
         justifyContent="center">
      <Container maxwidth="md">
        <Grid container textAlign="left" spacing={5}>
          <Grid item xs={12} md={4}>
            <Box borderBottom={1}>
                <Typography variant="h7" color="#cd7700">User</Typography>
            </Box>
            <Box>
              <Link to="/login" className='myLink'> Login </Link>
            </Box>
            <Box>
              <Link to="/sign-up" className='myLink'> Register </Link>
            </Box>
            <Box>
              <Link to="/" className='myLink'> Contact Us </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
            <Typography variant="h7" color="#cd7700">Orders</Typography>
            </Box>
            <Box>
              <Link to="/" className='myLink'> Track your item </Link>
            </Box>
            <Box>
              <Link to="/" className='myLink'> Pricing </Link>
            </Box>
            <Box>
              <Link to="/" className='myLink'> Services </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
            <Typography variant="h7" color="#cd7700">Contact us</Typography>
            </Box>
            <Box>
              <Link to="/" className='myLink'> address: 78 Vitosha str 1000 Sofia </Link>
            </Box>
            <Box>
              <Link to="/" className='myLink'> mob: +359888123456 </Link>
            </Box>
            <Box>
              <Link to="/" className='myLink'> office@navtra.com </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{sm:5}}>© 2022 All rights reserved NavTra LTD</Box>
        </Container>
      </Box>
  );
}

export default FooterBasic;