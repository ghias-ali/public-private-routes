import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Public from "./public";
import Private from "./private";
import ErrorPage from "./404page";
import { useSelector } from "react-redux";

const publicrouter = createBrowserRouter([
  {
    path: "/",
    element: <Public />,
  },
  {
    path: "/private",
    element: <Navigate to="/" />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const privaterouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/private" />,
  },
  {
    path: "/private",
    element: <Private />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function Routes() {
  const { isLoogedIn } = useSelector((state) => state.profile);

  if (isLoogedIn) {
    return <RouterProvider router={privaterouter} />;
  } else {
    return <RouterProvider router={publicrouter} />;
  }
}

export default Routes;
