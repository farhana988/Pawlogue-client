/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavLinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      ` ${
        isActive
          ? "active text-nav dark:text-ivory md:text-lg lg:text-xl font-extrabold underline underline-offset-8"
          : "font-medium lg:text-lg text-nav dark:text-ivory hover:text-[#536493] dark:hover:text-slate-300"
      }`
    }
  >
    {label}
  </NavLink>
);

export default NavLinkItem;
