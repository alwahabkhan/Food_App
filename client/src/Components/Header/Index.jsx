import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { assets } from "./../../Assets/assets.js";
import { useState, useContext } from "react";
import { Link } from "react-scroll";
import "@fontsource/outfit";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StroreContext/Index.jsx";
import { Box, Divider, Drawer } from "@mui/material";

const Header = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (menuItem) => {
    if (menuItem === "home") {
      navigate("/");
    }
    setMenu(menuItem);
  };

  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar disableGutters>
        <Grid container alignItems="center">
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 34,
                letterSpacing: ".3rem",
                color: "#e1711c",
                display: { xs: "block", sm: "block" },
                cursor: "pointer",
              }}
            >
              <img
                src={assets.logo}
                alt="Logo"
                className="logo"
                onClick={() => navigate("/")}
              />
            </Typography>
          </Grid>

          <Grid
            item
            xs={0}
            sm={4}
            md={5}
            lg={4}
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              justifyContent: "center",
            }}
          >
            {["home", "menu", "mobile-app", "contact-us"].map((item) => (
              <Typography
                key={item}
                sx={{
                  paddingX: "10px",
                  cursor: "pointer",
                  borderBottom: menu === item ? "2px solid #e1711c" : "none",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                <Link
                  to={item === "home" ? "/" : item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </Link>
              </Typography>
            ))}
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
                paddingX: "10px",
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              onClick={(e) => navigate("/cart")}
              color="inherit"
              sx={{
                display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
                paddingX: "10px",
              }}
            >
              <AddShoppingCartIcon />
            </IconButton>
            <div className={getTotalCartAmount() === 0 ? " " : "*"}></div>

            {!token ? (
              <Button
                onClick={() => setShowLogin(true)}
                variant="outlined"
                sx={{
                  display: { xs: "block", sm: "block", md: "flex", lg: "flex" },
                  borderColor: "#e1711c",
                  color: "black",
                  borderRadius: "20px",
                  marginX: "10px",
                  fontFamily: "Outfit, sans-serif",
                  ":hover": {
                    backgroundColor: "#FFF5EE",
                  },
                }}
              >
                Sign In
              </Button>
            ) : (
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={assets.profile_icon}
                  alt=""
                  style={{
                    width: "20px",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowMenu(!showMenu)}
                />
                {showMenu && (
                  <ul
                    style={{
                      position: "absolute",
                      right: 0,
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      backgroundColor: "#fff2ef",
                      padding: "12px 25px",
                      borderRadius: "4px",
                      border: "1px solid tomato",
                      outline: "2px solid white",
                      listStyle: "none",
                    }}
                  >
                    <li
                      onClick={() => navigate("/myorders")}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={assets.bag_icon}
                        alt="Orders"
                        style={{
                          width: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Outfit",
                          ":hover": {
                            color: "tomato",
                          },
                        }}
                      >
                        Orders
                      </Typography>
                    </li>
                    <Divider />
                    <li
                      onClick={logout}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={assets.logout_icon}
                        alt="Logout"
                        style={{
                          width: "20px",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "Outfit",
                          ":hover": {
                            color: "tomato",
                          },
                        }}
                      >
                        Logout
                      </Typography>
                    </li>
                  </ul>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
