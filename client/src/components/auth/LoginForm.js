import React, { useState, useContext } from 'react'

// import { clearErrors } from '../../actions/errorActions'
import AuthContext from '../../context/auth/AuthContext'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { loginUser } = useContext(AuthContext)

  const onSubmit = event => {
    event.preventDefault()

    // Create user object
    const user = {
      username,
      password,
    }

    // Attempt to login user
    loginUser(user)
  }

  // clearError = () => {
  //   this.props.clearErrors()
  // }

  return (
    <>
      {/* { this.state.msg ? <div>{this.state.msg} <button onClick={this.clearError}>x</button></div> : null } */}

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="login_username">Username:</label>
          <input
            id="login_username"
            type="text"
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="login_password">Password:</label>
          <input
            id="login_password"
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  )
}
