import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'

const ProtectedRoutes = ({ history, children }) => {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    history.push('/')
  }

  return <>{children}</>
}

export default withRouter(ProtectedRoutes)
