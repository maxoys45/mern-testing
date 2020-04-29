import React, { useContext, useEffect } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { Item } from './Item'

export const Items = () => {
  const { items, getItems } = useContext(GlobalContext)

  useEffect(() => {
    getItems()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <hr />

      <h2>Items</h2>

      <ul>
        {items.map(item => (
          <Item key={item._id} item={item} />
        ))}

        {/* {items.map(({ _id, name }) => (
            <li key={_id}>
              {this.props.isAuthenticated ? (
                <button onClick={this.removeItem.bind(this, _id)}>
                  Remove
                </button>
              ) : (
                ''
              )}
              {name}
            </li>
          ))} */}
      </ul>
    </>
  )
}
