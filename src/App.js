import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import BooksList from "./components/pages/booksList";

// to get the current state of the store
const middleware = applyMiddleware(logger);

// Store
const store = createStore(reducers, middleware);

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
