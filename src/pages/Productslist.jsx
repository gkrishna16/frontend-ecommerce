import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "./Products";

const Productslist = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(`newest`);

  function handleFilters(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  }

  console.log(filters);

  return (
    <div>
      <Navbar />
      <div>
        <div
          style={{
            display: `flex`,
            justifyContent: `space-between`,
            padding: `10px`,
          }}
        >
          <div>
            <span>Filter Products : </span>
            <select name="color" onChange={handleFilters}>
              <option disabled selected>
                Color
              </option>
              <option>Red</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Plum</option>
            </select>
            <select name="type" onChange={handleFilters}>
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>XL</option>
              <option>L</option>
            </select>
          </div>
          <div>
            <span>Sort Products</span>
            <select name="clothing" onChange={handleFilters}>
              <option disabled selected>
                Clothing
              </option>
              <option>Shirt</option>
              <option>Trouser</option>
              <option>Jeans</option>
            </select>
          </div>
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Productslist;
