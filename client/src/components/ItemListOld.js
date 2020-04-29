import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getItems, deleteItem } from '../actions/itemActions'

class Items extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  }

  componentDidMount() {
    this.props.getItems()
  }

  removeItem = id => {
    this.props.deleteItem(id)
  }

  render() {
    const { items } = this.props.item

    return (
      <>
        <hr />

        <h2>Items</h2>

        <ul>
          {
            items.map(({ _id, name }) => (
              <li key={_id}>
                { this.props.isAuthenticated ? <button onClick={this.removeItem.bind(this, _id)}>Remove</button> : '' }
                {name}
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { getItems, deleteItem })(Items)