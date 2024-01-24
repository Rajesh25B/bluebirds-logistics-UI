import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../../store/thunks/getUserThunk";

import { Navigate } from "react-router-dom";
import Sidebar from "../../Sidebar";
import Loader from "../../Loader";
import Auth from "../../../utils/auth";
import { Navbar } from "./Navbar";

function Home() {
  const { isAuthenticated, user, isLoading, error } = useSelector(
    (state) => state.user
  );

  return (
    <>
      <Navbar />
      {isLoading && !isAuthenticated ? (
        <Loader />
      ) : (
        <Box mt={8} ml={5}>
          <Sidebar />
        </Box>
      )}
    </>
  );
}
export default Auth(Home);
