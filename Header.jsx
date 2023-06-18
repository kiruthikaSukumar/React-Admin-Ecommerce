import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RoutePath } from "./Constants";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalMallIcon from "@mui/icons-material/LocalMall";
// import { useHistory } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";

const drawerWidth = 240;
const navItems = [
  { name: "Orders", Link: "/Orders" },
  { name: "Product", Link: "/Product" },
  { name: "Category", Link: "/Category" },
  { name: "Posters", Link: "/Posters" },
  { name: "Customers", Link: "/Customers" },
];

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

   const handleItemClick = (link) => {
     navigate(link);
     handleDrawerToggle();
  };
  
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Box sx={{ padding: "5px", width: drawerWidth }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", padding: "5%" },
              }}
            >
              NKS collections
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      <Divider />
      <List>
        {navItems.map((navItem, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleItemClick(navItem.Link)}
          >
            <ListItemButton>
              <ListItemText
                primary={navItem.name}
                sx={{
                  textAlign: "center",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{  display: "flex", alignitems: "center" }}>
      <CssBaseline />
      <AppBar position="fixed" component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
           
          >
            <MenuIcon />
          </IconButton>
          <LocalMallIcon sx={{ marginLeft: "auto" }} />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}
