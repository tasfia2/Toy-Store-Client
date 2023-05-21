import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "react-bootstrap";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  

  const location = useLocation();
  console.log("user in private route", user);

  if (loading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!user) {
    alert("You have to login first. Click OK!!") 
    return <Navigate state={{ from: location }} to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
