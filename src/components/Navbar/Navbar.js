import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <FaShopify style={{ color: "#fff", fontSize: 45, marginLeft: 10 }} />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
