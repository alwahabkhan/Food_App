import { Typography, Grid, Button, Checkbox } from "@mui/material";
import React, { useContext, useState } from "react";
import { assets } from "../../Assets/assets";
import { TextField } from "@mui/material";
import axios from "axios";
import { StoreContext } from "../../context/StroreContext/Index";
const Index = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { url, setToken } = useContext(StoreContext);

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

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
        <form onSubmit={onLogin}>
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
                placeholder="Enter Your Name"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
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
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
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
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
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
              placeholder="Password"
              type="password"
              onChange={onChangeHandler}
              value={data.password}
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
                "&.Mui-focused fieldset": {
                  borderColor: "tomato",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
              }}
            />
            <br />
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
              By continuing, I agree to the terms and conditions of use &
              privacy policy.
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
        </form>
      </Grid>
    </Grid>
  );
};

export default Index;
