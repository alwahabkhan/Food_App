import React from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "../../components/Navbar/Index.jsx";
import SideBar from "../../components/Sidebar/Index.jsx";
import "@fontsource/outfit";

const drawerWidth = 240;

function Index() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "80px",

          justifyItems: "center",
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Index;
