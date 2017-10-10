import React, { Component } from "react";

class BookForm extends Component {
  render() {
    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="inputBookTitle" className="col-sm-2 control-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              name="title"
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
              name="Price"
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
              name="bookDescription"
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
            <button type="submit" className="btn btn-success">
              New book
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default BookForm;
