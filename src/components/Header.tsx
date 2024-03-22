import React from "react";
import { AppBar, Toolbar, Typography, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Hackerspaces" },
  { name: "Events" },
  { name: "Locations " },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar sx={{ padding: "10px", backgroundColor: "darkblue" }}>
        <Toolbar>
          <Typography className="logo">hackhub.nl</Typography>
          <div className="navLinks">
            {menuItems.map((nav, index) => (
              <Tab label={nav.name} key={index} />
            ))}
          </div>
          <Button variant="contained" color="info">
            Subscribe
          </Button>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
