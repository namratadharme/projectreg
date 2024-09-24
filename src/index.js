import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./Registration";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loginEndpoint } from "./constants/urls";
import { registrationEndpoint } from "./constants/urls";
import Loginpage from "./Loginpage";

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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Login EP", loginEndpoint);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
