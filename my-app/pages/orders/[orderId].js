// pages/order/[orderId].js
import { useRouter } from 'next/router'

// Dummy data for the example
const orders = [
  { id: '1', product: 'Product 1', status: 'Shipped', amount: 99.99 },
  { id: '2', product: 'Product 2', status: 'Processing', amount: 199.99 },
  { id: '3', product: 'Product 3', status: 'Delivered', amount: 299.99 }
  // ...other orders
]

const OrderDetail = () => {
  const router = useRouter()
  const { orderId } = router.query

  // Find the order with the matching id
  const order = orders.find(o => o.id === orderId)

  // If no order is found, you can return a "not found" message or render a 404 page
  if (!order) {
    return <p>Order not found!</p>
  }

  return (
    <div>
      <h1>Order Detail</h1>
      <p>Order ID: {order.id}</p>
      <p>Product: {order.product}</p>
      <p>Status: {order.status}</p>
      <p>Total Amount: ${order.amount}</p>
      {/* Add more details as needed */}
    </div>
  )
}

export default OrderDetail
