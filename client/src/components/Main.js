import { Box, Grid,} from "@mui/material";
import React from "react";
import Background from "../images/photo11.jpg";
import HowItWorksFunc from "./Cards";
import FAQ from "./FAQ";



const MainContent = () => {
  return (
    <Box spacing={2}>
      <Grid
        container
        minHeight="470px"
        flexDirection="row-reverse"
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
      </Grid>

      <HowItWorksFunc />
      
      <FAQ />
    </Box>
  );
};
export default MainContent;
