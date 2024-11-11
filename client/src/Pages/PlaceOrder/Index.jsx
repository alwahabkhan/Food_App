import React from "react";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/LoginPopup/Index.jsx";
import {
  FilledInput,
  Grid,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router";
import { StoreContext } from "../../context/StroreContext/Index.jsx";
const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
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
          width: "80%",
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          justifyContent: "space-between",
          marginTop: "100px",
          gap: "100px",
        }}
      >
        <Grid
          xs="12"
          sm="12"
          md="6"
          lg="6"
          sx={{
            width: "100%",
            marginBottom: { xs: "30px", sm: "30px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "22px",
              marginBottom: "40px",
            }}
          >
            {" "}
            <strong> Delivery Information </strong>{" "}
          </Typography>

          <form>
            <Box sx={{ display: "flex", marginBottom: "10px" }}>
              <TextField
                name="firstname"
                placeholder="first name"
                type="text"
                id="firstname"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                  marginRight: "10px",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />

              <TextField
                name="lastname"
                placeholder="Last name"
                type="text"
                id="lastname"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
            </Box>
            <TextField
              name="email"
              placeholder="Email address"
              type="email"
              id="email"
              variant="outlined"
              size="small"
              style={{
                border: "none",
                outline: "none",
                borderRadius: "6px",
                fontFamily: "Outfit, sans-serif",
                width: "100%",
                marginBottom: "10px",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
              }}
            />
            <TextField
              name="street"
              placeholder="Street"
              type="text"
              id="street"
              variant="outlined"
              size="small"
              style={{
                border: "none",
                outline: "none",
                borderRadius: "6px",
                fontFamily: "Outfit, sans-serif",
                width: "100%",
                marginBottom: "10px",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
              }}
            />
            <Box sx={{ display: "flex", marginBottom: "10px" }}>
              <TextField
                name="city"
                placeholder="City"
                type="text"
                id="city"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                  marginRight: "10px",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
              <TextField
                name="state"
                placeholder="State"
                type="text"
                id="state"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", marginBottom: "10px" }}>
              <TextField
                name="zipcode"
                placeholder="Zip Code"
                type="text"
                id="zipcode"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                  marginRight: "10px",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
              <TextField
                name="country"
                placeholder="Country"
                type="text"
                id="country"
                variant="outlined"
                size="small"
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: "6px",
                  fontFamily: "Outfit, sans-serif",
                  width: "50%",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "tomato",
                    },
                  },
                }}
              />
            </Box>
            <TextField
              name="phone"
              placeholder="Phone"
              type="phone"
              id="phone"
              variant="outlined"
              size="small"
              style={{
                border: "none",
                outline: "none",
                borderRadius: "6px",
                fontFamily: "Outfit, sans-serif",
                width: "100%",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "tomato",
                  },
                },
              }}
            />
          </form>
        </Grid>
        <Grid xs="12" sm="12" md="6" lg="6" sx={{ width: "100%" }}>
          <TableContainer>
            <Typography
              sx={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "22px",
              }}
            >
              {" "}
              <strong>Cart Totals</strong>
            </Typography>

            <Table sx={{ maxWidth: 500 }} aria-label="admin details table">
              <TableBody>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Subtotal
                  </TableCell>
                  <TableCell align="right">${getTotalCartAmount()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Delivery Fee
                  </TableCell>
                  <TableCell align="right">${2}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    <strong>Total</strong>
                  </TableCell>
                  <TableCell align="right">
                    ${getTotalCartAmount() + 2}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              onClick={() => navigate("/order")}
              style={{
                marginTop: "20px",
                width: "240px",
                height: "40px",
                backgroundColor: "tomato",
                border: "none",
                borderRadius: "4px",
                color: "white",
                fontFamily: "Outfit, sans-serif",
                cursor: "pointer",
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </TableContainer>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Index;
