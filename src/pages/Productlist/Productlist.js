import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Products from "../Products/Products";
import "./Productlist.css";

// This page will help filter products as per params
const Productlist = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  function handleFilters(e) {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  }

  console.log("from product page", filters, sort);
  return (
    <div>
      <Navbar />
      <div className="productlist-heading">Product list</div>
      <div className="filters-container">
        <div className="">
          <span className="span-select">
            <select name="color" id="" onChange={handleFilters}>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
          </span>
          <span>
            <select name="size" id="" onChange={handleFilters}>
              <option value="XL">XL</option>
              <option value="X">X</option>
              <option value="M">M</option>
              <option value="S">S</option>
            </select>
          </span>
        </div>
        <div className="">
          <span className="span-select">Sort Products</span>
          <span>
            <select name="sort" id="" onChange={(e) => setSort(e.target.value)}>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
              <option value="newest">Newest</option>
            </select>
          </span>
        </div>
      </div>
      <div>
        <Products cat={cat} filters={filters} sort={sort} />
      </div>
    </div>
  );
};

export default Productlist;
