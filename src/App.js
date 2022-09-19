import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import Product from "./pages/Product";
import Productslist from "./pages/Productslist";
import Productitem from "./pages/Productitem";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/productlist" element={<Productslist />} />
            <Route path="/productitem" element={<Productitem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
