export function booksReducers(
  state = {
    books: [
      {
        id: 11,
        title: "book title one",
        description: "book description one",
        price: 53.5
      },
      {
        id: 42,
        title: "book title two",
        description: "book description two",
        price: 80.5
      }
    ]
  },
  action
) {
  switch (action.type) {
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload] };

    case "BOOK_DELETE":
      const currentBookArray = [...state.books];
      const indexToDelete = currentBookArray.findIndex(function(book) {
        return book.id === action.payload.id;
      });
      return {
        books: [
          ...currentBookArray.slice(0, indexToDelete),
          ...currentBookArray.slice(indexToDelete + 1)
        ]
      };

    case "BOOK_UPDATE":
      // const currentBookArray = [...state.books]
      // const indexToDelete = currentBookArray.findIndex(function(book){
      //     return book.id === action.payload.id;
      // })
      // return { books: [...currentBookArray.slice(0,indexToDelete),...currentBookArray.slice(indexToDelete + 1)]}
      break;

    case "BOOK_GET":
      return { ...state, books: [...state.books] };
    default:
      break;
  }
  return state;
}
