import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    if (this.props.cart.length === 0) {
      return this.renderEmpty();
    } else {
      return this.renderEmpty();
    }
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArray) {
      return <div key={cartArray.id}>{cartArray.title}</div>;
    });

    const title = <badge> Items: {this.cartItemsList.length} </badge>;
    return (
      <div>
        <panel header={title}>{this.cartItemsList}</panel>
      </div>
    );
  }

  renderEmpty() {
    return <div>Cart is empty.</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    cart: state.carts.cart
  };
}
export default connect(mapStateToProps)(Cart);
