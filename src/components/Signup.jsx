import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import LoadingOverlay from "react-loading-overlay";
import "./CSS/Signup.css";

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

    const response = await fetch("http://localhost:7070/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, username }),
    });

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
      <h1>Signup</h1>
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
