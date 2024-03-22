import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const menuItems = [
  { name: "Home" },
  { name: "Hackerspaces" },
  { name: "Events" },
];

const Header = () => {
  return (
    <NavbarWrapper>
      <AppBar>
        <Toolbar>
          <Typography>hackhub.nl</Typography>

          <Tabs>
            {menuItems.map((nav, index) => (
              <Tab label={nav.name} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </NavbarWrapper>
  );
};

export default Header;
