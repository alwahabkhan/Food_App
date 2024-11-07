import React, { useState } from "react";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LandingImage from "../../Components/LandingImage/Index.jsx";
import ExploreMenu from "../../Components/ExploreMenu/Index.jsx";
import FoodDisplay from "../../Components/FoodDisplay/Index.jsx";
import AppDownload from "../../Components/AppDownload/Index.jsx";
import LoginPopup from "../../Components/LoginPopup/Index.jsx";
import { Grid } from "@mui/material";

function Home() {
  const [category, setCategory] = useState("All");
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Grid>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <LandingImage />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      <Footer />
    </Grid>
  );
}

export default Home;
