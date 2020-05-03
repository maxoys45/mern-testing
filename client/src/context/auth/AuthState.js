import React, { useReducer } from 'react'
import axios from 'axios'

import AuthContext from './AuthContext'
import authReducer from './AuthReducer'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from '../types'

// Provider component
export const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Check token and load user
  const loadUser = () => {
    // User loading
    dispatch({ type: USER_LOADING })

    axios.get('/api/auth/user', tokenConfig()).then(response =>
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      }),
    )
    .catch(err => {
    //   dispatch(returnErrors(err.response.data, err.response.status))

      dispatch({ type: AUTH_ERROR })
    })
  }

  // Register user
  const registerUser = ({ username, email, password }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // Request data
    const body = JSON.stringify({ username, email, password })

    axios.post('/api/users/new', body, config).then(response =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      }),
    )
    .catch(err => {
    //   dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))

      dispatch({ type: REGISTER_FAIL })
    })
  }

  // Login user
  const loginUser = ({ username, password }) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    // Request data
    const body = JSON.stringify({ username, password })

    axios.post('/api/auth', body, config).then(response =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      }),
    )
    .catch(err => {
    //   dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))

      dispatch({ type: LOGIN_FAIL })
    })
  }

  // Logout user
  const logoutUser = () => {
    dispatch({
      type: LOGOUT_SUCCESS,
    })
  }

  // Setup config/headers and token
  const tokenConfig = () => {
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json',
      },
    }

    // If token then add to headers
    if (state.token) {
      config.headers['x-auth-token'] = state.token
    }

    return config
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        loadUser,
        registerUser,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
