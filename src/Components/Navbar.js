import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className='navbar'>
      <p className='navbar-item'>Shoe</p>
      <p className='navbar-item right'>
        <i class='fas fa-shopping-cart'></i>
        {"    "}Cart
      </p>
    </div>
  );
};

export default Navbar;
