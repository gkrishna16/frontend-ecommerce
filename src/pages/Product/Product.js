import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Product.css";
import Navbar from "../../components/navbar/Navbar";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/cartRedux";
import { border } from "@mui/system";

const Product = () => {
  const locationId = useLocation().pathname.split(`/`)[2];
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(``);
  const [size, setSize] = useState(``);

  console.log(size, color);

  const dispatch = useDispatch();
  const {
    products,
    total,
    quantity: cartQ,
  } = useSelector((state) => state.cart);

  console.log(products);

  useEffect(() => {
    try {
      async function getData() {
        const res = await axios.get(
          `http://localhost:5001/api/products/find/${locationId}`
        );
        setProduct(res.data);
        // console.log(product.color[0]);
        setSize(res.data.size[0]);
        setColor(res.data.color[0]);
      }
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [locationId]);

  function handleQuantity(params) {
    if (params === `desc` && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (params === `asc`) {
      setQuantity(quantity + 1);
    }
  }

  function handleClick() {
    dispatch(
      addProduct({
        ...product,
        quantity,
        price: product.price * quantity,
        color,
        size,
      })
    );
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
            <span> Color : </span>
            <select onChange={(e) => setColor(e.target.value)}>
              {product?.color?.map((c) => {
                console.log(c.toLowerCase());
                return (
                  <option color={c} key={c}>
                    {c.toLowerCase()}
                  </option>
                );
              })}
            </select>
          </div>
          <span className="size-span">
            <span>Size : </span>
            <span>
              <select onChange={(e) => setSize(e.target.value)}>
                {product?.size?.map((s) => {
                  return (
                    <option size={s} key={s}>
                      {s}
                    </option>
                  );
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
