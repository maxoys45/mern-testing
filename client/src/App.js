import React, { Component } from 'react'

import './App.css'
import { GlobalProvider } from "./context/GlobalState";

import { AddItem } from './components/AddItem'
import { Items } from './components/ItemList'

export default class App extends Component {
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