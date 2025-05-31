import AllUsers from "../../Pages/Dashboard/AdminOnly/AllUsers/AllUsers";
import AllPets from "../../Pages/Dashboard/AdminOnly/AllPets/AllPets";
import AllDonations from "../../Pages/Dashboard/AdminOnly/AllDonations/AllDonations";
import PrivateRoute from "../PrivateRoute";
import AdminRoute from "../AdminRoute";

const adminRoutes = [
  {
    path: "allUsers",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <AllUsers />
        </AdminRoute>
      </PrivateRoute>
    ),
  },
  {
    path: "allPets",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <AllPets />
        </AdminRoute>
      </PrivateRoute>
    ),
  },
  {
    path: "allDonations",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <AllDonations />
        </AdminRoute>
      </PrivateRoute>
    ),
  },
];

export default adminRoutes;
