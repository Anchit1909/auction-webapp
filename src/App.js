import React from "react";
import { AuctionBody } from "./components/auctions/Body";
import { NavComp } from "./components/authentication/NavComp";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/footer";

export const App = () => {
  return (
    <AuthProvider>
      <NavComp />
      <AuctionBody />
      <Footer />
    </AuthProvider>
  );
};
