import React, { Component } from 'react';
import{
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from 'reactstrap';
import {HiShoppingCart, HiOutlineShoppingCart} from "react-icons/hi";
import { Link } from 'react-router-dom';

export default class CartList extends Component {
  renderSummary(){
    return(
      <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                <HiShoppingCart/> 
                {/* -  {this.props.cart.length} Item(s) */}
            </DropdownToggle>
            <DropdownMenu end>
              {
                this.props.cart.map(
                  cartItem => (
                    <DropdownItem key={cartItem.product.id}>
                      <Badge color='danger'
                      onClick={()=> this.props.removeFromCart(cartItem.product)}>
                        X
                      </Badge>
                      {cartItem.product.productName}
                      <Badge color="info">
                        {cartItem.quantity}
                      </Badge>
                      </DropdownItem>
                  )
                )
              }
                <DropdownItem divider/>
                <DropdownItem>
                  <Link to="cart">Go to cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
  };
  renderEmptyCart(){
    return(
      <NavItem>
        <NavLink>
          <HiOutlineShoppingCart/>
        </NavLink>
      </NavItem>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length>0 ? this.renderSummary(): this.renderEmptyCart()}
      </div>
    )
  }
}
