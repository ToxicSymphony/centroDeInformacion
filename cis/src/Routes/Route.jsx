import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import { Home } from "../Home/Home";

export function Rutas() {
    return (
      <div>
        <Menu/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </div>
    );
  }