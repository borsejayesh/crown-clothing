import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        <Link className="option" to="/shop">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
