import { BrowserRouter } from "react-router";
import { AppRoutes } from "./Routes";
import Navbar from "./Components/Navbar";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}
