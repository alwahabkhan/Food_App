import { Typography, Grid, Button, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { assets } from "../../Assets/assets";
import { TextField } from "@mui/material";

const Index = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <Grid
      sx={{
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        backgroundColor: "#00000090",
        display: "grid",
      }}
    >
      <Grid
        sx={{
          placeSelf: "center",
          color: "#808080",
          backgroundColor: "white",
          display: "flex",
          width: "350px",
          flexDirection: "column",
          gap: "25px",
          padding: "25px",
          borderRadius: "8px",
          fontSize: "14px",
          animation: "fadeIn 500",
        }}
      >
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: "20px",
              color: "black",
            }}
          >
            <strong> {currState} </strong>
          </Typography>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
          />
        </Grid>
        <Grid>
          {currState === "Login" ? (
            <></>
          ) : (
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Enter Your Name"
              name="name"
              size="small"
              autoFocus
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
              }}
            />
          )}
          <form>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              size="small"
              autoFocus
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
              }}
            />
            <br />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              size="small"
              autoComplete="current-password"
              sx={{
                "& .MuiInputBase-input": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
                "& .MuiInputLabel-root": {
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                },
              }}
            />
            <br />
          </form>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#e1711c",
              fontSize: "12px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {currState === "Login" ? "Login" : "Create account"}
          </Button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            gap: "6px",
          }}
        >
          <Checkbox required />
          <Typography
            sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
          >
            By continuing, I agree to the terms and conditions of use & privacy
            policy.
          </Typography>
        </Grid>
        {currState === "Login" ? (
          <Typography
            sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
          >
            Create a new account ?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              style={{ cursor: "pointer", color: "#e1711c" }}
            >
              {" "}
              Register here
            </span>
          </Typography>
        ) : (
          <Typography
            sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
          >
            Already have an account ?{" "}
            <span
              onClick={() => setCurrState("Login")}
              style={{ cursor: "pointer", color: "#e1711c" }}
            >
              Login here
            </span>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Index;
