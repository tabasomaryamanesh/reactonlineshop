import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../../actions/cartActions";

class BookItem extends Component {
  // function that dispatches the addToCart action
  handleAddToCart() {
    //we want to call the action
    const book = [
      ...this.props.cart,
      {
        id: this.props.id,
        title: this.props.title,
        price: this.props.price,
        description: this.props.description
      }
    ];
    this.props.addToCart(book);
  }

  render() {
    return (
      <div className="well">
        <h4>
          {this.props.title}
          <small> £{this.props.price}</small>
        </h4>
        <p>{this.props.description}</p>
        <button
          onClick={this.handleAddToCart.bind(this)}
          className="btn btn-info btn-small"
        >
          Buy now
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {
    cart: state.carts.cart
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addToCart: addToCart
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
