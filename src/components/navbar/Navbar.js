import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  console.log(`quantity `, quantity);

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
              <Link to="/cart">
                <Badge badgeContent={quantity}>
                  <ShoppingCartOutlined />
                </Badge>
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
