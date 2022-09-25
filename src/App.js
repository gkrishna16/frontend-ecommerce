import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import Productlist from "./pages/Productlist/Productlist";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Success from "./pages/Success/Success";
// import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<Productlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
