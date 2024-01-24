import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/LandingPage/Footer";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export default function Layout() {
  const { isLoading, isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <Outlet />
      {isAuthenticated ? "" : <Footer />}
    </>
  );
}
