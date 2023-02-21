import React,{Component} from "react";
import CategoryList from "./components/CategoryList";
import Navi from "./components/Navi";
import ProductList from "./components/ProductList";
import {Container,Row, Col} from "reactstrap";

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
      addedItem.quamtity+=1;
    }
    else{
      newCart.push({
        product: product,
        quamtity:1
      });
    }
    this.setState({cart: newCart});
  }
  render(){
    let categoryInfo = {title:"Category List"};
    let productInfo = {title:"Category List"};
    return(
      <div>
      <Container>
          <Navi
          cart = {this.state.cart}/>
        <Row>
          <Col xs="3">
            <CategoryList 
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList 
            info={productInfo}
            products = {this.state.products}
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            addToCart ={this.addToCart}/>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}