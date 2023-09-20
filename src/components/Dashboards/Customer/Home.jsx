import React, { useEffect } from "react";

import { Box, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../../store/thunks/getUserThunk";

import { Navbar } from "./Navbar";
import { Navigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user, isLoading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);

  if (!isAuthenticated) return <Navigate to="/login/" />;

  return (
    <>
      <Navbar />
      <Box mt={15} align="center">
        {isLoading ? <CircularProgress /> : `WELCOME ${user.username}`}
      </Box>
    </>
  );
};
