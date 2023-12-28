// pages/orders.js
import Link from 'next/link'

// Dummy data for the example
const orders = [
  { id: 1, name: 'Order 1', status: 'Shipped' },
  { id: 2, name: 'Order 2', status: 'Processing' },
  { id: 3, name: 'Order 3', status: 'Delivered' }
  // Add more orders as needed
]

export default function Orders () {
  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <Link href={`/orders/${order.id}`}>
              <div>
                <h2>{order.name}</h2>
                <p>{order.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
