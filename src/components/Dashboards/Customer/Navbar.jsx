import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import MainLogo from "/src/assets/styles/svg/MainLogo";
import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk, logoutThunk } from "../../../store";
import { CustomButtonRoute } from "../../../routes/CustomButtonRoute";

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
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const authLinks = (
    <>
      <CustomButtonRoute
        to={`/customer/home/`}
        name="Home"
        onclick={() => dispatch(getUserThunk())}
      />
      <CustomButtonRoute
        to={`/customer/profile/`}
        name="Profile"
        // onclick={() => dispatch(getUserThunk())}
      />
      <CustomButtonRoute
        reloadDocument={true}
        to={`/login/`}
        name="Logout"
        onclick={() => dispatch(logoutThunk())}
      />
    </>
  );

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
                <Link to={`/customer/home/`}>
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
              {authLinks}
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
                <CustomButtonRoute to={`/customer/home/`} name="Home" />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CustomButtonRoute to={`/`} name="Logout" />
              </MenuItem>
            </Menu>
          </CustomToolbar>
        </AppBar>
      </Box>
    </>
  );
}
export { Navbar };
