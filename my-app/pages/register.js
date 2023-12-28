// pages/register.js
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Register () {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: ''
  })
  const router = useRouter()

  function handleChange (event) {
    const { name, value } = event.target
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      [name]: value
    }))
  }

  function handleSubmit (event) {
    event.preventDefault()
    // Here, you would typically send the user info to your backend for registration
    alert('Registration successful!') // Placeholder functionality
    router.push('/login') // Redirect to login page after registration
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={userInfo.username}
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
            value={userInfo.email}
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
            value={userInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <Link href='/login'>
          <div>Login</div>
        </Link>
      </p>
    </div>
  )
}
