import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        {isAuthenticated && (
          <Link to='/add'>Add</Link>
        )}
      </ul>
    </nav>
  )
}
