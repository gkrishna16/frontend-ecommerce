import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import Navbar from "../../components/navbar/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  let { products, quantity, total } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  console.log(navigate.pathname);

  function handleQuantity(params) {
    if (params === `desc` && quantity > 1) {
      // setQuantity(quantity - 1);
    } else if (params === `asc`) {
      // setQuantity(quantity + 1);
    }
  }

  function onToken(token) {
    setStripeToken(token);
  }

  console.log(stripeToken);

  useEffect(() => {
    async function makeRequest() {
      try {
        const res = await userRequest.post(`/checkout/payment`, {
          tokenId: stripeToken,
          amount: total * 100,
        });
        navigate.push(`/success`, {
          data: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
    stripeToken && makeRequest();
  }, [stripeToken, total, navigate]);

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
              <StripeCheckout
                name="Lama shop"
                image={`https://images.unsplash.com/photo-1663966752161-affc2600c845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
                billingAddress
                shippingAddress
                description=""
                amount={total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button>Proceed to checkout</button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
