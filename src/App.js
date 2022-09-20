import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Productslist from "./pages/Productslist";
import Productitem from "./pages/Productitem";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Product from "./pages/Product";
// import Navbar from "./components/Navbar";

function App() {
  const user = false;
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:category" element={<Productslist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Productitem />} />
            {/* <Route path="/productlist" element={<Productslist />} /> */}
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
