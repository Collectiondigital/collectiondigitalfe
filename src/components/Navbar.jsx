import Logo from "../assets/CD_logo.svg";
import { Routes, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="nav_search">
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
            <button>Log in</button>
          </div>
        </div>
        <div className="search">
          <input className="search_bar" type="text" placeholder="Search" />
          <button className="submit" type="submit">
            Search
          </button>
        </div>
      </div>
    </>
  );
}
