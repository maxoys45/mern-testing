import React, { useContext } from 'react'

import AlertContext from '../context/alert/AlertContext'

export const Alert = () => {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
    )
  )
}
