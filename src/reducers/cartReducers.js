export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "CART_ADD":
      return { cart: [...state, ...action.payload] };

    case "DELETE_CART_ITEM":
      return { cart: [...state, ...action.payload] };

    case "UPDATE_CART_QUANTITY":
      const currentBookToUpdate = [...state.cart];
      const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
        return book.id === action._id;
      });

      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
      };

      let cartUpdate = [
        ...currentBookToUpdate.slice(0, indexToUpdate),
        newBookToUpdate,
        ...currentBookToUpdate.slice(indexToUpdate + 1)
      ];

      return { ...state, cart: cartUpdate };

    default:
      break;
  }
  return state;
}
