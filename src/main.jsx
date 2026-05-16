// Bawaan react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

// Memasukkan layout dan komponen
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Penggunaan remixicon
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container max-w-full md:max-w-3xl lg:max-w-6xl mx-auto px-4">
      <Navbar></Navbar>
      <App />
      <Footer></Footer>
    </div>
  </StrictMode>,
);
