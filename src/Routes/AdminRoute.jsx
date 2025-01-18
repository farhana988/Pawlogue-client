/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/Reusable/LoadingSpinner";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/"} state={{ form: location }} replace></Navigate>;
};

export default AdminRoute;
