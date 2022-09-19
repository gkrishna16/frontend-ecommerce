import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <Link to="/">GOPAL SHOP</Link>
      </div>
      <div>
        <ul className="ul-navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products/:category">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
