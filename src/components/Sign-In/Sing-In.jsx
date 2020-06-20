import React, { Component } from "react";
import "./Sign-In.scss";
import FormInput from "../Form-Input/Form-input";
import CustomButton from "../Custom-Button/Custom-Button";
import { connect } from "react-redux";
import {
  userEmailSignInStart,
  userGoogleSignInStart,
} from "../../redux/actions/index";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { onUserEmailSignIn } = this.props;
    onUserEmailSignIn(email, password);
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { onUserGoogleSignIn } = this.props;
    return (
      <div className="sign-in">
        <h3>من قبلا ثبت نام کرده ام</h3>
        <p>با ایمیل و رمز عبور وارد شوید</p>
        <form onSubmit={this.onSubmitHandler} className="form">
          <FormInput
            label="ایمیل"
            onChangeHandler={this.onChangeHandler}
            value={this.state.email}
            name="email"
            elementType="input"
            type="email"
          />
          <FormInput
            label="رمز"
            onChangeHandler={this.onChangeHandler}
            value={this.state.password}
            name="password"
            elementType="input"
            type="password"
          />
          <div className="container-form-button">
            <CustomButton type="submit" width="49%">
              ورود
            </CustomButton>
            <CustomButton
              onClick={onUserGoogleSignIn}
              signInWithGoogle
              width="49%"
            >
              ورود با حساب گوگل
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onUserGoogleSignIn: () => {
    dispatch(userGoogleSignInStart());
  },
  onUserEmailSignIn: (email, password) => {
    dispatch(userEmailSignInStart(email, password));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
