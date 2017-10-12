import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    if (this.props.cart.length === 0) {
      return this.renderEmpty();
    } else {
      return this.renderCart();
    }
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArray) {
      return <div key={cartArray.id}>{cartArray.title}</div>;
    });
    return (
      <div>
        <h4>Items added to the cart:</h4>
        {cartItemsList}
        <br />
      </div>
    );
  }

  renderEmpty() {
    return <div />;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    cart: state.carts.cart
  };
}
export default connect(mapStateToProps)(Cart);
