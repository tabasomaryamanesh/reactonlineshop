import React, { Component } from "react";
import Menu from "../pages/menu";
import Footer from "../pages/footer";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <div>
        <Menu cartItemsNumber={this.props.totalQty} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalQty: state.carts.totalQty
  };
}

export default connect(mapStateToProps)(Main);
