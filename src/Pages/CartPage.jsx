import React from "react";
import Cart from "../Sections/Cart/Cart";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const CartPage = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
