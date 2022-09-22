import axios from "axios";
import React, { useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import { popularProducts } from "../data";
import Product from "./Product";
// let url = `http://localhost:5002/api/products`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(cat, { ...filters }, sort);

  useEffect(() => {
    async function getProducts() {
      try {
        let res = await axios.get(
          cat
            ? `http://localhost:5001/api/products?category=${cat}`
            : `http://localhost:5001/api/products`
        );
        console.log(res);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(products);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div>
      {/* <Navbar /> */}
      <div>PRODUCTS</div>
      <div className="main-products-container">
        {cat
          ? filteredProducts.map((item) => (
              <Product item={item} key={item.id} />
            ))
          : products
              .slice(0, 4)
              .map((item) => <Product item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Products;
