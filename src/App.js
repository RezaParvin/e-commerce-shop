import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import { Route, Redirect } from "react-router-dom";
import AuthPage from "./pages/AuthPage/AuthPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import * as actions from "./redux/actions/index";

class App extends Component {
  componentDidMount() {
    this.unOnAuthStateChange = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //to be sure database update
        userRef.onSnapshot((snapshot) => {
          this.props.onAuthUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.props.onAuthUser(userAuth);
      }
    });
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthUser: (user) => {
      dispatch(actions.userAuth(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
