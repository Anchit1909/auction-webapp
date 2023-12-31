import React from "react";
import { AuctionBody } from "./components/auctions/Body";
import { NavComp } from "./components/authentication/NavComp";
import { AuthProvider } from "./context/AuthContext";
import StartPage from "./components/StartPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bottom from "./components/Bottom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/auction",
    element: <AuctionBody />,
  },
]);

export const App = () => {
  return (
    <AuthProvider>
      <NavComp />
      <RouterProvider router={router} />
      {/* <AuctionBody /> */}
      <Bottom />
    </AuthProvider>
  );
};
