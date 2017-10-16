import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import BooksList from "./components/pages/booksList";
import Menu from "./components/pages/menu";
import Footer from "./components/pages/footer";

// to get the current state of the store
const middleware = applyMiddleware(logger);

// Store
const store = createStore(reducers, middleware);

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Menu />
        </div>
        {/* making the store(redux) available for our components using the provider */}
        <Provider store={store}>
          <BooksList />
        </Provider>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
