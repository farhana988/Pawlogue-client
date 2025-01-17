import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Components/Shared/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Social/Login";
import Registration from "../Pages/Social/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import MyPets from "../Pages/Dashboard/MyPets/MyPets";
import AddPet from "../Pages/Dashboard/AddPet/AddPet";
import PrivateRoute from "./PrivateRoute";
import UpdatePet from "../Pages/Dashboard/MyPets/UpdatePet";
import DonationCampaign from "../Pages/Dashboard/DonationCampaign/DonationCampaign";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }, 
      {
        path: "/login",
        element:<Login></Login>,
      }, 
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        path: "add-pet",
        element: <PrivateRoute><AddPet></AddPet></PrivateRoute> ,
      }, 
      {
        path: "my-pets",
        element:<PrivateRoute> <MyPets></MyPets></PrivateRoute> ,
      }, 
      {
        path: "updatePet/:id",
        element:<PrivateRoute> <UpdatePet></UpdatePet></PrivateRoute> ,
      }, 
      {
        path: "adoption-requests",
        element:<PrivateRoute>           </PrivateRoute> ,
      }, 
      {
        path: "create-donation",
        element: <PrivateRoute>   <DonationCampaign></DonationCampaign>   </PrivateRoute> ,
      }, 
      {
        path: "my-donations",
        element: <PrivateRoute>         </PrivateRoute> ,
      }, 
      {
        path: "my-donation-campaigns",
        element: <PrivateRoute>            </PrivateRoute> ,
      }, 
      {
        path: "donation-campaigns",
        element: <PrivateRoute>         </PrivateRoute> ,
      }, 
    ]
  }, 
]);
