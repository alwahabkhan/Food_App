import React, { useContext } from "react";
import { StoreContext } from "../../context/StroreContext/Index.jsx";
import FoodItem from "../FoodItem/Index.jsx";
import { Typography, Grid } from "@mui/material";
const Index = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <Grid
      container
      sx={{
        marginTop: "40px",
        paddingX: "130px",
      }}
    >
      <Grid>
        <Typography variant="h5">Top dishes near you</Typography>
      </Grid>
      <br /> <br />
      <Grid
        xs={2}
        sm={6}
        md={8}
        lg={12}
        sx={{
          display: "inline",
          gridTemplateColumns: "repeat",
          marginTop: "30px",
          rowGap: "50px",
        }}
      >
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Index;
