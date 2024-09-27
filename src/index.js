import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./Mainpages/Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loginpage from "./Mainpages/Loginpage";
import HomePage from "./Mainpages/Homepage";
import ProtectedRoute from "./Mainpages/Protectedroute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
