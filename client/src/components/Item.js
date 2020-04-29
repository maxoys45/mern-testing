import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext)

  return (
    <li>
      <button onClick={() => deleteItem(item._id)}>Remove</button>
      {item.name}
    </li>
  )
}
