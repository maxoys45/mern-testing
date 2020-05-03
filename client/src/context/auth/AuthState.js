import React, { useReducer, createContext } from 'react'
import axios from 'axios'

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

const AuthContext = createContext()

// Provider component
export const AuthState = ({ children }) => {
  const initialState = {
    items: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  // Actions
  const getItems = () => {
    itemsLoading()

    axios.get('/api/items').then(response => {
      dispatch({
        type: GET_ITEMS,
        payload: response.data,
      })
    })
    // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  }

  const addItem = item => {
    axios.post('/api/items', item).then(response => {
      dispatch({
        type: ADD_ITEM,
        payload: response.data,
      })
    })
    // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  }

  const deleteItem = id => {
    axios.delete(`/api/items/${id}`).then(() => {
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      })
    })
    // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
  }

  const itemsLoading = () => {
    dispatch({
      type: ITEMS_LOADING,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        getItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
