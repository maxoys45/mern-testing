import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../context/auth/AuthContext'
import { paths } from '../../paths'

export const LogoutButton = () => {
  const history = useHistory()
  const { logoutUser } = useContext(AuthContext)

  const onLogout = () => {
    logoutUser()

    history.push(paths.home)
  }

  return <button onClick={onLogout}>Logout</button>
}
