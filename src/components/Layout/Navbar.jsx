// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
