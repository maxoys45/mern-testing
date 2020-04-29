import React, { useContext } from 'react'

import ItemContext from '../context/item/ItemContext'

export const Item = ({ item }) => {
  const { deleteItem } = useContext(ItemContext)

  return (
    <li>
      <button onClick={() => deleteItem(item._id)}>Remove</button>
      {item.name}
    </li>
  )
}
