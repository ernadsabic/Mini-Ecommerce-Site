import React from "react";
import Wishlist from "../Sections/Wishlist/Wishlist";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const WishlistPage = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return (
    <>
      <Wishlist />
    </>
  );
};

export default WishlistPage;
