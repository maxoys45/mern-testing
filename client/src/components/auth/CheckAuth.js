import React, { useContext, useEffect } from 'react'

import AuthContext from '../../context/auth/AuthContext'

export const CheckAuth = () => {
  const { loadUser } = useContext(AuthContext)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return <></>
}
