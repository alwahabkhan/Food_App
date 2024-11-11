import React from "react";
import {
  Box,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MailIcon from "@mui/icons-material/Mail";

const SideBar = ({ drawerWidth }) => {
  const drawer = (
    <div>
      <Toolbar />
      <List>
        {["Add Items", "List Items", "Orders"].map((text, index) => (
          <ListItem
            key={text}
            sx={{
              border: "1px solid black",
              marginY: "20px",
              marginLeft: "30px",
              padding: "0px",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AddCircleOutlineIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
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
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
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
