import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "./Products";

const Productslist = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log(`category`, cat);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState(`newest`);

  function handleFilters(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  }

  console.log("filters", filters);
  console.log(`sort`, sort);

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
              <option>Red</option>
              <option>Yellow</option>
              <option>Green</option>
              <option>Plum</option>
              <option>grey</option>
            </select>
            <select name="size" onChange={handleFilters}>
              <option disabled selected>
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>XL</option>
              <option>L</option>
              <option>M</option>
            </select>
          </div>
          <div>
            <span>Sort Products : </span>
            <select name="clothing" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price(asc)</option>
              <option value="desc">Price(desc)</option>
            </select>
          </div>
        </div>
        <Products cat={cat} filters={filters} sort={sort} />
      </div>
    </div>
  );
};

export default Productslist;
