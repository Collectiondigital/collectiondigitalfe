import { NavLink, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useJwt } from "react-jwt";

import "./CSS/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout, token } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const { decodedToken } = useJwt(token);
  console.log(decodedToken);
  console.log("TOKEEEN", token);

  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <NavLink to="/">
            {" "}
            <img alt="logo" src="./CD_logo.svg" className="logo" />{" "}
          </NavLink>
        </div>
        <div className="nav_items_container">
          <ul>
            <li>
              <NavLink to="/Pricing">Pricing </NavLink>
            </li>
            <li>
              <NavLink to="/About">About </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact </NavLink>
            </li>
            <li>
              <NavLink to="/Search">Search </NavLink>
            </li>
            <li>
              <nav>
                {token !== null && (
                  <div>
                    <span className="hello">Hello, {decodedToken?.name}! </span>
                    <button className="logout-button" onClick={handleClick}>
                      Log out
                    </button>
                  </div>
                )}
                {token === null && (
                  <div>
                    <NavLink to="/user/login">Login</NavLink>
                    <NavLink to="/user/signup">Signup</NavLink>
                  </div>
                )}
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
