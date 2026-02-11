/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block py-2 px-4 rounded text-xs lg:text-sm ${
        isActive ? "bg-[#1f9c779a] dark:bg-[#8d2323a6]" : ""
      }`
    }
  >
    {children}
  </NavLink>
);

export default SidebarNavLink;
