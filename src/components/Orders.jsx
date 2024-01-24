import { Container } from "@mui/material";
import React from "react";

function Orders() {
  return (
    <>
      <Container
        component="span"
        sx={{
          border: "2px solid red",
          width: { xs: "50vw", sm: "60vw" },
          height: { sm: "50vh", lg: "40vh", xs: "30vh" },
        }}
      ></Container>
    </>
  );
}

export default Orders;
