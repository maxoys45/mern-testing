import React, { useState, useContext } from 'react'

import ItemContext from '../context/item/ItemContext'
import AlertContext from '../context/alert/AlertContext'

export const AddItemForm = () => {
  const [name, setName] = useState('')

  const { addItem } = useContext(ItemContext)
  const { setAlert } = useContext(AlertContext)

  const onSubmit = e => {
    e.preventDefault()

    if (name === '') {
      setAlert('Please enter an item.', 'error')
    } else {
      const newItem = {
        name,
      }

      addItem(newItem)
      setName('')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="item">Item:</label>
      <input
        id="item"
        type="text"
        name="name"
        placeholder="eg. Milk"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button type="submit">Add item</button>
    </form>
  )
}
