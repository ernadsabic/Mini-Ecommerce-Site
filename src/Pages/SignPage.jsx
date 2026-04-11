import { Sign } from "../Sections/Sign/Sign";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export const SignPage = ({ currentUser }) => {
  if (currentUser) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <Sign />
    </>
  );
};
