import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { OpenMenuProvider } from "@/core/context/OpenMenu.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OpenMenuProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OpenMenuProvider>
  </React.StrictMode>
);
