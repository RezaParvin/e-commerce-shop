import React, { Component } from "react";
import "./Sign-Up.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../Custom-Button/Custom-Button";
import FormInput from "../Form-Input/Form-input";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  onChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("رمزعبور با تایید رمز عبور یکسان نیست");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h3>کاربر جدید هستم</h3>
        <p>با ایمیل و رمز عبور ثبت نام کنید</p>
        <form onSubmit={this.onSubmitHandler} className="form">
          <FormInput
            label="نام کاربری"
            onChangeHandler={this.onChangeHandler}
            value={displayName}
            name="displayName"
            type="text"
          />
          <FormInput
            label="ایمیل"
            onChangeHandler={this.onChangeHandler}
            value={email}
            name="email"
            type="email"
          />
          <FormInput
            label="رمز"
            onChangeHandler={this.onChangeHandler}
            value={password}
            name="password"
            type="password"
          />
          <FormInput
            label="تایید رمز"
            onChangeHandler={this.onChangeHandler}
            value={confirmPassword}
            name="confirmPassword"
            type="password"
          />
          <CustomButton type="submit" width="49%">
            ثبت نام
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
