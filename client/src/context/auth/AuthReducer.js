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

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      }

    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}
