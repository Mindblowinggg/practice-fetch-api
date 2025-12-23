import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-10 justify-center py-4 bg-gray-300">
      <Link to="/">Home</Link>
      <Link to="/user">Users</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
