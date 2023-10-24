import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import React from "react";
import { AuthContext } from "../context/authContext";

export default function LoginModal({ show, toggleModal }) {
  const navigate = useNavigate();
  const { logout, token } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*   const { login } = useContext(AuthContext); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(
      "https://collectiondigitalbe.onrender.com/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      setTimeout(() => {
        localStorage.setItem("token", data.token);
        setIsLoading(false);
        login(data.token);
      }, 1000);
    }
  };

  const { decodedToken } = useJwt(token);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton onClick={toggleModal}>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
        </Modal.Body>
      </Modal>
    </>
  );
}
