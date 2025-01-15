import React, { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const addProduct = product => {
    setProducts(prev => [...prev, product])
  }

  const addToCart = product => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === product.id)
      if (existingProduct) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = id => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === id)
      if (existingProduct.quantity > 1) {
        return prev.map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      }
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <ProductContext.Provider
      value={{ products, addProduct, cart, addToCart, removeFromCart }}
    >
      {children}
    </ProductContext.Provider>
  )
}
