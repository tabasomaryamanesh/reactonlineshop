import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
//import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBook, updateBook } from "./actions/bookActions";
import BooksList from "./components/pages/booksList";

// to get the current state of the store
const middleware = applyMiddleware(logger);

// Store
const store = createStore(reducers, middleware);

// to get the current state of the store
// store.subscribe(function() {
//   console.log("Current state is :" + store.getState());
// });

class App extends Component {
  render() {
    // Dispatch book actions
    store.dispatch(
      postBooks([
        {
          id: 1,
          title: "book title one",
          description: "book description one",
          price: 53.5
        },
        {
          id: 2,
          title: "book title two",
          description: "book description two",
          price: 80.5
        }
      ])
    );

    store.dispatch(deleteBook(1));

    store.dispatch(
      updateBook({
        id: 1,
        title: "book title updated"
      })
    );

    // Dispatch cart actions
    store.dispatch(
      addToCart([
        {
          id: 1
        }
      ])
    );

    return (
      <div>
        <BooksList />
      </div>
    );
  }
}

export default App;
