/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import products from "../../Data";
import { useGlobalContext } from "../../components/Context/ShopContext";

const Cart = () => {
  const { cartItems, cartSubtotal } = useGlobalContext();
  const navigate = useNavigate();
  const subTotal = cartSubtotal();

  return (
    <section className="cart-container">
      <div className="cart-heading">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {products.map((product) => {
          const { id, productName, price, productImage } = product;
          if (cartItems[id] !== 0) {
            return <CartItem key={id} {...product} />;
          }
        })}
      </div>
      <div className="checkout">
        {subTotal > 0 ? (
          <>
            <h3>Subtotal: £{subTotal}</h3>
            <div className="checkout-btns">
              <button onClick={() => navigate("/")}>Continue Shopping</button>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </div>
    </section>
  );
};

export default Cart;
