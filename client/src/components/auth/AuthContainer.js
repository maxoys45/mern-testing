import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Register from './Register'
import Login from './Login'
import Logout from './Logout'

class AuthContainer extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  }

  render() {
    const { isAuthenticated, user } = this.props.auth

    const authComponents = (
      <>
        <h2>{ user ? `Welcome, ${user.username}` : '' }</h2>

        <Logout />
      </>
    )

    const guestComponents = (
      <>
        <Register />
        <Login />
      </>
    )

    return (
      <>
        { isAuthenticated ? authComponents : guestComponents }
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, null)(AuthContainer)