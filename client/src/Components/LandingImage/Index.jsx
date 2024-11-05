import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import headerImg from "../../Assets/header_img.png";

const LandingImage = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{
        marginTop: "100px",
        height: "34vw",
        marginX: "30px",
        marginTop: "40px",
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "left",
        position: "relative",
      }}
    >
      <Grid
        item
        xs={6}
        md={6}
        lg={8}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Typography variant="h3" gutterBottom>
          Order your favourite food here
        </Typography>
        <Typography variant="h6" gutterBottom>
          Choose from a diverse menu featuring a detectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#fff", color: "black" }}
        >
          View Menu
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingImage;
