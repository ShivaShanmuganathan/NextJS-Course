// pages/cart.js
import Link from 'next/link'

// Dummy data for the cart items
const cartItems = [
  { id: '1', name: 'Product 1', quantity: 1, price: 99.99 },
  { id: '2', name: 'Product 2', quantity: 2, price: 199.99 }
  // Add more cart items as needed
]

export default function Cart () {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <h2>{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                {/* Here you would have the option to change quantity or remove the item */}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <Link href='/checkout'>
            <div>
              <button>Proceed to Checkout</button>
            </div>
          </Link>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}
