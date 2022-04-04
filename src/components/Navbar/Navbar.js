import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center my-4 fs-3">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-link ms-4 text-decoration-none" : "ms-4 text-decoration-none link"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-link ms-4 text-decoration-none" : "ms-4 text-decoration-none link"
        }
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-link ms-4 text-decoration-none" : "ms-4 text-decoration-none link"
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-link ms-4 text-decoration-none" : "ms-4 text-decoration-none link"
        }
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-link ms-4 text-decoration-none" : "ms-4 text-decoration-none link"
        }
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Navbar;
