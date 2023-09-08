import * as React from "react";

import { Box, Grid, Container, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

function Section4() {
  return (
    <>
      <Container
        sx={{
          mt: 5,
          mb: 2,
          display: "flex",
        }}
      >
        <Typography letterSpacing="-2px" fontSize="2em" variant="h4">
          Register as Shipper/Dispatcher
        </Typography>
      </Container>
      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          marginBottom: "2rem",
          backgroundColor: "#c2bbfa",
        }}
      >
        <Container sx={{ mt: 4, mb: 8, display: "flex" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <DashboardIcon sx={{ fontSize: "150px" }} />
                <Typography
                  mt={1}
                  ml={5}
                  width="13em"
                  variant="h5"
                  component="div"
                  letterSpacing="-0.5px"
                  fontWeight={700}
                >
                  Personalized Dashboard
                </Typography>
                <hr />
                <Typography variant="h6">
                  {
                    "You can access your dashboard for metrics and reports such as notifications and PR quote history."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <AccountCircleIcon sx={{ fontSize: "150px" }} />
                <Typography
                  mt={1}
                  ml={5}
                  width="13em"
                  variant="h5"
                  component="div"
                  letterSpacing="-0.5px"
                  fontWeight={700}
                >
                  Manage Your Account
                </Typography>
                <hr />
                <Typography variant="h6">
                  {
                    "You can update your address book, view documents or check the shipment status all at one place."
                  }
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <TrendingUpIcon sx={{ fontSize: "150px" }} />
                <Typography
                  mt={1}
                  ml={5}
                  width="10em"
                  variant="h5"
                  component="div"
                  letterSpacing="-0.5px"
                  fontWeight={700}
                >
                  Exclusive rates
                </Typography>
                <hr />
                <Typography variant="h6">
                  {
                    "By registering, you will access specially negotiated rates for your packages "
                  }
                  {"that you will not find anywhere else."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Section4;
