import React, { useContext, useState } from "react";
import { StoreContext } from "./../../context/StroreContext/Index";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, Box, Typography, TextField } from "@mui/material";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/LoginPopup/Index.jsx";
import { Button } from "react-scroll";
import { useNavigate } from "react-router";

const Index = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
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
        xs="10"
        sm="10"
        md="10"
        lg="10"
        sx={{
          marginTop: "50px",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: "80vw" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Items
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Price
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "10px",
                      sm: "12px",
                      md: "14px",
                      lg: "16px",
                    },
                  }}
                >
                  Remove
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <TableRow
                      key={item.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={url + "/images/" + item.image}
                          alt={item.name}
                          style={{ width: "50px" }}
                        />
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Outfit, sans-serif",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                          },
                        }}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Outfit, sans-serif",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                          },
                        }}
                      >
                        ${item.price}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Outfit, sans-serif",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                          },
                        }}
                      >
                        {cartItems[item._id]}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{
                          fontFamily: "Outfit, sans-serif",
                          fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                          },
                        }}
                      >
                        ${item.price * cartItems[item._id]}
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          onClick={() => removeFromCart(item._id)}
                          sx={{
                            cursor: "pointer",
                            fontFamily: "Outfit, sans-serif",
                            fontSize: {
                              xs: "10px",
                              sm: "12px",
                              md: "14px",
                              lg: "16px",
                            },
                          }}
                        >
                          X
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid
        sx={{
          minWidth: "80%",
          marginTop: "50px",
          display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
          gap: "200px",
          justifyContent: "center",
        }}
      >
        <Grid
          xs="10"
          sm="10"
          md="5"
          lg="5"
          sx={{
            minWidth: "40%",
          }}
        >
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
        <Grid
          xs="10"
          sm="10"
          md="5"
          lg="5"
          sx={{
            minWidth: "40%",
          }}
        >
          <Typography
            sx={{ fontFamily: "Outfit, sans-serif", fontSize: "16px" }}
          >
            If you have a promocode, Enter it here
          </Typography>
          <Box
            sx={{
              display: "flex",
              minWidth: "100%",
              backgroundColor: "#eaeaea",
              justifyContent: "space-between",
              marginTop: "10px",
              borderRadius: "6px",
            }}
          >
            <input
              name="promocode"
              placeholder="   promo code"
              type="text"
              id="promocode"
              variant="filled"
              style={{
                backgroundColor: "#eaeaea",
                border: "none",
                outline: "none",
                width: "300px",
                height: "40px",
                borderRadius: "6px",
                fontFamily: "Outfit, sans-serif",
              }}
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "6px",
                width: "130px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Index;
