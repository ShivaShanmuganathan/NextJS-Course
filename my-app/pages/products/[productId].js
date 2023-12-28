// pages/products/[productId].js
import { useRouter } from 'next/router'

// Dummy data for the example
const products = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the description for Product 1',
    price: '$99.99'
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the description for Product 2',
    price: '$199.99'
  },
  {
    id: '3',
    name: 'Product 3',
    description: 'This is the description for Product 3',
    price: '$299.99'
  }
  // ...other products
]

const ProductDetail = () => {
  const router = useRouter()
  const { productId } = router.query

  // Find the product with the matching id
  const product = products.find(p => p.id === productId)

  // If no product is found, you can return a "not found" message or render a 404 page
  if (!product) {
    return <p>Product not found!</p>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add more details as needed */}
    </div>
  )
}

export default ProductDetail
