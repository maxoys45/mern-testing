import axios from 'axios'

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types'

export const getItems = () => dispatch => {
  // dispatch(setItemsLoading())

  axios.get('/api/items').then(res => {
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    })
  })
  // .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res => {
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
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