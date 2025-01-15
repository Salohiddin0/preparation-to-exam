import React, { useContext } from 'react'
import { ProductContext } from '../ProductContext'
import './Cart.css'

const Cart = () => {
  const { cart, removeFromCart } = useContext(ProductContext)

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )
  const shippingFee = totalPrice > 1000 ? 0 : 30

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className='empty-message'>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(product => (
              <li key={product.id} className='cart-item'>
                <div className='item-info'>
                  <h3>{product.name}</h3>
                  <p>
                    ${product.price.toFixed(2)} x {product.quantity}
                  </p>
                </div>
                <button onClick={() => removeFromCart(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className='cart-summary'>
            <p>Shipping: ${shippingFee.toFixed(2)}</p>
            <p className='total'>
              Total: ${(totalPrice + shippingFee).toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
