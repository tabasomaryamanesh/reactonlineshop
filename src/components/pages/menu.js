import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Navbar,
  Badge,
  NavDropdown,
  MenuItem
} from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Capital on Tap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/about">
              about
            </NavItem>
            <NavItem eventKey={2} href="/contact">
              contact
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/admin">
              Admin
            </NavItem>
            <NavItem eventKey={2} href="/cart">
              Your Cart:&nbsp;&nbsp;
              <Badge className="badge">total:1</Badge>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
