import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import MainLogo from "/src/assets/styles/svg/MainLogo";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk, logoutThunk } from "../../../store";
import { CustomButtonRoute } from "../../../routes/CustomButtonRoute";
import Modal from "../../Modal";
import { Notifications } from "@mui/icons-material";

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

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "15px",
  paddingTop: "5px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.user
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState(false);

  const onClose = () => {
    setOpenModal(false);
  };

  const authLinks = (
    <>
      <CustomButtonRoute
        to={`/home/`}
        name={isLoading ? "" : `${user.username}`}
      />
      <CustomButtonRoute
        to={`/home/`}
        name="HOME"
        // onclick={() => dispatch(getUserThunk())}
      />
      <CustomButtonRoute
        to={`/profile/`}
        name="Profile"
        // onclick={() => dispatch(getUserThunk())}
      />
      <Icons color="inherit" px={1}>
        <Badge badgeContent={0} color="error">
          <Notifications />
        </Badge>
        <Button
          color="inherit"
          // onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          <Badge>
            <NightsStayIcon />
          </Badge>
        </Button>
      </Icons>

      <Button
        color="inherit"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Logout
      </Button>
    </>
  );

  const shipperLinks = (
    <>
      <CustomButtonRoute
        to={`/create/order`}
        name={isLoading ? "" : "CREATE NEW ORDER"}
      />
      <CustomButtonRoute
        to={`/track/order/`}
        name="TRACK PACKAGE"
        // onclick={() => dispatch(getUserThunk())}
      />
      <CustomButtonRoute
        to={`/customer/profile/`}
        name="Profile"
        onclick={() => dispatch(getUserThunk())}
      />
      <Icons color="inherit" px={1}>
        <Badge badgeContent={0} color="error">
          <Notifications />
        </Badge>
      </Icons>

      <Button
        color="inherit"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Logout
      </Button>
    </>
  );

  const logoutModalButton = (
    <Link to="/">
      <Button variant="contained" onClick={() => dispatch(logoutThunk())}>
        Logout
      </Button>
    </Link>
  );
  const goBackModalButton = (
    <Button variant="contained" onClick={() => setOpenModal(false)}>
      GO BACK
    </Button>
  );

  const modal = (
    <Modal
      close={onClose}
      actionBar={logoutModalButton}
      backBtn={goBackModalButton}
    >
      <Typography variant="h6">Are you sure to logout?</Typography>
    </Modal>
  );

  // if (!isAuthenticated) return <Navigate to="/home/" />;

  return (
    <>
      {openModal && modal}
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
                <Link to={`/home/`}>
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
              {user.type === "SHIPPER" ? shipperLinks : authLinks}
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
                <CustomButtonRoute to={`/home/`} name="Home" />
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <CustomButtonRoute
                  name="Logout"
                  onclick={() => setOpenModal(true)}
                />
              </MenuItem>
            </Menu>
          </CustomToolbar>
        </AppBar>
      </Box>
    </>
  );
}
export { Navbar };
