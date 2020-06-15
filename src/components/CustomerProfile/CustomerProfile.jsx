import React, { Component } from "react";
import FormInput from "../Form-Input/Form-input";
import {
  CustomerProfileContainer,
  CustomerProfileHeader,
} from "./CustomerProfile.styles";
import CustomButton from "../Custom-Button/Custom-Button";

class CustomerProfile extends Component {
  state = {
    form: {
      name: {
        elementConfig: {
          type: "text",
          label: "نام",
          name: "name",
          required: true,
        },
        validationRule: {
          isString: true,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      lastName: {
        elementConfig: {
          type: "text",
          label: "نام خانوادگی",
          required: true,
          name: "lastName",
        },
        validationRule: {
          isString: true,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      mobile: {
        elementConfig: {
          type: "text",
          label: "موبایل",
          required: true,
          name: "mobile",
        },
        validationRule: {
          isNumber: true,
          hasLength: 11,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      telphone: {
        elementConfig: {
          type: "text",
          label: "تلفن",
          required: true,
          name: "telphone",
        },
        validationRule: {
          isNumber: true,
          hasLength: 11,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      province: {
        elementConfig: {
          type: "text",
          label: "استان",
          required: true,
          name: "province",
        },
        validationRule: {
          isString: true,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      city: {
        elementConfig: {
          type: "text",
          label: "شهر",
          required: true,
          name: "city",
        },
        validationRule: {
          isString: true,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
      postMethod: {
        elementConfig: {
          label: "روش ارسال",
          options: {
            pishtaz: "پست پیشتاز",
            sefareshi: "پست سفارشی",
          },
          name: "postMethod",
        },
        validationRule: {},
        elementType: "select",
        isValid: true,
        value: "pishtaz",
        isTouched: true,
      },
      address: {
        elementConfig: {
          label: "آدرس",
          required: true,
          name: "address",
        },
        validationRule: { isEmpty: true },
        isValid: false,
        elementType: "textarea",
        value: "",
        isTouched: false,
      },
      postalCode: {
        elementConfig: {
          type: "text",
          label: "کدپستی",
          required: true,
          name: "postalCode",
        },
        validationRule: {
          hasLength: 10,
          isEmpty: true,
        },
        elementType: "input",
        isValid: false,
        value: "",
        isTouched: false,
      },
    },
    valid: false,
  };

  checkOverallValid = (elementName) => {
    const resultOverall = Object.values(this.state.form).find((element) => {
      if (element.elementConfig.name === elementName) return false;
      return element.isValid === false;
    });
    if (resultOverall) return false;
    return true;
  };

  checkValidity = (rules, value) => {
    if (rules.isString) {
      const resultTest = /[0-9]/g.test(value);
      if (resultTest) return false;
    }
    if (rules.hasLength) {
      if (value.length !== rules.hasLength) return false;
    }
    if (rules.isNumber) {
      const resultTest = isFinite(value);
      if (!resultTest) return false;
    }
    if (rules.isEmpty) {
      const resultTest = value.length < 1;
      if (resultTest) return false;
    }

    return true;
  };

  onChangeHandler = (event) => {
    const formElements = { ...this.state.form };
    const value = event.target.value;
    const elementName = event.target.name;
    const copyElementTarget = { ...formElements[elementName] };
    copyElementTarget.value = value;
    copyElementTarget.isTouched = true;

    //check validity Input
    copyElementTarget.isValid = this.checkValidity(
      copyElementTarget["validationRule"],
      value
    );

    //set overall validation
    const overallValid =
      copyElementTarget.isValid && this.checkOverallValid(elementName);
    this.setState({
      valid: overallValid,
    });

    formElements[elementName] = copyElementTarget;
    this.setState({ form: formElements });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
  };

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { form, valid } = this.state;
    const formElements = Object.values(
      form
    ).map(
      ({ value, elementConfig, isValid, isTouched, elementType }, index) => (
        <FormInput
          elementType={elementType}
          value={value}
          key={index}
          isValid={isValid}
          isTouched={isTouched}
          onChangeHandler={this.onChangeHandler}
          {...elementConfig}
        />
      )
    );

    return (
      <CustomerProfileContainer>
        <CustomerProfileHeader>
          لطفا مشخصات خود را وارد کنید
        </CustomerProfileHeader>
        <form onSubmit={this.onSubmitHandler}>
          {formElements}
          <CustomButton
            width="180px"
            disabled={!valid}
            onClick={() => {
              alert("test");
            }}
          >
            ثبت سفارش و پرداخت
          </CustomButton>
        </form>
      </CustomerProfileContainer>
    );
  }
}

export default CustomerProfile;
