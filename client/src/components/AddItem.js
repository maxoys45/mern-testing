import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AddItem = () => {
  const [name, setName] = useState('')

  const { addItem } = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault()

    const newItem = {
      id: Math.floor(Math.random() * 10000000),
      name,
    }

    addItem(newItem)
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
