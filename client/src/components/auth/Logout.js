import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logout } from '../../actions/authActions'

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired,
  }

  render() {
    return (
      <>
        <button onClick={this.props.logout}>Logout</button>
      </>
    )
  }
}

export default connect(null, { logout })(Logout)