export function cartReducers(state = { cart: [] }, action) {
  switch (action.type) {
    case "CART_ADD":
      return {
        cart: [...state, ...action.payload],
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      };

    case "DELETE_CART_ITEM":
      return {
        cart: [...state, ...action.payload],
        totalAmount: totals(action.payload).amount,
        totalQty: totals(action.payload).qty
      };

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

      return {
        ...state,
        cart: cartUpdate,
        totalAmount: totals(cartUpdate).amount,
        totalQty: totals(cartUpdate).qty
      };

    default:
      break;
  }
  return state;
}

// CALCULATE TOTALS
export function totals(payloadArr) {
  //calculate total price amount to pay
  const totalAmount = payloadArr
    .map(function(cartArr) {
      return cartArr.price * cartArr.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0); // start summing from index:0

  //calculate total quantity
  const totalQty = payloadArr
    .map(function(qty) {
      return qty.quantity;
    })
    .reduce(function(a, b) {
      return a + b;
    }, 0); // start summing from index:0

  // reduce method, is a javascript function, that sums up two by two from the entered index
  return { amount: totalAmount.toFixed(2), qty: totalQty };
}
