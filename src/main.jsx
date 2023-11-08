import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/authContext";
import CollectionsContextProvider from "./context/collectionsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <CollectionsContextProvider>
        <App />
      </CollectionsContextProvider>
    </AuthContextProvider>
  </Router>
);
