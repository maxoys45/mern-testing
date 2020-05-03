import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/AuthContext'

import { Register } from './Register'
import { Login } from './Login'
import { Logout } from './Logout'

export const AuthContainer = () => {
  const { loadUser, isAuthenticated, user } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  const authComponents = (
    <>
      <h2>{ user ? `Welcome, ${user.username}` : '' }</h2>

      <Logout />
    </>
  )

  const guestComponents = (
    <>
      <Register />
      <Login />
    </>
  )

  return (
    <>
      { isAuthenticated ? authComponents : guestComponents }
    </>
  )
}