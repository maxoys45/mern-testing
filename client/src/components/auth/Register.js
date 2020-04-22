import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    msg: null,
  }

  componentDidUpdate(prevProps) {
    const { error } = this.props

    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg })
      } else {
        this.setState({ msg: null })
      }
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const { username, email, password } = this.state

    // Create user object
    const newUser = {
      username,
      email,
      password,
    }

    // Attempt to register user
    this.props.register(newUser)
  }

  clearError = () => {
    this.props.clearErrors()
  }

  render() {
    return (
      <>
        <hr />

        <h2>Register</h2>

        { this.state.msg ? <div>{this.state.msg} <button onClick={this.clearError}>x</button></div> : null }

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={this.onChange}
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </>
    )
  }
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
})

export default connect(mapStateToProps, { register, clearErrors })(Register)
