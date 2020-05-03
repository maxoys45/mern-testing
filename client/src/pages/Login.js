import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'
import { LoginForm } from '../components/auth/LoginForm'
import { paths } from '../paths'

export default () => {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) return <Redirect to={paths.home} />

  return (
    <>
      <h2>Login</h2>

      <hr />

      <LoginForm />
    </>
  )
}
