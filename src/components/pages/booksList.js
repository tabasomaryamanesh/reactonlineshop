import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/bookActions";
import BookItem from "./bookItem";
import BookForm from "./bookForm";

class BooksList extends Component {
  // Dispatch an action
  componentDidMount() {
    this.props.getBooks([
      {
        id: 1,
        title: "title one",
        descriptions: "desc one",
        price: 55.05
      },
      {
        id: 2,
        title: "title two",
        descriptions: "desc two",
        price: 585.05
      }
    ]);
  }

  render() {
    const booksList = this.props.books.map(function(booksArr) {
      return (
        <div key={booksArr.id}>
          <BookItem
            id={booksArr.id}
            title={booksArr.title}
            descriptions={booksArr.descriptions}
            price={booksArr.price}
          />
        </div>
      );
    });
    return (
      <div className="container">
        <div>{booksList}</div>
        <div className="well">
          <BookForm />
        </div>
      </div>
    );
  }
}

// having access to the state
function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

//dispatch the action that is paased to the 'bindActionCreators'
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBooks: getBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
