import React, { useReducer } from 'react'

import AlertContext from './AlertContext'
import alertReducer from './AlertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

// Provider component
export const AlertState = ({ children }) => {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // Actions
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        msg,
        type,
      },
    })

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      })
    }, 5000)
  }

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
