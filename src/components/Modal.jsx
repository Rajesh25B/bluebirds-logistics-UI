import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ReactDOM from "react-dom";
import "../assets/styles/css/index.css";

export default function Modal({ close, children, actionBar, backBtn }) {
  useEffect(() => {
    document.body.classList.add("modal-scroll");
    return () => {
      document.body.classList.remove("modal-scroll");
    };
  }, []);
  return ReactDOM.createPortal(
    <Box>
      <Box
        onClick={close}
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "grey.500",
          opacity: "80%",
          zIndex: "modal",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          inset: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
          zIndex: "modal",
          backgroundColor: "white",
          height: { xs: "150px", sm: "180px", lg: "250px" },
          margin: {
            xs: "130px 25px",
            sm: "150px 100px",
            md: "80px 200px",
            lg: "150px 60px",
          },
          borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          {children}
          <Box
            mt={2}
            sx={{
              display: "flex",
            }}
          >
            <Box mr={2}>{backBtn}</Box>
            <Box>{actionBar}</Box>
          </Box>
        </Box>
      </Box>
    </Box>,
    document.querySelector(".modal-container")
  );
}
