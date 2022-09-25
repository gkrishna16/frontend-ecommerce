import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import StripeCheckout from "react-stripe-checkout";
import "./Cart.css";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  let { products, quantity } = useSelector((state) => state.cart);
  console.log(`cart page consoles ---------------------`);
  console.log(products);

  function handleQuantity(params) {
    if (params === `desc` && quantity > 1) {
      // setQuantity(quantity - 1);
    } else if (params === `asc`) {
      // setQuantity(quantity + 1);
    }
  }
  console.log(KEY);

  return (
    <div>
      <Navbar />
      <div className="cartpage-container">
        <div className="cartpage-left">
          {products.map((pr) => (
            <div className="item-box">
              <img src={pr.img} alt="" />
              <div className="">
                <div className="">
                  <b>Product : </b>
                  {pr.title}
                </div>
                <div className="">Size : {pr.size}</div>
                <div className="">{pr.color}</div>
              </div>
              <div className="">
                <div className="">
                  <b>Price : </b> $ {pr.price}
                </div>
                <div className="">
                  <div className="">
                    <span>
                      <AddOutlinedIcon onClick={() => handleQuantity(`asc`)} />
                    </span>
                    <span>{quantity}</span>
                    <span>
                      <RemoveOutlinedIcon
                        onClick={() => handleQuantity(`desc`)}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cartp-right">
          <div className="total-header">
            <div>Product cart</div>
          </div>
          <div className="">
            <div className="flex">
              <div className="">Estimated Shipping : </div>
              <div className=""> $ 1000</div>
            </div>
            <div className="flex">
              <div className="">Shipping Discount : </div>
              <div className="">$1000</div>
            </div>
            <div className="flex">
              <div className="">
                <b>Total :</b>
              </div>
              <div className="">$ 1000</div>
            </div>
            <div className="button-checkout">
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
