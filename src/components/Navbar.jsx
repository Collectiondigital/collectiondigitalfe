import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/CD_logo.svg";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { useJwt } from "react-jwt";
// import { Routes, Route } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout, token } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const { decodedToken } = useJwt(token);

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
        <nav>
          {token !== null && (
            <div>
              <span style={{ padding: "10px" }}>
                Hello, {decodedToken?.name}
              </span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {token === null && (
            <div>
              {/*  <button
                type="submit"
                onClick={() => navigate("user/login")}
              ></button> */}
              <NavLink to="/user/login">Login</NavLink>

              <NavLink to="/user/signup">Signup</NavLink>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}
