import React, { Component } from "react";

class BookItem extends Component {
  render() {
    return (
      <div className="well">
        <h4>
          {this.props.title}
          <small> £{this.props.price}</small>
        </h4>
        <p>{this.props.description}</p>
        <button className="btn btn-info btn-small">Buy now</button>
      </div>
    );
  }
}

export default BookItem;
