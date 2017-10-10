import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { addToCart } from "./actions/cartActions";
import { postBooks, deleteBook, updateBook } from "./actions/bookActions";
import BooksList from "./components/pages/booksList";

// to get the current state of the store
const middleware = applyMiddleware(logger);

// Store
const store = createStore(reducers, middleware);

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

class App extends Component {
  render() {
    return (
      <div>
        {/* making the store(redux) available for our components using the provider */}
        <Provider store={store}>
          <BooksList />
        </Provider>
      </div>
    );
  }
}

export default App;
