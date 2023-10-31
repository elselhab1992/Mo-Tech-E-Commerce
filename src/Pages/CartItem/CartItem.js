import React from "react";
import "./CartItem.css";
import { FaMinusSquare } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { useGlobalContext } from "../../components/Context/ShopContext";

const CartItem = ({ id, productName, price, productImage }) => {
  const { cartItems, updateCartAmount, addToCart, removeFromCart } =
    useGlobalContext();

  return (
    <section className="shopping-cart">
      <div className="item-container">
        <img src={productImage} alt={productName} />
        <div className="item-info">
          <h2>{productName}</h2>
          <h3>£{price}</h3>
          <div className="amount-input">
            <span>
              <FaMinusSquare
                className="cart-icon"
                onClick={() => removeFromCart(id)}
              />
            </span>
            <input
              id="amount"
              name="amount"
              value={cartItems[id]}
              onChange={(e) => updateCartAmount(e.target.value, id)}
            />
            <span>
              <FaSquarePlus
                className="cart-icon"
                onClick={() => addToCart(id)}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
