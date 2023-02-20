import React from "react";
import CategoryList from "./components/CategoryList";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import {Container,Row, Col} from "reactstrap";

function App() {
  let categoryInfo = {title:"Category List"};
  let productInfo = {title:"Category List", baskaBirSey:"Başka Bir Şey"};
  return (
    <div>
      <Container>
        <Row>
          <Nav/>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo}/>
          </Col>
          <Col xs="9">
            <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;