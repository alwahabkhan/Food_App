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
        <Box
          sx={{
            border: "1px solid tomato",
            padding: "25px",
            maxWidth: "350px",
            borderRadius: "10px",
          }}
        >
          <form>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontFamily: "'Outfit', sans-serif", marginBottom: "20px" }}
            >
              <strong> Login </strong>
            </Typography>
            <TextField
              name="email"
              placeholder="Your Email"
              type="text"
              id="email"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
                marginBottom: "20px",
              }}
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
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "14px",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
                marginBottom: "20px",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#e1711c",
                fontSize: "12px",
                fontFamily: "'Outfit', sans-serif",
                marginBottom: "10px",
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
