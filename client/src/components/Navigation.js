import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'
import { paths } from '../paths'
import { LogoutButton } from './auth/LogoutButton'

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <>
            <Link to={paths.dashboard}>Home</Link>
            <Link to={paths.add}>Add</Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to={paths.home}>Login</Link>
            <Link to={paths.register}>Register</Link>
          </>
        )}
      </ul>
    </nav>
  )
}
