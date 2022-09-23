import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";
import Productlist from "./pages/Productlist/Productlist";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
