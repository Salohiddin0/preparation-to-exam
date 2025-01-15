import React from 'react'
import { ProductProvider } from './ProductContext'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import './App.css'

function App () {
  return (
    <ProductProvider>
      <div className='app'>
        <header className='app-header'>
          <h1>Product Management System</h1>
        </header>
        <main className='app-main'>
          <div className='product-section'>
            <ProductForm />
            <ProductList />
          </div>
          <Cart />
        </main>
      </div>
    </ProductProvider>
  )
}

export default App
