import Login from "../../Pages/Social/Login";
import Registration from "../../Pages/Social/Register";

const authRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
];

export default authRoutes;
