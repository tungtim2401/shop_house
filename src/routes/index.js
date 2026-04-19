import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import About from "../pages/About";
// import Product from "../pages/Product";
import Login from "../pages/Login";

function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* route động (dynamic route) */}
      {/* <Route path="/product/:id" element={<Product />} /> */}
    </Routes>
  );
}

export default index;
