import React, { useReducer } from 'react'
import axios from 'axios'

import ItemContext from './ItemContext'
import itemReducer from '../../reducers/itemReducer'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../types'

// Provider component
export const ItemState = ({ children }) => {
  const initialState = {
    items: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(itemReducer, initialState)

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
    <ItemContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        getItems,
        addItem,
        deleteItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  )
}
