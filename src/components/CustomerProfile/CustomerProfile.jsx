import React, { Component } from "react";
import {
  CustomerProfileContainer,
  CustomerProfileHeader,
} from "./CustomerProfile.styles";
import CustomButton from "../Custom-Button/Custom-Button";
import Modal from "../Modal/Modal";
import SuccessOrder from "../SuccessOrder/SuccessOrder";
import Backdrop from "../Backdrop/Backdrop";
import { customerProfileFormState } from "../../shared/customer-data";
import {
  checkOverallValid,
  checkValidity,
  CreateUserProfileObject,
  createFormElements,
} from "../../shared/utility";

class CustomerProfile extends Component {
  state = {
    form: customerProfileFormState,
    valid: false,
  };

  onChangeHandler = (event) => {
    const formElements = { ...this.state.form };
    const value = event.target.value;
    const elementName = event.target.name;
    const copyElementTarget = { ...formElements[elementName] };
    copyElementTarget.value = value;
    copyElementTarget.isTouched = true;

    //check validity Input
    copyElementTarget.isValid = checkValidity(
      copyElementTarget["validationRule"],
      value
    );

    //set overall validation
    const overallValid =
      copyElementTarget.isValid &&
      checkOverallValid(elementName, this.state.form);
    this.setState({
      valid: overallValid,
    });

    formElements[elementName] = copyElementTarget;
    this.setState({ form: formElements });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const userProfile = CreateUserProfileObject(this.state.form);
    const {
      cartItems: items,
      totalPrice,
      currentUser,
      onAddUserOrder,
    } = this.props;

    const Order = {
      userOrder: {
        items,
        totalPrice,
      },
      userProfile,
      userId: currentUser.id,
      created_at: Date.now(),
      order_status: "درحال پیگیری",
      payment_status: "پرداخت نشده",
    };

    //dispatch addUserOrder
    onAddUserOrder(Order);
  };

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { form, valid } = this.state;
    const { isSuccess } = this.props;

    const formElements = createFormElements(form, this.onChangeHandler);

    return (
      <CustomerProfileContainer>
        {isSuccess && (
          <React.Fragment>
            <Modal show={isSuccess}>
              <SuccessOrder title="سفارش شما ثبت شد" />
            </Modal>
            <Backdrop />
          </React.Fragment>
        )}
        <CustomerProfileHeader>
          لطفا مشخصات خود را وارد کنید
        </CustomerProfileHeader>
        <form onSubmit={this.onSubmitHandler}>
          {formElements}
          <CustomButton width="180px" disabled={!valid}>
            ثبت سفارش و پرداخت
          </CustomButton>
        </form>
      </CustomerProfileContainer>
    );
  }
}

export default CustomerProfile;
