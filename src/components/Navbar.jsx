import Logo from "../assets/CD_logo.svg";
// import { Routes, Route } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a className="img_logo" href="/CD_logo">
            <img src={Logo} alt="TWITTER" />
          </a>
        </div>
        <div className="nav_buttons_container">
          <ul className="nav_buttons">
            <li>
              <a className="nav_a" href="#">
                Home
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
        <div className="login">
          <Login />
        </div>
      </div>
    </>
  );
}
