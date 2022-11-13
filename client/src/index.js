import React from "react";
import { createRoot } from "react-dom/client";
// Redux
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
// Import App
import App from "./App";
// Global Styles
import "./styles/index.css";
// Service Worker
import registerSW from "./swDev";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  registerSW();
}
