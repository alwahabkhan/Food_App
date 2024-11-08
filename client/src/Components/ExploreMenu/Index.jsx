import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import { menu_list } from "../../Assets/assets";
import "@fontsource/outfit";

const Index = ({ category, setCategory }) => {
  return (
    <section id="menu">
      <Grid
        container
        sx={{
          marginTop: "40px",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          sx={{
            minWidth: "80%",
            textAlign: "left",
            marginX: { xs: "40px", sm: "80px", md: "90px", lg: "130px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "18px", md: "20px", lg: "26px" },
              paddingBottom: "15px",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            <strong> Explore our menu </strong>
          </Typography>
          <Typography
            variant="p"
            sx={{
              maxWidth: "60%",
              fontSize: { xs: "8px", sm: "10px", md: "14px", lg: "16px" },
              fontFamily: "Outfit, sans-serif",
            }}
          >
            Choose from a diverse menu featuring a delectable array of dishes.
            Our mission is to satisfy your <br /> cravings and elevate your
            dining experience, one delicious meal at a time.
          </Typography>
        </Grid>

        <Grid
          container
          xs={10}
          sm={10}
          md={10}
          lg={10}
          sx={{
            // justifyContent: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            minWidth: "80%",
            marginTop: "30px",
            position: "relative",
            overflowX: "hidden",
          }}
        >
          {menu_list.map((item, index) => (
            <Grid item xs={3} sm={3} md={1} lg={1} key={index} sx={{}}>
              <Box
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  style={{
                    height: "auto",
                    borderRadius: "50%",
                    minWidth: "80px",
                    width: "6.5vw",
                    cursor: "pointer",
                    padding: "2px",
                    border:
                      category === item.menu_name
                        ? "6px solid #e1711c"
                        : "none",
                  }}
                />
                <Typography
                  sx={{
                    marginTop: "5px",
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "12px",
                      lg: "18px",
                    },
                    cursor: "pointer",
                    marginBottom: "15px",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {item.menu_name}
                </Typography>
              </Box>
            </Grid>
          ))}
          <Divider
            sx={{
              width: "100%",
              height: "1.5px",
              marginTop: "40px",
              backgroundColor: "#D3D3D3",
            }}
          />
        </Grid>
      </Grid>
    </section>
  );
};

export default Index;
