import React from "react";
import CustomerProfile from "../../components/CustomerProfile/CustomerProfile.container";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/user";

const Contact = ({ currentUser }) => {
  let render = <CustomerProfile />;
  if (!currentUser) {
    render = <Redirect to="/auth" />;
  }
  return render;
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Contact);
