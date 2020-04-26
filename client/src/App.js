import React, { Component } from 'react'

import './App.css'
import store from './store'
import { GlobalProvider } from "./context/GlobalState";
import { loadUser } from './actions/authActions'

import { AddItem } from './components/AddItem'
import { Items } from './components/ItemList'

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <GlobalProvider>
        <>
          <h1>My App</h1>

          <AddItem />
          <Items />
        </>
      </GlobalProvider>
    )
  }
}