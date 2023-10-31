import React from "react";
import "./Product.css";
import { useGlobalContext } from "../../components/Context/ShopContext";

const Product = ({ id, productName, price, productImage }) => {
  const { cartItems, addToCart } = useGlobalContext();

  const cartItemAmount = cartItems[id];
  return (
    <section className="card-container">
      <div className="card-content">
        <div className="card-img">
          <img src={productImage} alt={productName} />
        </div>
        <div className="card-info">
          <h2>{productName}</h2>
          <h3>£{price}</h3>
          <button onClick={() => addToCart(id)}>
            Add To Cart
            {cartItemAmount > 0 && (
              <span style={{ marginLeft: 10 }}>({cartItemAmount})</span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
