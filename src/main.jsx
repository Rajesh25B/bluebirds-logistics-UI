import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Error.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TwoFactorPage from "./pages/TwoFactorPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

import { Home, Profile } from "./components/Dashboards/Customer/index.jsx";
import Layout from "./pages/Layout.jsx";
import MainPage from "./pages/MainPage.jsx";
import PackageTracking from "./pages/PackageTracking.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<MainPage />} errorElement={<ErrorPage />} />
      <Route path="login/" element={<Login />} />
      <Route path="register/" element={<Register />} />
      <Route path="two-factor/" element={<TwoFactorPage />} />
      <Route path="track/package/" element={<PackageTracking />} />
      <Route path="about/" element={<About />} />
      <Route path="services/" element={<Services />} />
      <Route path="home/" element={<Home />} />
      <Route path="profile/" element={<Profile />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },

//   {
//     path: "login/",
//     element: <Login />,
//   },

//   {
//     path: "register/",
//     element: <Register />,
//   },
//   {
//     path: "two-factor/",
//     element: <TwoFactorPage />,
//   },
//   {
//     path: "customer/home/",
//     element: <Home />,
//   },
//   {
//     path: "customer/profile/",
//     element: <Profile />,
//   },
//   // {
//   //   path: "track-package/",
//   //   element: <TrackPackage />,
//   // },
//   // {
//   //   path: "about/",
//   //   element: <AboutPage />,
//   // },
//   // {
//   //   path: "services/",
//   //   element: <ServicesPage />,
//   // },
//   // {
//   //   path: "forgot-password/",
//   //   element: <ForgotPassword />,
//   // },
// ]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
