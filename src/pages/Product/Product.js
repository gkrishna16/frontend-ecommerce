import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";
import Navbar from "../../components/navbar/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/cartRedux";

const Product = () => {
  const locationId = useLocation().pathname.split(`/`)[2];
  console.log(`---------PRODUCT PAGE-------------`);
  console.log(locationId);
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  console.log(`redux products`, products);

  useEffect(() => {
    try {
      async function getData() {
        const res = await axios.get(
          `http://localhost:5001/api/products/find/${locationId}`
        );
        setProduct(res.data);
      }
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [locationId]);

  console.log(product.color);

  function handleQuantity(params) {
    if (params === `desc` && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (params === `asc`) {
      setQuantity(quantity + 1);
    }
  }
  function handleClick() {
    dispatch(addProduct({ product, quantity }));
  }

  return (
    <div>
      <Navbar />
      <div className="">Product</div>
      <div className="product-container">
        <div className="image-left">
          <img className="product-image" src={product?.img} alt="" />
        </div>
        <div className="text-right">
          <div className="">
            <h1>{product?.title}</h1>
          </div>
          <div className="">{product?.desc}</div>{" "}
          <div className="">
            <h1>$ {product?.price}</h1>
          </div>
          <div>
            {product?.color?.map((c) => {
              console.log(c.toLowerCase());
              return (
                <div
                  className="colors"
                  style={{ backgroundColor: `${c.toLowerCase()}` }}
                ></div>
              );
            })}
          </div>
          <span className="size-span">
            <span>Size : </span>
            <span>
              <select name="" id="">
                {product?.size?.map((s) => {
                  return <option>{s}</option>;
                })}
              </select>
            </span>
          </span>
          <div className="quant-button-container">
            <span>
              <AddOutlinedIcon onClick={() => handleQuantity(`asc`)} />
            </span>
            <span>{quantity}</span>
            <span>
              <RemoveOutlinedIcon onClick={() => handleQuantity(`desc`)} />
            </span>
            <span className="button-span">
              <button onClick={handleClick}>Add to Cart</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
