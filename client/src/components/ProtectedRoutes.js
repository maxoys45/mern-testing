import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'

import AuthContext from '../context/auth/AuthContext'
import { paths } from '../paths'

const ProtectedRoutes = ({ history, children }) => {
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) history.push(paths.home)

  return <>{children}</>
}

export default withRouter(ProtectedRoutes)
