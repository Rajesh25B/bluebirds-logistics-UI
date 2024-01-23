import { Typography, styled, Box } from "@mui/material";
import React from "react";

const ProductContainer = styled("div")(({ theme }) => ({
  // color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const MyBox = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height: "220px",
    pl: "20px",
  },
  [theme.breakpoints.down("md")]: {
    height: "220px",
    pl: "50px",
  },
}));

export default function Section1() {
  return (
    <>
      <ProductContainer component="div">
        <Typography variant="h4" letterSpacing="-1.5px" m={3}>
          Guaranteed Delivery by 12PM to 8PM across the country on a standard
          delivery day.
        </Typography>
        <MyBox
          component="img"
          src="https://images.unsplash.com/photo-1601467995997-ac1ae9a8fff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="image-3"
          height="350px"
        />
      </ProductContainer>
    </>
  );
}
