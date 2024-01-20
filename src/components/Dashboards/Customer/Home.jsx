import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../../../store/thunks/getUserThunk";

import { Navbar } from "./Navbar";
import { Navigate } from "react-router-dom";
import Sidebar from "../../Sidebar";

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
      <Box mt={8} ml={5}>
        <Sidebar />
      </Box>
    </>
  );
};
