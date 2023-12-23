import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { HashLink } from "react-router-hash-link";

import "./CSS/Navbar.css";
import "./CSS/Dropdown.css";

export default function Navbar() {
  const { logout, token } = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = () => {
    // Close the menu when a menu item is clicked
    setMenuVisible(false);
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
          {/* Hamburger Menu Icon */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${menuVisible ? "change" : ""}`} />
            <div className={`bar ${menuVisible ? "change" : ""}`} />
            <div className={`bar ${menuVisible ? "change" : ""}`} />
          </div>

          {/* Navigation Links */}
          <ul className={`nav-list ${menuVisible ? "show" : ""}`}>
            <li onClick={handleMenuItemClick}>
              <div className="nav-link">
                <NavLink to="/about">About</NavLink>
                <div className="dropdown-menu">
                  <ul className="drop-ul">
                    <li>
                      <HashLink to="about/#our_project">Our Project</HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li onClick={handleMenuItemClick}>
              <div className="nav-link">
                <NavLink to="/pricing">Pricing</NavLink>
              </div>
            </li>
            <li onClick={handleMenuItemClick}>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li onClick={handleMenuItemClick}>
              {token !== null && (
                <>
                  <NavLink to="/search">Search</NavLink>
                </>
              )}
            </li>
            <li onClick={handleMenuItemClick}>
              {token !== null && (
                <>
                  <NavLink to="/collection">Collection</NavLink>
                </>
              )}
            </li>
            <li onClick={handleMenuItemClick} className="logout">
              {token !== null && (
                <>
                  <NavLink to="/" onClick={handleClick}>
                    Log out
                  </NavLink>
                </>
              )}
              {token === null && (
                <div className="login_container">
                  <div className="login">
                    <NavLink to="/user/login">
                      Login
                    </NavLink>
                  </div>
                  <div className="signup">
                    <NavLink to="/user/signup">
                      Signup
                    </NavLink>
                  </div>
                </div>
              )}


            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
