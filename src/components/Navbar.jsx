import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/CD_logo.svg";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useJwt } from "react-jwt";

import "../assets/CD_logo.svg";

import Login from "./Login";
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
          <a href="./">
            <img alt="logo" src="../src/assets/CD_logo.svg" className="logo" />
          </a>
        </div>
        <div className="nav_items_container">
          <ul>
            <li>
              <NavLink to="/">Home </NavLink>
            </li>
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
          </ul>
        </div>

        <nav>
          {token !== null && (
            <div>
              <span className="hello">Hello, {decodedToken?.name}</span>
              <div>
                <button className="logout-button" onClick={handleClick}>
                  Log out
                </button>
              </div>
            </div>
          )}
          {token === null && (
            <div>
              <NavLink to="/user/login">Login </NavLink>

              <NavLink to="/user/signup">Signup</NavLink>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
