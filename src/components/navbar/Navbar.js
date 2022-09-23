import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <nav className="nav-container">
        <div className="">
          <Link style={{ color: `white`, textDecoration: `none` }} to="/">
            Gopal Ecommerce
          </Link>
        </div>
        <div className="">
          <ul className="nav-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/products/women">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
