//export one function for each cart action
export function addToCart(book) {
  return {
    type: "CART_ADD",
    payload: book
  };
}

// second export for the second action
export function deleteCartItem(cart) {
  return {
    type: "DELETE_CART_ITEM",
    payload: cart
  };
}
