import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/Cart">
          <BsCart4 size={35} color="white" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
