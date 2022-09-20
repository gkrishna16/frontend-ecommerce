import React from "react";
import Footer from "../components/assets/Footer";
import Slider from "../components/assets/slider/Slider";
import Navbar from "../components/Navbar";
import Categories from "./Categories";
// import CategoryItem from "./CategoryItem";
// import Product from "./Product";
import Products from "./Products";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
