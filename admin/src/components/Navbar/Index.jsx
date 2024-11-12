import React from "react";
import { AppBar, Toolbar, Grid, IconButton, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { assets } from "../../assets/assets.js";
import "@fontsource/outfit";

const Navbar = () => {
  return (
    <AppBar color="transparent" elevation={1} position="fixed">
      <Toolbar>
        <Grid container alignItems="center" sx={{ minHeight: "80px" }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "left",
              paddingLeft: "20px",
            }}
          >
            <img src={assets.logo} alt="Logo" style={{ width: "150px" }} />
          </Grid>

          <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Admin
            </Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "right",
              paddingRight: "20px",
            }}
          >
            <IconButton color="inherit">
              <img
                src={assets.profile_image}
                alt="Logo"
                style={{ width: "40px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
