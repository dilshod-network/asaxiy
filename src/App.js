import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart/Cart";
import Like from "./pages/Liked/Like";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Like />} />
      </Routes>
    </div>
  );
}
