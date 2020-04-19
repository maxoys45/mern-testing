import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addItem } from '../actions/itemActions'

class AddItem extends Component {
  state = {
    name: '',
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
      </div>
    )
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  item: state.item,
})

export default connect(mapStateToProps, { addItem })(AddItem)