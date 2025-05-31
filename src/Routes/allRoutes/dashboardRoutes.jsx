import AddPet from "../../Pages/Dashboard/AddPet/AddPet";
import MyPets from "../../Pages/Dashboard/MyAddedPets/MyPets/MyPets";
import UpdatePet from "../../Pages/Dashboard/MyAddedPets/UpdatePets/UpdatePet";
import DonationCampaign from "../../Pages/Dashboard/AddDonationCampaign/DonationCampaign";
import MyDonationCampaign from "../../Pages/Dashboard/MyAddedDonationCampaign/MyDonationCampaign/MyDonationCampaign";
import UpdateDonation from "../../Pages/Dashboard/MyAddedDonationCampaign/UpdateDonationCampaign/UpdateDonation";
import MyDonation from "../../Pages/Dashboard/MyDonation/MyDonation";
import AdoptionRequest from "../../Pages/Dashboard/AdoptionRequest/AdoptionRequest";
import Profile from "../../Pages/Dashboard/Profile";
import Statistics from "../../Pages/Dashboard/Statistics";
import PrivateRoute from "../PrivateRoute";

const dashboardRoutes = [
  {
    index: true,
    element: (
      <PrivateRoute>
        <Statistics />
      </PrivateRoute>
    ),
  },
  {
    path: "profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "add-pet",
    element: (
      <PrivateRoute>
        <AddPet />
      </PrivateRoute>
    ),
  },
  {
    path: "my-pets",
    element: (
      <PrivateRoute>
        <MyPets />
      </PrivateRoute>
    ),
  },
  {
    path: "updatePet/:id",
    element: (
      <PrivateRoute>
        <UpdatePet />
      </PrivateRoute>
    ),
  },
  {
    path: "create-donation",
    element: (
      <PrivateRoute>
        <DonationCampaign />
      </PrivateRoute>
    ),
  },
  {
    path: "my-donations-camp",
    element: (
      <PrivateRoute>
        <MyDonationCampaign />
      </PrivateRoute>
    ),
  },
  {
    path: "updateDonation/:id",
    element: (
      <PrivateRoute>
        <UpdateDonation />
      </PrivateRoute>
    ),
  },
  {
    path: "my-donations",
    element: (
      <PrivateRoute>
        <MyDonation />
      </PrivateRoute>
    ),
  },
  {
    path: "adoptionReq",
    element: (
      <PrivateRoute>
        <AdoptionRequest />
      </PrivateRoute>
    ),
  },
];

export default dashboardRoutes;
