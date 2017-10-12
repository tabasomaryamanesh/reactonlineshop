import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteCartItem } from "../../actions/cartActions";

class Cart extends Component {
  onDelete() {
    //todo: start from here
  }

  render() {
    if (this.props.cart.length === 0) {
      return this.renderEmpty();
    } else {
      return this.renderCart();
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
            qty.<label>0</label>
          </span>
          <button className="btn btn-xs" ref="btn-inc">
            +
          </button>
          <span> </span>
          <button className="btn btn-xs" ref="btn-dec">
            -
          </button>
          <span> </span>
          <button className="btn btn-xs btn-danger" ref="btn-remove">
            DELETE
          </button>
        </div>
      );
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteCartItem: deleteCartItem
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
