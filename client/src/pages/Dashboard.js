import React, { useContext } from 'react'

import AuthContext from '../context/auth/AuthContext'
import { ItemList } from '../components/ItemList'

export default () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      <h2>Dashboard</h2>

      {user && <div>Hello, {user.username}</div>}

      <hr />

      <ItemList />
    </>
  )
}
