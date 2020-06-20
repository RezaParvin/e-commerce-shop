import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import { Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import Checkout from "./pages/checkout/checkout";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import { connect } from "react-redux";
import { checkUserAuthenticatedStart } from "./redux/actions/index";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/selectors/user";
import { selectCartItemsCount } from "./redux/selectors/cart";
import OrderPage from "./pages/OrderPage/OrderPage";

class App extends Component {
  componentDidMount() {
    this.props.onCheckUserAuthenticated();
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/auth"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <AuthPage />
          }
        />
        <Route
          path="/checkout"
          render={(props) =>
            this.props.cartItemsCount === 0 ? (
              <Redirect to="/" />
            ) : (
              <Checkout {...props} />
            )
          }
        />
        <Route
          path="/contact"
          render={(props) =>
            this.props.cartItemsCount === 0 ? (
              <Redirect to="/" />
            ) : (
              <ContactPage {...props} />
            )
          }
        />
        <Route
          path="/orders"
          render={(props) =>
            !this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <OrderPage {...props} />
            )
          }
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckUserAuthenticated: () => dispatch(checkUserAuthenticatedStart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
