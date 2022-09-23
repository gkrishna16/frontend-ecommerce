import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Products.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Products = ({ cat, filters, sort }) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    try {
      async function fetchProducts() {
        const res = await axios.get(
          cat
            ? `http://localhost:5001/api/products?category=${cat}`
            : `http://localhost:5001/api/products`
        );
        // console.log(res.data);
        setProducts(res.data);
      }
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products?.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  console.log(filteredProducts);

  useEffect(() => {
    if (sort === `newest`) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === `asc`) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div>
      {/* <Navbar /> */}
      <div className="">Products</div>
      <div className="product-container">
        {filteredProducts?.map((p) => {
          return (
            <div className="product-box" key={p?._id}>
              <img className="box-image" src={p?.img} alt="&" />
              <div className="">{p?.title}</div>
              <div className="mid-icons">
                <div className="">
                  {/* <span class="material-symbols-outlined">search</span> */}
                  <SearchOutlinedIcon />
                </div>
                <div className="">One </div>
                <div className="">One </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
