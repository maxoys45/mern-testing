import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { GlobalProvider } from './context/GlobalState'

import { Navigation } from './components/Navigation'
import { AddItem } from './components/AddItem'
import { Items } from './components/ItemList'

export default class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <Router>
          <Navigation />

          <h1>My App</h1>

          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/add" component={AddItem} />
          </Switch>
        </Router>
      </GlobalProvider>
    )
  }
}
