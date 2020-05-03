import React, { useContext } from 'react'

import { ItemList } from '../components/ItemList'
import AuthContext from '../context/auth/AuthContext'

export default () => {
  const { user } = useContext(AuthContext)

  return (
    <>
      {user && (<div>Hello, {user.username}</div>)}

      <hr />

      <ItemList />
    </>
  )
}
