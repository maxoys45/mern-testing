import React, { createContext, useReducer } from 'react'
import axios from 'axios'

import itemReducer from '../reducers/itemReducer'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

const initialState = {
  items: [],
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, initialState)

  // Actions
  const getItems = () => {
    // dispatch(setItemsLoading())

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

  return (
    <GlobalContext.Provider
      value={{
        items: state.items,
        getItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
