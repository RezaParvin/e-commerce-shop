export const mapCustomerProfile = {
  name: "نام",
  lastName: "نام خانوادگی",
  mobile: "موبایل",
  telphone: "تلفن",
  province: "استان",
  city: "شهر",
  postMethod: "روش ارسال پستی",
  address: "آدرس کامل",
  postalCode: "کد پستی",
};

export const customerProfileFormState = {
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
};

export const orderCustomerTitles = ["کدکالا", "نام", "تصویر", "قیمت", "تعداد"];
