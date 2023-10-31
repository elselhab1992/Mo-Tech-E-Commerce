/* eslint-disable no-unused-vars */
import React, { useState, useContext, createContext } from "react";
import products from "../../Data";

export const AppContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] + 1 };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartAmount = (newAmount, itemId) => {
    setCartItems((prev) => {
      return { ...prev, [itemId]: newAmount };
    });
  };

  const cartSubtotal = () => {
    let subTotal = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemPrice = products.find((Product) => Product.id === Number(item));
        subTotal += cartItems[item] * itemPrice.price;
      }
    }
    return subTotal;
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateCartAmount,
        cartSubtotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
