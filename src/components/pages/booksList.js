import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBooks } from "../../actions/bookActions";

class BooksList extends Component {
  // Dispatch an action
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const booksList = this.props.books.map(function(booksArr) {
      return (
        <div key={booksArr.id}>
          <h2> {booksArr.title} </h2>
          <h2> {booksArr.description} </h2>
          <h2> {booksArr.price} </h2>
          <button className="btn btn-small btn-danger">Buy now</button>
        </div>
      );
    });
    return <div>{booksList}</div>;
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
