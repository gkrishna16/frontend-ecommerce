import React from "react";
import { Link } from "react-router-dom";
import "../styles/category.css";

const CategoryItem = ({ im }) => {
  return (
    <div className="category-item-container">
      <div
        style={{ backgroundImage: `url(${im.url})` }}
        className="cat-img-div"
      >
        <div
          style={{
            color: `white`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <Link to="/product/:category">
            <button>SHOP NOW !</button>
          </Link>
          <p>This season all for you.</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
