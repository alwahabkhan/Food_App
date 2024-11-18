import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Grid,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import Navbar from "../../components/Navbar/Index.jsx";
import SideBar from "../../components/Sidebar/Index.jsx";
import "@fontsource/outfit";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets.js";

const drawerWidth = 240;

function Index() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("Pending");
  const fetchAllOrders = async () => {
    const response = await axios.get("http://localhost:8000/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(
      "http://localhost:8000/api/order/status",
      {
        orderId,
        status: event.target.value,
      }
    );
    if (response.data.success) {
      setStatus({ status });
      fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "80px",

          justifyItems: "center",
        }}
      >
        <Toolbar />
        <Grid>
          {orders.map((order, index) => {
            return (
              <Grid
                key={index}
                sx={{
                  display: { xs: "block", sm: "block", md: "grid", lg: "grid" },
                  gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr",
                  alignItems: "start",
                  gap: "20px",
                  border: "1px solid tomato",
                  padding: "20px",
                  margin: "30px 0px",
                  fontSize: "14px",
                  color: "#505050",
                }}
              >
                <img src={assets.parcel_icon} alt="" />
                <div>
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {order.items.map((item, index) => {
                      if (index === order.items.length - 1) {
                        return item.name + " x " + item.quantity;
                      } else {
                        return item.name + " x " + item.quantity + ",";
                      }
                    })}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    {order.address.firstName + " " + order.address.lastName}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {order.address.street + ","}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {order.address.city +
                      "," +
                      order.address.state +
                      "," +
                      order.address.country +
                      "," +
                      order.address.zipcode}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {order.address.phone}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  items: {order.items.length}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                  }}
                >
                  {" "}
                  ${order.amount}{" "}
                </Typography>
                <Select
                  value={status}
                  onChange={(event) => statusHandler(event, order._id)}
                  sx={{
                    width: "180px",
                    height: "40px",
                    backgroundColor: "#ffe8e4",
                    border: "1px solid tomato",
                    outline: "none",
                  }}
                >
                  <MenuItem value="Pending">Food Processing</MenuItem>
                  <MenuItem value="Out for delivery">Out for delivery</MenuItem>
                  <MenuItem value="Delivered">Delivered</MenuItem>
                </Select>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Index;
