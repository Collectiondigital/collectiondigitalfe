import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>This is an 404 error</h1>
        <h2 style={{ color: "white" }}>
          Seems like this Page is as empty as this case
        </h2>
        <img
          src="https://media.istockphoto.com/id/1179022679/photo/empty-modern-gallery-space-with-bright-showcase.jpg?s=612x612&w=0&k=20&c=qjgw3c84PWYiP6au7D2N8HjMSN0GfY_P9ktzqv7CjhU="
          alt=""
        />
        <h2 style={{ color: "white" }}>
          You tried a wrong pathing, go back to the{" "}
          <NavLink to="/" style={{ textDecoration: "underline" }}>
            homepage
          </NavLink>{" "}
          and try again
        </h2>
      </div>
    </>
  );
}
