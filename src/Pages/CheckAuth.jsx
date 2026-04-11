import React from "react";
import { Navigate } from "react-router-dom";

const CheckAuth = ({ children, currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign"/>;
  } else return children;
};

export default CheckAuth;
