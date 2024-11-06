import React from "react";
import { assets } from "../../Assets/assets";
import { Typography, Grid } from "@mui/material";
const Index = ({ id, name, price, description, image }) => {
  return (
    <Grid sx={{}}>
      <Grid>
        <img src={image} alt="food-image" />
      </Grid>
      <Grid>
        <Typography> {name}</Typography>
        <img src={assets.rating_starts} alt="rating-stars" />
      </Grid>
      <Grid>
        <Typography> {description} </Typography>
        <Typography> ${price} </Typography>
      </Grid>
    </Grid>
  );
};

export default Index;
