import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import {Catalogo} from "./Pages/Catalogo/Catalogo";
import {MovieDetail} from "./Pages/Catalogo/MovieDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}
