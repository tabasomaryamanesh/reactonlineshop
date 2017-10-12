export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "CART_ADD":
      return { cart: [...state, ...action.payload] };

    default:
      break;
  }
  return state;
}
