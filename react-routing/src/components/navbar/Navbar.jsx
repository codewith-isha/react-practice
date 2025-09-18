import React from "react";
import "./Navbar.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Router</div>
      <div className="links">
        <Link
          to={"/home"}
          style={{ color: "blue", textDecorationLine: "none" }}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          style={{ color: "blue", textDecorationLine: "none" }}
        >
          About
        </Link>
        <Link
          to={"/service"}
          style={{ color: "blue", textDecorationLine: "none" }}
        >
          Service
        </Link>

        <Link
        to={'/aboutme'}
        ></Link>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
