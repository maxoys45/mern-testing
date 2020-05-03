import React, { useContext } from 'react'

import AuthContext from '../../context/auth/AuthContext'

export const Logout = () => {
  const { logoutUser } = useContext(AuthContext)

  return (
    <>
      <button onClick={logoutUser}>Logout</button>
    </>
  )
}