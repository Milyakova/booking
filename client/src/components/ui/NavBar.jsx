import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getIsLoggedIn } from "../store/users";
import NavProfile from "./navProfile";

const NavBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <nav className="navbar navbar-light-hover-color   mb-3">
      <div className="container-md ">
        <ul className="nav nav-pills  justify-content-center">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Main
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/rooms">
              Rooms
            </Link>
          </li>
          {isLoggedIn && (
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/userId">
                My rooms
              </Link>
            </li>
          )}
        </ul>
        <div className="d-flex">
          {isLoggedIn ? (
            <NavProfile />
          ) : (
            <Link className="nav-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
