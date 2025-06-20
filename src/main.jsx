import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CursorTrail from "./components/CursorTrail"; // Import the CursorTrail component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorTrail />
    <App />
  </React.StrictMode>
);
