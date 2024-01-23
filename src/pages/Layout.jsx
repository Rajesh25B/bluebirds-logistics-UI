import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/LandingPage/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
