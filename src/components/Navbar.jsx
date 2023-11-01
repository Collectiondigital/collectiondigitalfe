import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { HashLink } from 'react-router-hash-link';

import "./CSS/Navbar.css";
import "./CSS/Dropdown.css";

export default function Navbar() {
  const { logout, token } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <NavLink to="/">
            <img alt="logo" src="./CD_logo.svg" className="logo" />
          </NavLink>
        </div>
        <div className="nav_items_container">
          <ul>
            <li>
              <div className="nav-link">
                <NavLink to="/About">About</NavLink>
                <div className="dropdown-menu">
                  <ul className="drop-ul">
                    <li>
                      <HashLink to="About/#developer_team">Developer Team</HashLink>
                    </li>
                    <li>
                      <HashLink to="About/#our_project">Our Project</HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link">
                <NavLink to="/Pricing">Pricing</NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              {token !== null && (
                <>
                  <NavLink to="/Search">Search</NavLink>
                </>
              )}
            </li>
            <li>
              {token !== null && (
                <>
                  <NavLink to="/Collection">Collection</NavLink>
                </>
              )}
            </li>
            <li className="logout">
              {token !== null && (
                <>
                  <NavLink to="/" onClick={handleClick}>
                    Log out
                  </NavLink>
                </>
              )}
              {token === null && (
                <>
                  <NavLink to="/user/login" style={{ margin: "auto" }}>
                    Login
                  </NavLink>
                  <NavLink to="/user/signup" style={{ margin: "0" }}>
                    Signup
                  </NavLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
