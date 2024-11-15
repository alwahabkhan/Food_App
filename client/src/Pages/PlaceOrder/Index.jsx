import React, { useEffect } from "react";
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
import { useNavigate, useNavigation } from "react-router";
import { StoreContext } from "../../context/StroreContext/Index.jsx";
import axios from "axios";
const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    token,
    url,
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
      status: "Pending",
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

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
          marginTop: "100px",
        }}
      >
        <form onSubmit={placeOrder}>
          <Grid
            sx={{
              display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
              gap: "150px",
              justifyContent: "space-between",
            }}
          >
            <Grid
              xs="12"
              sm="12"
              md="6"
              lg="6"
              sx={{
                width: "100%",
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

              <Box sx={{ display: "flex", marginBottom: "10px" }}>
                <TextField
                  name="firstName"
                  onChange={onChangeHandler}
                  value={data.firstName}
                  placeholder="first name"
                  type="text"
                  id="firstname"
                  variant="outlined"
                  size="small"
                  required
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
                  name="lastName"
                  onChange={onChangeHandler}
                  value={data.lastName}
                  placeholder="Last name"
                  type="text"
                  id="lastname"
                  required
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
                onChange={onChangeHandler}
                value={data.email}
                placeholder="Email address"
                type="email"
                id="email"
                variant="outlined"
                size="small"
                required
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
                onChange={onChangeHandler}
                value={data.street}
                placeholder="Street"
                type="text"
                id="street"
                variant="outlined"
                size="small"
                required
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
                  onChange={onChangeHandler}
                  value={data.city}
                  placeholder="City"
                  type="text"
                  id="city"
                  variant="outlined"
                  size="small"
                  required
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
                  onChange={onChangeHandler}
                  value={data.state}
                  placeholder="State"
                  type="text"
                  id="state"
                  variant="outlined"
                  size="small"
                  required
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
                  onChange={onChangeHandler}
                  value={data.zipcode}
                  placeholder="Zip Code"
                  type="text"
                  id="zipcode"
                  variant="outlined"
                  size="small"
                  required
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
                  onChange={onChangeHandler}
                  value={data.country}
                  placeholder="Country"
                  type="text"
                  id="country"
                  variant="outlined"
                  size="small"
                  required
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
                onChange={onChangeHandler}
                value={data.phone}
                placeholder="Phone"
                type="phone"
                id="phone"
                variant="outlined"
                size="small"
                required
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
            </Grid>
            <Grid
              xs="12"
              sm="12"
              md="5"
              lg="5"
              sx={{
                width: "100%",
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
                      <TableCell align="right">
                        ${getTotalCartAmount()}
                      </TableCell>
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
                  type="submit"
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
        </form>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Index;
