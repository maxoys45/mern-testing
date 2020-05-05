import React, { useContext, useEffect } from 'react'

import AuthContext from '../context/auth/AuthContext'
import { LoginForm } from '../components/auth/LoginForm'
import { paths } from '../paths'

export default ({ history }) => {
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (isAuthenticated) history.push(paths.dashboard)
  }, [isAuthenticated, history])

  return (
    <>
      <hr />

      <p>Welcome to my shite website.</p>

      <LoginForm />
    </>
  )
}
