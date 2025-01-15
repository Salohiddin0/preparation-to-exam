import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import './ProductList.css'

const ProductList = () => {
  const { products, addToCart } = useContext(ProductContext)

  return (
    <div className='product-list'>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p className='empty-message'>No products added yet</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id} className='product-item'>
              <div className='product-info'>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductList
