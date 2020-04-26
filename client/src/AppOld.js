import React, { Component } from 'react'
import { Provider } from 'react-redux'

import './App.css'
import store from './store'
import { loadUser } from './actions/authActions'

import AuthContainer from './components/auth/AuthContainer'
import AddItem from './components/AddItem'
import Items from './components/Items'

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <Provider store={store}>
        <>
          <h1>My App</h1>
          
          <AuthContainer />          
          <AddItem />
          <Items />
        </>
      </Provider>
    )
  }
}