import React from "react";
import Circle from "../components/assets/slider/Circle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${item.img})` }} className="info">
        <div className="icon">
          <Link className="icon-onpic">
            <ShoppingCartOutlinedIcon className="icon-onpic" />
          </Link>
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon className="icon-onpic" />
          </Link>
        </div>
        <div className="icon">
          <Link to={`/product/${item._id}`}>
            <FavoriteIcon className="icon-onpic" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
