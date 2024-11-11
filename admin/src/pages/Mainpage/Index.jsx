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
        }}
      >
        <Toolbar />
        <Box
          sx={{
            border: "1px solid tomato",
            padding: "20px",
            maxWidth: "400px",
            borderRadius: "10px",
          }}
        >
          <form>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: "center",
              }}
            >
              Login
            </Typography>
            <TextField
              name="email"
              placeholder="Your Email"
              type="text"
              id="email"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              name="password"
              placeholder="Your Password"
              type="password"
              id="password"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                marginBottom: "10px",
              }}
            />
            <Button
              sx={{
                width: "100%",
                backgroundColor: "tomato",
                color: "white",
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
