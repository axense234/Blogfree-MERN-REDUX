import React from "react";
import { createRoot } from "react-dom/client";

// Import App
import App from "./App";
// Global Styles
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
