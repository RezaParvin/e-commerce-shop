import React from "react";
import "./AuthPage.scss";
import SignIn from "../../components/Sign-In/Sing-In";
import SignUp from "../../components/Sign-Up/Sign-Up";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <SignUp />
      <SignIn />
    </div>
  );
};

export default AuthPage;
