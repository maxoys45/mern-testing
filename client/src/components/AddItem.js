import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addItem } from '../actions/itemActions'

class AddItem extends Component {
  state = {
    name: '',
  }

  static propTypes = {
    addItem: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newItem = {
      name: this.state.name,
    }

    this.props.addItem(newItem)

    this.setState({ name: '' })
  }

  render() {
    return (
      <div>
        <hr />

        <h2>Add item</h2>

        { this.props.isAuthenticated ? (
          <form onSubmit={this.onSubmit}>
            <label htmlFor="item">Item:</label>
            <input
              id="item"
              type="text"
              name="name"
              placeholder="eg. Milk"
              onChange={this.onChange}
            />

            <button type="submit">Add item</button>
          </form>
         ) : (
          <div>You must be logged in to add an item</div>
         )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { addItem })(AddItem)