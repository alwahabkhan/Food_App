import { Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { assets } from "../../Assets/assets";

const Index = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  return (
    <Grid>
      <Grid>
        <Typography>{currState}</Typography>
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
        />
      </Grid>
    </Grid>
  );
};

export default Index;
