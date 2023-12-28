// pages/index.js
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <h1>Welcome to Our E-Commerce Store</h1>
      <p>Find the latest products and deals below:</p>

      <nav>
        <ul>
          <li>
            <Link href='/products'>
              <button>Products</button>
            </Link>
          </li>
          <li>
            <Link href='/cart'>
              <button>Shopping Cart</button>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <button>Login</button>
            </Link>
          </li>
          <li>
            <Link href='/register'>
              <button>Register</button>
            </Link>
          </li>
          <li>
            <Link href='/orders'>
              <button>Orders</button>
            </Link>
          </li>
          {/* Add additional links as needed for navigation */}
        </ul>
      </nav>

      {/* The rest of your home page content */}
    </div>
  )
}
