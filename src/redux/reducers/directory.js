

const initialState = {
  sections: [
    {
      title: "کلاه",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      routeName: "shop/hats",
    },
    {
      title: "کت",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      routeName: "shop/jackets",
    },
    {
      title: "کفش اسپورت",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      routeName: "shop/sneakers",
    },
    {
      title: "بانوان",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      routeName: "shop/womens",
    },
    {
      title: "آقایان",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      routeName: "shop/mens",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
