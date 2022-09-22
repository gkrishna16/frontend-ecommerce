import { Remove, Add } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "./RequestMethods";
import { useDispatch } from "react-redux";

const Productitem = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [color, setColor] = useState(``);
  const [size, setSize] = useState(``);

  const dispatch = useDispatch();

  console.log(id);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await publicRequest.get(`products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, [id]);

  function handleQuantity(params) {
    if (quantity >= 0 && params === `inc`) {
      setQuantity((prev) => prev + 1);
    }

    if (quantity >= 1 && params === `dec`) {
      setQuantity((prev) => prev - 1);
    }
  }

  function handleClick() {
    dispatch(
      addProduct({ product, quantity, price: product.price * quantity })
    );
  }

  console.log(product);
  console.log(color, size);

  return (
    <div>
      <Navbar />
      <div className="product-item-container">
        <div className="proditem-img-box">
          <img src={product && product.img && product.img} alt="$" />
        </div>
        <div className="proditem-text-box">
          <div>
            <h1>Product Name</h1>
          </div>
          <div>
            <p>{product && product.desc}</p>
          </div>
          <div>
            <div>
              <h1>${product && product.price && product.price}</h1>
            </div>
            <div>
              <span>Color : </span>
              {/* <span style={{ marginRight: `5em` }}>{product.color}</span> */}
              <select name="color" onClick={(e) => setColor(e.target.value)}>
                {product.color &&
                  product.color.map((cl) => <option>{cl}</option>)}
              </select>
              <span style={{ marginRight: `0.5em` }}> Size : </span>
              <select onClick={(e) => setSize(e.target.value)}>
                {product &&
                  product.size &&
                  product.size.map((sz) => <option>{sz}</option>)}
              </select>
            </div>
          </div>
          <div className="qunatity-cartbutton" style={{ marginTop: `3em` }}>
            <span style={{ marginRight: `2em` }}>
              <span>Quantity : </span>
              <span>
                <Remove onClick={() => handleQuantity(`dec`)} />
              </span>
              <span style={{ fontSize: `2em` }}>{quantity}</span>
              <Add onClick={() => handleQuantity(`inc`)} />
            </span>

            <button onClick={handleClick}>Add to cart</button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Productitem;
