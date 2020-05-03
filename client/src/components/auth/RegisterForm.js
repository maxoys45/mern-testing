import React, { useState, useContext } from 'react'

// import { clearErrors } from '../../actions/errorActions'
import AuthContext from '../../context/auth/AuthContext'

export const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { registerUser } = useContext(AuthContext)

  const onSubmit = event => {
    event.preventDefault()

    // Create user object
    const newUser = {
      username,
      email,
      password,
    }

    // Attempt to register user
    registerUser(newUser)
  }

  // clearError = () => {
  //   this.props.clearErrors()
  // }

  return (
    <>
      {/* { this.state.msg ? <div>{this.state.msg} <button onClick={this.clearError}>x</button></div> : null } */}

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  )
}