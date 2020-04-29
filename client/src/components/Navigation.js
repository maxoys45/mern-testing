import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/add'>Add</Link>
      </ul>
    </nav>
  )
}
