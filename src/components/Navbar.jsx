import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { HashLink } from "react-router-hash-link";

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
                <NavLink to="/about">About</NavLink>
                <div className="dropdown-menu">
                  <ul className="drop-ul">
                    <li>
                      <HashLink to="About/#developer_team">
                        Developer Team
                      </HashLink>
                    </li>
                    <li>
                      <HashLink to="about/#our_project">Our Project</HashLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="nav-link">
                <NavLink to="/pricing">Pricing</NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              {token !== null && (
                <>
                  <NavLink to="/search">Search</NavLink>
                </>
              )}
            </li>
            <li>
              {token !== null && (
                <>
                  <NavLink to="/collection">Collection</NavLink>
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
