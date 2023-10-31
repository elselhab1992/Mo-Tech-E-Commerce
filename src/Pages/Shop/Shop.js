/* eslint-disable no-unused-vars */
import React from "react";
import "./Shop.css";
import products from "../../Data";
import Product from "../Product/Product";

const Shop = () => {
  return (
    <main className="shop">
      <section className="shop-heading">
        <h1>Esso Tech Shop</h1>
      </section>
      <section className="products">
        {products.map((product) => {
          const { id, productName, price, productImage } = product;

          return <Product key={id} {...product} />;
        })}
      </section>
    </main>
  );
};

export default Shop;
