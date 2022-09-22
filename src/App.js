<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
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
>>>>>>> fc5bac9ed9f8bf8b6613e83689d172c756bbbf84
    </div>
  );
}

export default App;
