import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import LoadingOverlay from "react-loading-overlay";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const deployedAPI = "https://collectiondigitalbe.onrender.com/user/login";
  const localAPI = "http://localhost:7070/user/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(deployedAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      console.log(data);
      localStorage.setItem("token", data.token);
      setIsLoading(false);
      login(data.token);
    }
  };

  return (
    <>
      <div>
        <NavLink to="/">
          <span>
            <img className="arrow-image" src="/arrow-back.png" alt="back" />
          </span>
        </NavLink>
      </div>
      <LoadingOverlay active={isLoading} spinner text="Logging in...">
        <form className="login" onSubmit={handleSubmit}>
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

          <button>Log in</button>
          {error && <div className="error">{error}</div>}
        </form>
      </LoadingOverlay>
    </>
  );
}
