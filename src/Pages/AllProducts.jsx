import React from "react";
import Products from "../Sections/Products/Products";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AllProducts = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return (
    <>
      <Products />
    </>
  );
};

export default AllProducts;
