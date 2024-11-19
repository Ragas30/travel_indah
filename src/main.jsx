import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./component/Navbar.jsx";
import SelamatDatang from "./component/SelamatDatang.jsx";
import ArmadaCard from "./component/Armada.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <SelamatDatang />
    <ArmadaCard nama={"Indah Travel"} image={"./logo/indah_logo.png"} deskripsi={"Kami hadir untuk memberikan solusi terbaik bagi kebutuhan Perjalanan Anda."} kapasitas={4} />
  </StrictMode>
);
