import React,{Component} from "react";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import {Container,Row, Col} from "reactstrap";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./routers/NotFound";
import CartPage from "./routers/CartPage";
import LogIn from "./forms/LogIn";
import SignUp from "./forms/SignUp";

export default class App extends Component {
  state={
    currentCategory :"",
    products:[],
    cart:[]
  };
  changeCategory = (category) => {
    this.setState({
      currentCategory:category.categoryName
    });
    this.getProducts(category.id);
  };
  componentDidMount(){
    this.getProducts();
  };
  getProducts =categoryId=>{
    let url = "http://localhost:3000/products";
    if(categoryId){
      url +="?categoryId="+categoryId;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({products:data}));
  }
  addToCart=(product)=>{
    let newCart = this.state.cart;
    const addedItem = newCart.find(
      c=>c.product.id === product.id
    );
    if(addedItem){
      addedItem.quantity+=1;
    }
    else{
      newCart.push({
        product: product,
        quantity:1
      });
    }
    this.setState({cart: newCart});
    alertify.success(product.productName+" added to cart",2);
  }
  removeFromCart=(product)=>{
    let newCart = this.state.cart.filter(
      c=>c.product.id!==product.id
    );
    this.setState({
      cart: newCart,
    });
    alertify.error(product.productName+" removed from cart",2);
  }
  render(){
    let categoryInfo = {title:""};
    let productInfo = {title:"Products"};
    return(
      <div>
      <Container>
          <Navi
          cart = {this.state.cart}
          removeFromCart={this.removeFromCart}/>
        <Row>
          <Col xs="3">
            <CategoryList 
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={categoryInfo}
            />
          </Col>
          <Col xs="9">
            <Routes>
              <Route 
              exact 
              path="/" 
              element={
                <ProductList 
                info={productInfo}
                products = {this.state.products}
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                addToCart ={this.addToCart}/>
                }/>
              <Route 
              exact 
              path="/cart" 
              element={
                <CartPage 
                cart = {this.state.cart}
                removeFromCart ={this.removeFromCart}/>
                }/>
                <Route path="/login" element={<LogIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}