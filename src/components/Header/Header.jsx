import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <Logo />
      </Link>
      <nav className="options">
        <Link to="/shop" className="option">
          فروشگاه
        </Link>
        <Link to="/contact" className="option">
          تماس با ما
        </Link>
        <Link to="/auth" className="option">
          ورود
        </Link>
      </nav>
    </header>
  );
};

export default Header;
