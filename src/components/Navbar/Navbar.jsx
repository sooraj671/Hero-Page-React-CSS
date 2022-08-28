import React from "react";
import "./Navbar.css";
import fitlogo from "../../assets/logo.png";


export const Navbar = () => {
  return (
    <div className="nav">
      
      
        <img src={fitlogo} alt="" className="fit-logo" />
        <ul className="menu">
          <li className="menu-items">Home</li>
          <li className="menu-items">Programs</li>
          <li className="menu-items">Why us</li>
          <li className="menu-items">Plans</li>
          <li className="menu-items">Testimonials</li>
        </ul>
      
      
    </div>
  );
};
