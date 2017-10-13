import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCartItem, updateCart } from "../../actions/cartActions";
import { Modal, Button } from "react-bootstrap";

class Cart extends Component {
  // Setting the initial state
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  open() {
    this.setState({ showModal: true });
  }

  close() {
    this.setState({ showModal: false });
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
      <div>
        <h4>Total amount:</h4>
        {cartItemsList}
        <button
          className="btn btn-success btn-small"
          onClick={this.open.bind(this)}
        >
          PROCEED TO CHECKOUT
        </button>
        <br />
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>body</Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  renderEmpty() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.carts.cart
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
