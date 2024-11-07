import React from "react";
import { Typography, Grid } from "@mui/material";
import { assets } from "../../Assets/assets";

function Index() {
  return (
    <section id="mobile-app">
      <Grid
        sx={{
          textAlign: "center",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Grid>
          <Typography
            sx={{
              fontFamily: "Outfit, sans-serif",
              fontSize: { xs: "20px", sm: "28px", md: "35px", lg: "40px" },
            }}
          >
            <strong>
              {" "}
              For Better Exprience Download
              <br /> Tomato App{" "}
            </strong>
          </Typography>
        </Grid>
        <Grid
          sx={{
            marginTop: "30px",
          }}
        >
          <img
            src={assets.play_store}
            alt=""
            style={{
              cursor: "pointer",
              width: "170px",
              paddingInline: "10px",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />{" "}
          <img
            src={assets.app_store}
            alt=""
            style={{
              cursor: "pointer",
              width: "160px",
              paddingInline: "10px",
              transition: "0.5s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.10)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Grid>
      </Grid>
    </section>
  );
}

export default Index;
