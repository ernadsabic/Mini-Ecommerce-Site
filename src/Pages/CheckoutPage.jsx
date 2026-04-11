import React from "react";
import Checkout from "../Sections/Checkout/Checkout";
import { Navigate } from "react-router-dom";

const CheckoutPage = ({currentUser}) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return <Checkout />;
};

export default CheckoutPage;
