
export function booksReducers(state = {books:[]}, action){

    switch(action.type){

        case "POST_BOOK":
            return {books:[...state.books,...action.payload]}

        case "BOOK_DELETE":
            const currentBookArray = [...state.books]
            const indexToDelete = currentBookArray.findIndex(function(book){
                return book.id === action.payload.id;
            })
            return { books: [...currentBookArray.slice(0,indexToDelete),...currentBookArray.slice(indexToDelete + 1)]}
        
        case "BOOK_UPDATE":
            // const currentBookArray = [...state.books]
            // const indexToDelete = currentBookArray.findIndex(function(book){
            //     return book.id === action.payload.id;
            // })
            // return { books: [...currentBookArray.slice(0,indexToDelete),...currentBookArray.slice(indexToDelete + 1)]}
            break;
        default:
            break;

    }
    return state;
  }
  