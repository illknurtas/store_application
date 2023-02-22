import React, { Component } from 'react'
import {Table } from 'reactstrap';
import {HiOutlinePlus} from 'react-icons/hi'

export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table className='table'>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">In Stock</th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.products.map(
              (product => (
                <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitsInStock}</td>
                  <td>
                  <button type="button" 
                  onClick={()=>this.props.addToCart(product)}
                  className="btn btn-info">
                    <HiOutlinePlus/>
                  </button>
                  </td>

                </tr>
              )))
          }
          </tbody>
        </Table>
      </div>
    )
  }
}
