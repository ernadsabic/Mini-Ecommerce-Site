import About from "../Sections/Aboutus/About";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

const AboutUs = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/sign" replace />;
  }
  return (
    <>
      <About />
    </>
  );
};

export default AboutUs;
