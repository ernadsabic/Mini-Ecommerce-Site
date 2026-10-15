import React from "react";
import Search from "../Sections/SearchedProducts/Search";
import { Navigate } from "react-router-dom";

const SearchPage = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return <Search />;
};

export default SearchPage;
