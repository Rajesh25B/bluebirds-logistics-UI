import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import MainLogo from "/src/assets/styles/svg/MainLogo";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { CustomButtonRoute } from "../../routes/CustomButtonRoute";

const theme = createTheme({
  palette: {
    primary: {
      light: "#f2eeed",
      main: "#4a6ae8",
    },
  },
});

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-around",
});

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box>
        <AppBar
          theme={theme}
          position="fixed"
          sx={{
            display: { sm: "flex" },
            height: {
              sm: 80, //upto 600px
            },
          }}
        >
          <CustomToolbar>
            <Box>
              <IconButton
                aria-label="home"
                edge="start"
                variant="text"
                disableRipple
              >
                <Link to={`/`}>
                  <MainLogo />
                </Link>
              </IconButton>
            </Box>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
                paddingLeft: { xs: "none", sm: "none", md: 30, lg: 60 },
              }}
            >
              <CustomButtonRoute to={`/track/`} name="Track your package" />
              <CustomButtonRoute to={`/about/`} name="About" />
              <CustomButtonRoute to={`/services/`} name="Services" />
              <CustomButtonRoute to={`/login/`} name="Login" />
              <CustomButtonRoute to={`/register/`} name="Register" />
              {/* <Button color="inherit" onClick={onclick}>
                <Box
                  component="a"
                  href="/login/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Login
                </Box>
              </Button>
              <Button color="inherit" onClick={onclick}>
                <Box
                  component="a"
                  href="/register/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  Register
                </Box>
              </Button> */}
            </Stack>

            <IconButton
              color="inherit"
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              disableRipple
              sx={{
                display: { xs: "flex", sm: "none", md: "none" },
                paddingLeft: { xs: "none", sm: "none", md: 30, lg: 40 },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              color="inherit"
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/track/`} name="Track your package" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/about/`} name="About" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/services/`} name="Services" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/login/`} name="Login" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/register/`} name="Register" />
              </MenuItem>
            </Menu>
          </CustomToolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
