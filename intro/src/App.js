import React,{Component} from "react";
import CategoryList from "./components/CategoryList";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import {Container,Row, Col} from "reactstrap";

export default class App extends Component {
  state={
    currentCategory :""
  };
  changeCategory = (category) => {
    this.setState({
      currentCategory:category.categoryName
    })
  };
  render(){
    let categoryInfo = {title:"Category List"};
    let productInfo = {title:"Category List"};
    return(
      <div>
      <Container>
        <Row>
          <Nav/>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList 
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList 
            currentCategory={this.state.currentCategory}
            changeCategory={this.changeCategory}
            info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
    )
  }
}