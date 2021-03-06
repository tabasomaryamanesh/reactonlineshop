// Add a new book
export function postBooks(book) {
  console.log(book);
  return {
    type: "POST_BOOK",
    payload: book
  };
}

// delete a book
export function deleteBook(id) {
  return {
    type: "BOOK_DELETE",
    payload: id
  };
}

// update a book
export function updateBook(book) {
  return {
    type: "BOOK_UPDATE",
    payload: book
  };
}

// get all books (get all does not need any payload)
export function getBooks() {
  return {
    type: "BOOK_GET"
  };
}
