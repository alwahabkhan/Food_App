import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StroreContext/Index";
import { Grid, Typography, Button } from "@mui/material";
import Header from "../../Components/Header/Index.jsx";
import Footer from "../../Components/Footer/Index.jsx";
import LoginPopup from "../../Components/LoginPopup/Index.jsx";
import axios from "axios";
import { assets } from "../../Assets/assets.js";

const Index = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
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
        }}
      >
        <Grid
          sx={{
            marginTop: "100px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              marginBottom: "20px",
              fontFamily: "Outfit, sans-serif",
            }}
          >
            {" "}
            <strong> My Orders </strong>
          </Typography>
          {data.map((order, index) => {
            return (
              <Grid
                key={index}
                sx={{
                  display: { xs: "block", sm: "block", md: "grid", lg: "grid" },
                  gridTemplateColumns: "0.5fr 2fr 1fr 1fr 2fr 1fr",
                  alignItems: "center",
                  gap: "30px",

                  padding: "10px 20px",
                  marginY: "20px",
                  color: "#454545",
                  border: "1px solid tomato",
                }}
              >
                <img
                  src={assets.parcel_icon}
                  alt=""
                  style={{
                    width: "50px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Outfit, sans-serif",
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
                    fontSize: "14px",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  ${order.amount}.00
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  Items: {order.items.length}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  <span>&#x25cf;</span> <strong>{order.status}</strong>{" "}
                </Typography>
                <Button
                  variant="contained"
                  onClick={fetchOrders}
                  sx={{
                    fontSize: "12px",
                    backgroundColor: "#ffe1e1",
                    color: "#454545",
                  }}
                >
                  Track Order
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Index;
