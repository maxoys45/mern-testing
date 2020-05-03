import React, { useReducer } from 'react'

import ErrorContext from './ErrorContext'
import errorReducer from './ErrorReducer'
import { GET_ERRORS, CLEAR_ERRORS } from '../types'


// Provider component
export const ErrorState = ({ children }) => {
  const initialState = {
    msg: {},
    status: null,
    id: null,
  }

  const [state, dispatch] = useReducer(errorReducer, initialState)

  // Return errors
  const returnErrors = (msg, status, id = null) => {
    dispatch({
      type: GET_ERRORS,
      payload: {
        msg, status, id
      }
    })
  }

  // Clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    })
  }

  return (
    <ErrorContext.Provider
      value={{
        error: state,
        returnErrors,
        clearErrors,
      }}
    >
      {children}
    </ErrorContext.Provider>
  )
}
