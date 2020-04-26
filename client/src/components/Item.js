import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext)

  const removeItem = id => {
    deleteItem(id)
  }

  return (
    <li>
      <button onClick={() => deleteItem(item._id)}>Remove</button>
      <button onClick={() => removeItem(item._id)}>Remove2</button>
      {item.name}
    </li>
  )
}
