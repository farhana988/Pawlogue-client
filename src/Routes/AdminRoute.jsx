/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SkeletonLoader from "../Components/loading/SkeletonLoader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <SkeletonLoader></SkeletonLoader>;
  }
  if (user && isAdmin) {
    return children;
  }
  return (
    <Navigate to={"/dashboard"} state={{ form: location }} replace></Navigate>
  );
};

export default AdminRoute;
