import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(`quantity form navbar`, quantity);

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
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
