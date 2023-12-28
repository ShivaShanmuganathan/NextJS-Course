// pages/login.js
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Login () {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const router = useRouter()

  // Handle input change
  function handleChange (event) {
    const { name, value } = event.target
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }))
  }

  // Handle form submission
  function handleSubmit (event) {
    event.preventDefault()
    // Here, you would typically validate credentials against your backend
    // For now, we'll just redirect to the homepage as an example
    alert('Login successful!') // Placeholder functionality
    router.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <Link href='/register'>
          <div>Register</div>
        </Link>
      </p>
    </div>
  )
}
