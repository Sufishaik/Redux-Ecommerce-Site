const InistalState = {
  products: [],
};

const ProductsReducers = (state = InistalState, { type, payload }) => {
  switch (type) {
    case "SETPRODUCTS":
      // state = [...state, action.payload]
      return { ...state, products: payload };
    // return state;
    default:
      return state;
  }
};

export default ProductsReducers;
