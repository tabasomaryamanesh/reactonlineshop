// @flow
import React, { Component } from "react";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import BooksList from "./components/pages/booksList";
import { Route, IndexRoute, browserHistory, Router } from "react-router";
import Cart from "./components/pages/cart";
import Main from "./components/pages/main";
import BookForm from "./components/pages/bookForm";

// to get the current state of the store
const middleware = applyMiddleware(logger);

// Store
const store = createStore(reducers, middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Main}>
            <IndexRoute component={BooksList} />
            <Route path="/admin" component={BookForm} />
            <Route path="/cart" component={Cart} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
