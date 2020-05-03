import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../context/auth/AuthContext'

export const Logout = () => {
  const history = useHistory()
  const { logoutUser } = useContext(AuthContext)

  const onLogout = () => {
    logoutUser()

    history.push('/')
  }

  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  )
}