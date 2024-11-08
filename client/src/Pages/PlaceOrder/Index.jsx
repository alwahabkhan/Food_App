import React from "react";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/LoginPopup/Index.jsx";
import { Grid, Typography } from "@mui/material";
import { useState } from "react";
const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        minWidth: "80%",
      }}
    >
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Header setShowLogin={setShowLogin} />
      <Grid
        sx={{
          display: "block",
        }}
      >
        <Typography>Delivery Information</Typography>
        <form>
          <input
            name="firstname"
            placeholder="first name"
            type="text"
            id="firstname"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="lastname"
            placeholder="last name"
            type="text"
            id="lastname"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="email"
            placeholder="Email address"
            type="email"
            id="firstname"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="street"
            placeholder="Street"
            type="text"
            id="street"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="city"
            placeholder="City"
            type="text"
            id="city"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="state"
            placeholder="State"
            type="text"
            id="state"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="zipcode"
            placeholder="Zip Code"
            type="text"
            id="zipcode"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="country"
            placeholder="Country"
            type="text"
            id="country"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
          <input
            name="phone"
            placeholder="Phone"
            type="phone"
            id="phone"
            variant="filled"
            style={{
              backgroundColor: "#eaeaea",
              border: "none",
              outline: "none",
              borderRadius: "6px",
              fontFamily: "Outfit, sans-serif",
            }}
          />
        </form>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Index;
