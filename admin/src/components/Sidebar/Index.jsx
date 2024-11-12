import React from "react";
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MailIcon from "@mui/icons-material/Mail";

const SideBar = ({ drawerWidth }) => {
  const menuItems = [
    { text: "Add Items", path: "/add" },
    { text: "List Items", path: "/list" },
    { text: "Orders", path: "/order" },
  ];

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.text}
            sx={{
              border: "1px solid black",
              marginY: "20px",
              marginLeft: "30px",
              padding: "0px",
            }}
          >
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                "&.active": {
                  backgroundColor: "#fff0ed",
                  border: "1px solid tomato",
                },
              }}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <AddCircleOutlineIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: {
          sm: "80px",
          xs: "100px",
          md: "180px",
          lg: "220px",
        },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: {
            sm: "80px",
            xs: "80px",
            md: "180px",
            lg: "220px",
          },
          boxSizing: "border-box",
          mt: "82px",
        },
      }}
    >
      {drawer}
    </Drawer>
  );
};

export default SideBar;
