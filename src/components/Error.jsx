import { NavLink } from "react-router-dom";
import "./CSS/Error.css";

export default function Error() {
  return (
    <>
      <div className="errorpage_container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>This is a 404 error</h1>
          <h2 style={{ color: "white", marginBottom: "20px" }}>
            This page is as empty as this case.
          </h2>
          <img
            src="https://media.istockphoto.com/id/1179022679/photo/empty-modern-gallery-space-with-bright-showcase.jpg?s=612x612&w=0&k=20&c=qjgw3c84PWYiP6au7D2N8HjMSN0GfY_P9ktzqv7CjhU="
            alt="image of empty display case" width="75%"
          />
          <p style={{ fontSize: "20px", color: "white", marginTop: "20px" }}>
            The page you are looking for does not exist, please go back to{" "}
            <NavLink
              to="/"
              style={{ fontSize: "20px", textDecoration: "underline" }}
            >
              Home
            </NavLink>{" "}
            and try again
          </p>
        </div>
      </div>
    </>
  );
}
