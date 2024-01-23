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

export function SectionBody({ name, context }) {
  return (
    <>
      <Typography
        // mt={1}
        ml={5}
        width="13em"
        variant="h5"
        component="div"
        letterSpacing="-0.5px"
        fontWeight={800}
      >
        {name}
      </Typography>
      <hr />
      <Typography mt={-1} variant="h6" letterSpacing="-0.8px" fontWeight={500}>
        {context}
      </Typography>
    </>
  );
}

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
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          overflow: "hidden",
          marginBottom: "2rem",
          backgroundColor: "#c2bbfa",
        }}
      >
        <Container sx={{ mt: 3, mb: 6, display: "flex" }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <DashboardIcon sx={{ fontSize: "150px" }} />
                <SectionBody
                  name="Personalized Dashboard"
                  context="You can access your dashboard for analytics and metrics and recieve reports with notifications and PR quote history."
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <AccountCircleIcon sx={{ fontSize: "150px" }} />
                <SectionBody
                  name="Manage Your Account"
                  context="You can update your address book, view documents or check the shipment status all at one place."
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <TrendingUpIcon sx={{ fontSize: "150px" }} />
                <SectionBody
                  name="Exclusive rates"
                  context="By registering, you will access specially negotiated rates for your packages that you will not find anywhere else."
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Section4;
