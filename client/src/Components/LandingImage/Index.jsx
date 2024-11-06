import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import headerImg from "../../Assets/header_img.png";
import Fade from "@mui/material/Fade";

const LandingImage = () => {
  return (
    <Grid
      container
      style={{
        marginTop: "40px",
        height: "34vw",
        marginX: "30px",
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "left",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        xs={2}
        sm={6}
        md={6}
        lg={6}
        sx={{
          position: "absolute",
          paddingLeft: { xs: "28px", sm: "20px", md: "170px", lg: "220px" },
          paddingTop: { xs: "28px", sm: "60px", md: "70px", lg: "120px" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
          maxWidth: "50%",
        }}
      >
        <Fade in={true} timeout={3000}>
          <Grid>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "12px", sm: "13px", md: "30px", lg: "44px" },
                display: { xs: "block", sm: "block", md: "block" },
              }}
            >
              Order your <br /> favourite food here
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              sx={{
                fontFamily: "Raleway, Arial",
                display: { xs: "none", sm: "none", md: "block" },
                fontSize: { md: "12px", lg: "16px" },
              }}
            >
              Choose from a diverse menu featuring a detectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </Typography>
            <br />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "black",
                borderRadius: "35px",
                fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "16px" },
                paddingX: { xs: "8px", sm: "20px", md: "25px", lg: "25px" },
                display: { xs: "block", sm: "block", md: "block" },
              }}
            >
              View Menu
            </Button>
          </Grid>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default LandingImage;
