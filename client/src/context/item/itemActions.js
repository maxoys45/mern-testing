import axios from 'axios'

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types'

export const getItems = () => dispatch => {
  // dispatch(setItemsLoading())

  axios.get('/api/items').then(response => {
    dispatch({
      type: GET_ITEMS,
      payload: response.data,
    })
  })
  // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(response => {
    dispatch({
      type: ADD_ITEM,
      payload: response.data,
    })
  })
  // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(() => {
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    })
  })
  // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

// export const addItem = item => {
//   dispatch({
//     type: 'ADD_ITEM',
//     payload: item,
//   })
// }

// export const deleteItem = id => dispatch => {
//   dispatch({
//     type: 'DELETE_ITEM',
//     payload: id,
//   })
// }
