import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar.jsx";
import SelamatDatang from "./component/SelamatDatang.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <SelamatDatang />
  </StrictMode>
);
