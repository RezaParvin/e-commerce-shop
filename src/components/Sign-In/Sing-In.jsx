import React, { Component } from "react";
import "./Sign-In.scss";
import FormInput from "../Form-Input/Form-input";
import CustomButton from "../Custom-Button/Custom-Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
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
            type="email"
          />
          <FormInput
            label="رمز"
            onChangeHandler={this.onChangeHandler}
            value={this.state.password}
            name="password"
            type="password"
          />
          <div className="container-form-button">
            <CustomButton type="submit" width="49%">
              ورود
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
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

export default SignIn;
