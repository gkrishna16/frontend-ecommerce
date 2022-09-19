import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import Product from "./pages/Product";
import Productslist from "./pages/Productslist";
import Productitem from "./pages/Productitem";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Navbar from "./components/Navbar";

function App() {
  const user = false;

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:category" element={<Productslist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<Productitem />} />
            <Route path="/productlist" element={<Productslist />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
