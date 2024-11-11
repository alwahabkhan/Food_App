import React from "react";
import { AppBar, Toolbar, Grid, IconButton, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { assets } from "../../assets/assets.js";

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
            <Typography variant="h6">Login</Typography>
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
              <AdminPanelSettingsIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
