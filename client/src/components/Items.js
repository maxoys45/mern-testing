import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getItems, deleteItem } from '../actions/itemActions'

class Items extends Component {
  componentDidMount() {
    this.props.getItems()
  }

  removeItem = id => {
    this.props.deleteItem(id)
  }

  render() {
    const { items } = this.props.item

    return (
      <ul>
        {
          items.map(({ _id, name }) => (
            <li key={_id}>
              <button onClick={this.removeItem.bind(this, _id)}>Remove</button>
              {name}
            </li>
          ))
        }
      </ul>
    )
  }
}

Items.propTypes = {
  getItems: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  item: state.item,
})

export default connect(mapStateToProps, { getItems, deleteItem })(Items)