import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Toolbar, Grid, Typography } from "@mui/material";
import Navbar from "../../components/Navbar/Index.jsx";
import SideBar from "../../components/Sidebar/Index.jsx";
import "@fontsource/outfit";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets.js";

const drawerWidth = 240;

function Index() {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get("http://localhost:8000/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
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
              <Grid key={index}>
                <img src={assets.parcel_icon} alt="" />
                <Typography>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ",";
                    }
                  })}
                </Typography>
                <Typography>
                  {order.address.firstName + " " + order.address.lastName}
                </Typography>
                <Typography>
                  <Typography>{order.address.street + ","}</Typography>
                  <Typography>
                    {order.address.city +
                      "," +
                      order.address.state +
                      "," +
                      order.address.country +
                      "," +
                      order.address.zipcode}
                  </Typography>
                  <Typography>{order.address.phone}</Typography>
                  <Typography>items: {order.items.length}</Typography>
                  <Typography> ${order.amount} </Typography>
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Index;
