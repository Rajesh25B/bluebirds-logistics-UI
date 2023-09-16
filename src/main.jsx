import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import TwoFactorPage from "./pages/TwoFactorPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

import { Home, Profile } from "./components/Dashboards/Customer/index.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "login/",
    element: <Login />,
  },

  {
    path: "register/",
    element: <Register />,
  },
  {
    path: "two-factor/",
    element: <TwoFactorPage />,
  },
  {
    path: "customer/home/",
    element: <Home />,
  },
  {
    path: "customer/profile/",
    element: <Profile />,
  },
  // {
  //   path: "track-package/",
  //   element: <TrackPackage />,
  // },
  // {
  //   path: "about/",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "services/",
  //   element: <ServicesPage />,
  // },
  // {
  //   path: "forgot-password/",
  //   element: <ForgotPassword />,
  // },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
