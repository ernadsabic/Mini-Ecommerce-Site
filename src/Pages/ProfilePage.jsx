import React from "react";
import ProfileInfo from "../Sections/Profile/ProfileInfo";
import { Navigate } from "react-router-dom";

const ProfilePage = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return <ProfileInfo />;
};

export default ProfilePage;
