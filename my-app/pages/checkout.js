// pages/checkout.js
import Link from 'next/link'
import { useState } from 'react'

export default function Checkout () {
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  })

  // This function would handle updating state for each input field
  function handleChange (event) {
    const { name, value } = event.target
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }))
  }

  // This function would handle the form submission
  function handleSubmit (event) {
    event.preventDefault()
    // Here you would typically handle the form submission, such as sending the data to your backend
    alert('Order placed!') // Placeholder functionality
  }

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={orderDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={orderDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            value={orderDetails.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='city'>City:</label>
          <input
            type='text'
            id='city'
            name='city'
            value={orderDetails.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <input
            type='text'
            id='country'
            name='country'
            value={orderDetails.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='zip'>ZIP / Postal code:</label>
          <input
            type='text'
            id='zip'
            name='zip'
            value={orderDetails.zip}
            onChange={handleChange}
            required
          />
        </div>
        {/* More fields as necessary... */}
        <button type='submit'>Place Order</button>
      </form>

      <Link href='/cart'>
        <div>Return to Cart</div>
      </Link>
    </div>
  )
}
