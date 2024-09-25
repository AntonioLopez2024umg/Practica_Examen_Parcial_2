import { Route, Routes } from "react-router-dom";
import "./App.css";

import Consulta from "./view/Consulta.tsx";
import Crear from "./view/Crear.tsx";

function App() {
  return (
    <Routes>
      <Route path="/Consulta" element={<Consulta />} />
      <Route path="/Crear" element={<Crear />} />
    </Routes>
  );
}