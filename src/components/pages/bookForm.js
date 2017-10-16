import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { postBooks, deleteBook } from "../../actions/bookActions";
import { findDOMNode } from "react-dom";

class BookForm extends Component {
  handleSubmit() {
    const newBook = [
      {
        id: 125,
        title: findDOMNode(this.refs.title).value,
        price: findDOMNode(this.refs.price).value,
        description: findDOMNode(this.refs.description).value
      }
    ];
    this.props.postBooks(newBook);
  }

  onDeleteBook() {
    console.log("delete function happened");
    let bookId = findDOMNode(this.refs.deleteBtn).value;
    this.props.deleteBook(bookId);
  }

  render() {
    const bookList = this.props.books.map(function(bookArr) {
      return <option key={bookArr.id}> {bookArr.id} </option>;
    });

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputBookTitle" className="col-sm-2 control-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              ref="title"
              type="text"
              className="form-control"
              id="inputBookTitle"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputBookPrice" className="col-sm-2 control-label">
            Price
          </label>
          <div className="col-sm-10">
            <input
              ref="price"
              type="text"
              className="form-control"
              id="inputBookPrice"
              placeholder="Price"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription" className="col-sm-2 control-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              ref="description"
              type="text"
              className="form-control"
              rows="3"
              id="inputDescription"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button
              type="submit"
              onClick={this.handleSubmit.bind(this)}
              className="btn btn-success"
            >
              Save
            </button>
          </div>
        </div>
        <div className="form-group">
          <label>Select a book from the list below to delete</label>
          <select ref="deleteBtn">
            <option value="select">select</option>
            {bookList}
          </select>
        </div>
        <div className="form-group">
          <button
            onClick={this.onDeleteBook.bind(this)}
            className="btn btn-danger"
          >
            Delete Book
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postBooks, deleteBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
