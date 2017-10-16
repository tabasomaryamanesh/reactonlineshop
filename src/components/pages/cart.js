import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCartItem, updateCart } from "../../actions/cartActions";
import { Well, Collapse } from "react-bootstrap";

class Cart extends Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }
  onDelete(id) {
    const currentBookToDelete = this.props.cart;
    const indexToDelete = currentBookToDelete.findIndex(function(cart) {
      return cart.id === id;
    });

    let cartAfterDelete = [
      ...currentBookToDelete.slice(0, indexToDelete),
      ...currentBookToDelete.slice(indexToDelete + 1)
    ];
    this.props.deleteCartItem(cartAfterDelete);
  }

  render() {
    if (this.props.cart.length === 0) {
      return this.renderEmpty();
    } else {
      return this.renderCart();
    }
  }

  OnIncrement(_id) {
    this.props.updateCart(_id, 1);
  }

  OnDecrement(_id, qty) {
    if (qty > 1) {
      this.props.updateCart(_id, -1);
    }
  }

  renderCart() {
    const cartItemsList = this.props.cart.map(function(cartArray) {
      return (
        <div key={cartArray.id}>
          <span>
            <h5>
              <b>Item:</b> {cartArray.title}
            </h5>
          </span>
          <span>usd.{cartArray.price}</span>
          <span>
            qty.<span className="label label-success">
              {cartArray.quantity}
            </span>
          </span>
          <button
            onClick={this.OnIncrement.bind(this, cartArray.id)}
            className="btn btn-xs"
            ref="btn-inc"
          >
            +
          </button>
          <span> </span>
          <button
            onClick={this.OnDecrement.bind(
              this,
              cartArray.id,
              cartArray.quantity
            )}
            className="btn btn-xs"
            ref="btn-dec"
          >
            -
          </button>
          <span> </span>
          <button
            onClick={this.onDelete.bind(this, cartArray.id)}
            className="btn btn-xs btn-danger"
            ref="btn-remove"
          >
            DELETE
          </button>
        </div>
      );
    }, this);

    return (
      <Well>
        <h4>Total amount:</h4>
        {cartItemsList}
        <br />
        <button
          className="btn btn-success btn-small"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          PROCEED TO CHECKOUT
        </button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <h6>Your order has been saved</h6>
              <p>You will recieve an email confirmation</p>
              <p>total: £{this.props.totalAmount}</p>
            </Well>
          </div>
        </Collapse>
        <br />
      </Well>
    );
  }

  renderEmpty() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.carts.cart,
    totalAmount: state.carts.totalAmount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteCartItem: deleteCartItem,
      updateCart: updateCart
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
