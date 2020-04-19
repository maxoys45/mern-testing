import React from 'react'
import { Provider } from 'react-redux'

import './App.css'

import store from './store'
import AddItem from './components/AddItem'
import Items from './components/Items'

function App() {
  return (
    <Provider store={store}>
      <>
        <h1>Hello</h1>

        <AddItem />
        <Items />
      </>
    </Provider>
  )
}

export default App
