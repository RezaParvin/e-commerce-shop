import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import { Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import Checkout from "./pages/checkout/checkout";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import { connect } from "react-redux";
import { checkUserAuthenticatedStart } from "./redux/actions/index";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/selectors/user";

class App extends Component {
  componentDidMount() {
    this.props.onCheckUserAuthenticated();
  }

  componentWillUnmount() {
    this.unOnAuthStateChange();
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
        <Route path="/checkout" component={Checkout} />
        <Route path="/contact" component={ContactPage} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckUserAuthenticated: () => {
      dispatch(checkUserAuthenticatedStart());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
