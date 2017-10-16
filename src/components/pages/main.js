import React, { Component } from "react";
import Menu from "../pages/menu";
import Footer from "../pages/footer";

class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Main;
