import React from "react";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LandingImage from "../../Components/LandingImage/Index.jsx";
import { Box, Grid } from "@mui/material";
import { assets } from "../../Assets/assets.js";

function Home() {
  return (
    <Grid>
      <Header />

      <LandingImage />
      <Footer />
    </Grid>
  );
}

export default Home;
