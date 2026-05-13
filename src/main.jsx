import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container max-w-full md:max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-4">
      <Navbar></Navbar>
      <App />
    </div>
  </StrictMode>,
);
