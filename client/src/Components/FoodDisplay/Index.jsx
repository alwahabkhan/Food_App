import React, { useContext } from "react";
import { StoreContext } from "../../context/StroreContext/Index.jsx";
import FoodItem from "../FoodItem/Index.jsx";
import { Typography, Grid } from "@mui/material";
import "@fontsource/outfit";
import { Fade } from "@mui/material";

const Index = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <Grid
      container
      sx={{
        marginTop: "40px",
        paddingX: { xs: "55px", sm: "50px", md: "80px", lg: "130px" },
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontFamily: "Outfit, sans-serif" }}>
          <strong> Top dishes near you </strong>
        </Typography>
      </Grid>
      <Fade in={true} timeout={2000}>
        <Grid container spacing={2}>
          {food_list.map(
            (item, index) =>
              (category === "All" || category === item.category) && (
                <Fade in={true} timeout={2000}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    key={index}
                    sx={{
                      marginTop: "30px",
                    }}
                  >
                    <FoodItem
                      id={item._id}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                    />
                  </Grid>
                </Fade>
              )
          )}
        </Grid>
      </Fade>
    </Grid>
  );
};

export default Index;
