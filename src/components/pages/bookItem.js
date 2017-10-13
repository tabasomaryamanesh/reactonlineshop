import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart, updateCart } from "../../actions/cartActions";

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
        description: this.props.description,
        quantity: 1
      }
    ];

    // to check if the cart array is empty
    if (this.props.cart.length > 0) {
      let _id = this.props.id;

      let cartIndex = this.props.cart.findIndex(function(cart) {
        return cart.id === _id;
      });

      if (cartIndex === -1) {
        this.props.addToCart(book);
      } else {
        // We need to only update the quantity
        this.props.updateCart(_id, 1);
      }
    } else {
      // Cart is empty
      this.props.addToCart(book);
    }
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
      addToCart: addToCart,
      updateCart: updateCart
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);
