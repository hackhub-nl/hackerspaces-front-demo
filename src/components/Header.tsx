import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import { NavbarWrapper } from "../styles/Header.modules";

const Header = () => {
  return <NavbarWrapper>
    <AppBar>
        <Toolbar>
            <Typography>hackhub.nl</Typography>
        </Toolbar>
    </AppBar>
  </NavbarWrapper>;
};

export default Header;
