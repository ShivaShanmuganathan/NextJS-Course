// pages/account.js
import { useState } from 'react'

export default function Account () {
  // Example user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com'
    // Add other relevant user fields
  })

  // Handle input change
  function handleChange (event) {
    const { name, value } = event.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  // Handle form submission
  function handleSubmit (event) {
    event.preventDefault()
    // Here, you would typically send the updated user data to your backend
    alert('Profile updated!') // Placeholder functionality
  }

  return (
    <div>
      <h1>My Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={user.name}
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
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more fields as necessary */}
        <button type='submit'>Update Profile</button>
      </form>
    </div>
  )
}
