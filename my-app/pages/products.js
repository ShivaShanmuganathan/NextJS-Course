// pages/products.js
import Link from 'next/link'

// Dummy data for the example
const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1' },
  { id: 2, name: 'Product 2', description: 'Description for product 2' },
  { id: 3, name: 'Product 3', description: 'Description for product 3' }
  // Add more products as needed
]

export default function Products () {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
