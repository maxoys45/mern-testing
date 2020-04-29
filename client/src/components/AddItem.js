import React, { useState, useContext } from 'react'

import ItemContext from '../context/item/ItemContext'

export const AddItem = () => {
  const [name, setName] = useState('')

  const { addItem } = useContext(ItemContext)

  const onSubmit = e => {
    e.preventDefault()

    const newItem = {
      name,
    }

    addItem(newItem)
    setName('')
  }

  return (
    <div>
      <hr />

      <h2>Add item</h2>

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

      {/* <div>You must be logged in to add an item</div> */}
    </div>
  )
}
