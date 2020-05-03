import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'
import { RegisterForm } from '../components/auth/RegisterForm'
import { paths } from '../paths'

export default () => {
  const { isAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) return <Redirect to={paths.home} />

  return (
    <>
      <h2>Register</h2>

      <RegisterForm />
    </>
  )
}
