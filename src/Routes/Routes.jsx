import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import publicRoutes from "./allRoutes/publicRoutes";
import footerRoutes from "./allRoutes/footerRoutes";
import dashboardRoutes from "./allRoutes/dashboardRoutes";
import adminRoutes from "./allRoutes/adminRoutes";
import authRoutes from "./allRoutes/authRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // General public pages
      ...publicRoutes,
      // Auth-specific routes
      ...authRoutes,
      // footer links
      ...footerRoutes,
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      // Authenticated user routes
      ...dashboardRoutes,
      // Admin-only routes
      ...adminRoutes,
    ],
  },
]);
