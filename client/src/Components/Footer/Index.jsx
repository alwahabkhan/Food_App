import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { assets } from "./../../Assets/assets.js";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Divider from "@mui/material/Divider";

function Index() {
  return (
    <section id="contact-us">
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{
          minWidth: "100%",
          backgroundColor: "#323232",
          marginTop: "50px",
        }}
      >
        <Grid container xs={12} md={6} lg={6} sx={{ padding: "80px" }}>
          <img src={assets.logo} alt="" className="logo" />

          <Typography sx={{ color: "white", marginTop: "16px" }}>
            Lorem ipsum, dolor sit amet consectetur adipsicing elit. Ex
            reprehenderit debitis earum excepturi quae laborum a amet modi
            laboriosam cumque aperiam id labore ducimus, ipsum assumenda
            pariatur aliquid blanditiis soluta!
          </Typography>
          <Box sx={{ marginTop: "16px" }}>
            <FacebookIcon
              sx={{ color: "white", padding: "10px", cursor: "pointer" }}
            />
            <TwitterIcon
              sx={{ color: "white", padding: "10px", cursor: "pointer" }}
            />
            <LinkedInIcon
              sx={{ color: "white", padding: "10px", cursor: "pointer" }}
            />
          </Box>
        </Grid>

        <Grid
          container
          direction="column"
          xs={12}
          md={3}
          lg={3}
          sx={{ padding: "60px", alignItems: "center" }}
        >
          <Typography
            color="white"
            fontSize={{ xs: "20px", sm: "20px", md: "22px", lg: "30px" }}
          >
            <strong> Company </strong>
          </Typography>
          <Typography color="white" sx={{ paddingTop: "20px" }}>
            Home
          </Typography>
          <Typography color="white" sx={{ paddingTop: "10px" }}>
            About us
          </Typography>
          <Typography color="white" sx={{ paddingTop: "10px" }}>
            Delivery
          </Typography>
          <Typography color="white" sx={{ paddingTop: "10px" }}>
            Privary Policy
          </Typography>
        </Grid>

        <Grid
          container
          direction="column"
          xs={12}
          md={3}
          lg={3}
          sx={{ padding: "60px", alignItems: "center" }}
        >
          <Typography
            color="white"
            fontSize={{ xs: "20px", sm: "20px", md: "22px", lg: "30px" }}
          >
            <strong> Get in Touch </strong>
          </Typography>
          <Typography color="white" sx={{ marginTop: "20px" }}>
            + 312 56789032
          </Typography>
          <Typography color="white" sx={{ paddingTop: "10px" }}>
            contact@contact.com
          </Typography>
        </Grid>
        <Grid container xs={10} md={10} lg={11}>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              marginX: { xs: "30px", sm: "75px", md: "100px", lg: "60px" },

              backgroundColor: "#D3D3D3",
            }}
          />
        </Grid>

        <Grid
          container
          xs={12}
          md={12}
          lg={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            paddingY: "25px",
          }}
        >
          <Typography color="white">
            Copyright 2024 @ Foodap.com - All Right Reserved.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}

export default Index;
