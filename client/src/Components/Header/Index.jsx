import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { assets } from "./../../Assets/assets.js";
import { useState } from "react";

function Header() {
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Grid container spacing={3} sx={{ marginTop: "0px" }}>
          <Grid
            container
            item
            xs={2}
            md={3}
            lg={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 34,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                color: "#e1711c",
              }}
            >
              <img src={assets.logo} alt="" className="logo" />
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            item
            xs={2}
            md={4}
            lg={4}
          >
            {["home", "menu", "mobile-app", "contact-us"].map((item) => (
              <Typography
                key={item}
                onClick={() => handleMenuClick(item)}
                sx={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: menu === item ? "2px solid #e1711c" : "none",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </Typography>
            ))}
          </Grid>

          <Grid
            container
            direction="row"
            item
            xs={2}
            md={4}
            lg={4}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ padding: "12px" }} />
            <AddShoppingCartIcon sx={{ padding: "12px" }} />
            <Button
              variant="outlined"
              sx={{
                borderColor: "#e1711c",
                color: "black",
                margin: "10px",
                borderRadius: "20px",
                ":hover": {
                  backgroundColor: "#FFF5EE",
                },
              }}
            >
              sign in
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
