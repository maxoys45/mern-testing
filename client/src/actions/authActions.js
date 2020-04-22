import axios from 'axios'

import { returnErrors } from "./errorActions"
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from './types'

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(response => dispatch({
      type: USER_LOADED,
      payload: response.data,
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))

      dispatch({ type: AUTH_ERROR })
    })
}

// Register user
export const register = ({ username, email, password}) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Request data
  const body = JSON.stringify({ username, email, password })

  axios
    .post('/api/users/new', body, config)
    .then(response => dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data,
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'))

      dispatch({ type: REGISTER_FAIL })
    })
} 

// Login user
export const login = ({ username, password }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    }
  }

  // Request data
  const body = JSON.stringify({ username, password })

  axios
    .post('/api/auth', body, config)
    .then(response => dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'))

      dispatch({ type: LOGIN_FAIL })
    })
} 

// Logout user
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  // If token then add to headers
  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}