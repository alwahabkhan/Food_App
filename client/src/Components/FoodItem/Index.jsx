import React, { useContext } from "react";
import { assets } from "../../Assets/assets";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import "@fontsource/outfit";
import { StoreContext } from "../../context/StroreContext/Index";

const Index = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <Card
      sx={{
        maxWidth: 280,
        height: 370,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        borderRadius: "15px",
      }}
    >
      {" "}
      <Grid sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="210"
          image={url + "/images/" + image}
          alt="food-image"
          sx={{ borderRadius: "15px 15px 0 0" }}
        />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="add"
            style={{
              width: "35px",
              position: "absolute",
              bottom: "15px",
              right: "15px",
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
        ) : (
          <Box
            sx={{
              position: "absolute",
              bottom: "15px",
              right: "15px",
              display: "flex",
              alignItems: "center",
              padding: "6px",
              backgroundColor: "white",
              borderRadius: "50px",
            }}
          >
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              style={{ cursor: "pointer", width: "25px" }}
            />
            <Typography sx={{ marginX: "8px" }}> {cartItems[id]} </Typography>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              style={{ cursor: "pointer", width: "25px" }}
            />
          </Box>
        )}
      </Grid>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ fontFamily: "Outfit, sans-serif" }}>
            {name}
          </Typography>

          <img
            src={assets.rating_starts}
            alt="rating-stars"
            style={{
              width: "65px",
              height: "13px",
            }}
          />
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            paddingTop: "10px",
            fontFamily: "Outfit, sans-serif",
            fontSize: "12px",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: " #e1711c",
            paddingTop: "8px",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          ${price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Index;
