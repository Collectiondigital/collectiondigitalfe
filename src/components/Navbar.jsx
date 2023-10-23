import "../assets/CD_logo.svg";
// import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import "./CSS/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <a href="./Home">
            <img alt="logo" src="./src/assets/CD_logo.svg" className="logo" />
          </a>
        </div>
        <div className="nav_items_container">
          <ul>
            <li>
              <a className="nav_a" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="nav_a" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav_a" href="#">
                About
              </a>
            </li>
            <li>
              <a className="nav_a" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="login_button">
          <button className="login_button">Login</button>
        </div>
      </div>
    </>
  );
}
