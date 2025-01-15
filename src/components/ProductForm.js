import React, { useContext, useState } from 'react';
import { ProductContext } from '../ProductContext';
import './ProductForm.css';

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { id: Date.now(), name, price: parseFloat(price) };
    addProduct(product);
    setName('');
    setPrice('');
  };

  return (
    <div className="product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;

