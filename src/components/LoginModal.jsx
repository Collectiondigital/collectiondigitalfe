import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import React from "react";
/* import "bootstrap/dist/css/bootstrap.css"; */

export default function LoginModal() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*   const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      console.log("FORM DAA", formData);

      const response = await axios.post(
        `https://collectiondigitalbe.onrender.com/user/login`,
        formData
      );

      setError(false);
      handleClose();
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }; */

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
      }, 5000);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleShow}>Login</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
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
