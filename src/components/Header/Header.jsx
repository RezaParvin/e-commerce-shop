import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDownContainer from "../Cart-DropDown/Cart-DropDown-Container";
import { createStructuredSelector } from "reselect";
import { userSignOutStart } from "../../redux/actions/index";
import {
  selectCartHidden,
  selectCurrentUser,
} from "../../redux/selectors/user";

import {
  HeaderContainer,
  LinkOption,
  LogoContainer,
  OptionsContainer,
} from "./Header.styles";

const Header = ({ currentUser, cartDropDown, onUserSignOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <LinkOption to="/shop">فروشگاه</LinkOption>
        <LinkOption to="/contactUs">تماس با ما</LinkOption>
        {currentUser ? (
          <React.Fragment>
          <LinkOption to='/orders'>سفارشات</LinkOption>
            <LinkOption
              as="div"
              onClick={() => {
                onUserSignOut();
              }}
            >
              خروج
            </LinkOption>
          </React.Fragment>
        ) : (
          <LinkOption to="/auth">ورود</LinkOption>
        )}
        <CartIcon />
        {cartDropDown ? <CartDropDownContainer /> : null}
      </OptionsContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropDown: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  onUserSignOut: () => {
    dispatch(userSignOutStart());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
