import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../Cart-DropDown/Cart-DropDown";


const Header = ({ currentUser,cartDropDown }) => {
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
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            خروج
          </div>
        ) : (
          <Link to="/auth" className="option">
            ورود
          </Link>
        )}
        <CartIcon />
        {cartDropDown ? <CartDropDown /> : null}
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    cartDropDown: state.cart.hidden,
  };
};



export default connect(mapStateToProps)(Header);
