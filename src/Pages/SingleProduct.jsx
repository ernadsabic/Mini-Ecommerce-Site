import React from "react";
import Product from "../Sections/SingleProduct/Product";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const SingleProduct = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return (
    <>
      <Product />
    </>
  );
};

export default SingleProduct;
