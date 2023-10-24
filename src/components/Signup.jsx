import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import LoadingOverlay from "react-loading-overlay";
import "./CSS/Signup.css";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://collectiondigitalbe.onrender.com/user/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, username }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setIsLoading(false);
      login(data.token);
    }
  };

  return (
    <div>
      <div>
        <NavLink to="/">
          <span>
            <img
              className="arrow-image"
              src="../src\assets\arrow-back.png"
              alt="back"
            />
          </span>
        </NavLink>
      </div>

      <LoadingOverlay active={isLoading} spinner text="Signing in...">
        <form className="signup" onSubmit={handleSubmit}>
          <label className="label-text">username: </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />

          <label className="label-text">email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label className="label-text">password: </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button>Sign up</button>
          {error && <div className="error">{error}</div>}
        </form>
      </LoadingOverlay>
    </div>
  );
}
