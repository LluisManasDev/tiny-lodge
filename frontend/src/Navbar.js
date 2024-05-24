import React from "react";
import "./Navbar.css";

function Navbar({ isOpen }) {
  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  );
}

export default Navbar;
