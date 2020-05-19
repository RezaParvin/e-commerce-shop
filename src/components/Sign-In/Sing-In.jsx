import React, { Component } from "react";
import "./Sign-In.scss";
import FormInput from "../Form-Input/Form-input";
import CustomButton from "../Custom-Button/Custom-Button";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
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
          <CustomButton type="submit" width="15vw">
            ورود
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
