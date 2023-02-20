import React from "react";
import CategoryList from "./components/CategoryList";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import {Container,Row, Col} from "reactstrap";

function App() {
  let titleCategory ="Category List";
  let titleProduct ="Product List";
  return (
    <div>
      <Container>
        <Row>
          <Nav/>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory}/>
            {/* <CategoryList title="Category List"/> */}
          </Col>
          <Col xs="9">
            <ProductList title={titleProduct}/>
            {/* <ProductList title="Product List"/> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;