import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = localStorage.getItem("token"); // Check if user is logged in
  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;