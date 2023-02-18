import React from "react";
import CategoryList from "./CategoryList";
import Nav from "./Nav";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <Nav/>
      <CategoryList/>
      <ProductList/>
    </div>
  );
}

export default App;