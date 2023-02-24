import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import CartList from "./CartList";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar 
        style={{backgroundColor:"#2f2f30"}}
        dark
        expand="xl">
          <NavbarBrand href="/">Store App</NavbarBrand>
          <NavbarText>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="form2">Login</Link>
                </NavItem>
                <CartList cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}/>
              </Nav>
            </Collapse>
          </NavbarText>
        </Navbar>
      </div>
    );
  }
}
