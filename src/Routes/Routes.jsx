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
import DonationCampaign from "../Pages/Dashboard/AddDonationCampaign/DonationCampaign";
import MyDonationCampaign from "../Pages/Dashboard/MyDonationCampaign/MyDonationCampaign";
import UpdateDonation from "../Pages/Dashboard/MyDonationCampaign/UpdateDonation";
import AllUsers from "../Pages/Dashboard/AdminOnly/AllUsers/AllUsers";
import AllPets from "../Pages/Dashboard/AdminOnly/AllPets/AllPets";
import AllDonations from "../Pages/Dashboard/AdminOnly/AllDonations/AllDonations";
import PetListing from "../Pages/PetListing/PetListing";
import AllDonationCampaigns from "../Pages/AllDonationCampaigns/AllDonationCampaigns";
import PetDetails from "../Pages/PetListing/PetDetails";
import MyDonation from "../Pages/Dashboard/MyDonation/MyDonation";
import AdoptionRequest from "../Pages/Dashboard/AdoptionRequest/AdoptionRequest";
import DonationCampaignDetails from "../Pages/AllDonationCampaigns/DonationCampaignDetails";

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
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/petListing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/petDetails/:id",
        element: <PetDetails></PetDetails>,
      },
      {
        path: "/donationCampaigns",
        element: <AllDonationCampaigns></AllDonationCampaigns>,
      },
      {
        path: "/donationCampaignDetails/:id",
        element: <DonationCampaignDetails></DonationCampaignDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "add-pet",
        element: (
          <PrivateRoute><AddPet></AddPet></PrivateRoute>
        ),
      },
      {
        path: "my-pets",
        element: (
          <PrivateRoute>  <MyPets></MyPets>  </PrivateRoute>
        ),
      },
      {
        path: "updatePet/:id",
        element: (
          <PrivateRoute> <UpdatePet></UpdatePet>   </PrivateRoute>
        ),
      },
      {
        path: "adoption-requests",
        element: <PrivateRoute> </PrivateRoute>,
      },
      {
        path: "create-donation",
        element: (
          <PrivateRoute>     <DonationCampaign></DonationCampaign>  </PrivateRoute>
        ),
      },
      {
        path: "my-donations-camp",
        element: (
          <PrivateRoute>   <MyDonationCampaign></MyDonationCampaign>  </PrivateRoute>
        ),
      },
      {
        path: "updateDonation/:id",
        element: (
          <PrivateRoute>    <UpdateDonation></UpdateDonation>  </PrivateRoute>
        ),
      },
      {
        path: "my-donations",
        element: <PrivateRoute> <MyDonation></MyDonation> </PrivateRoute>,
      },
      {
        path: "adoptionReq",
        element: <PrivateRoute> <AdoptionRequest></AdoptionRequest>  </PrivateRoute>,
      },
      {
        path: "allUsers",
        element: (
          <PrivateRoute>   <AllUsers></AllUsers>  </PrivateRoute>
        ),
      },
      {
        path: "allPets",
        element: (
          <PrivateRoute>   <AllPets></AllPets>   </PrivateRoute>
        ),
      },
      {
        path: "allDonations",
        element: (
          <PrivateRoute>  <AllDonations></AllDonations>     </PrivateRoute>
        ),
      },
    ],
  },
]);
