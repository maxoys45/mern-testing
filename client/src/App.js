import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import { ItemState } from './context/item/ItemState'

import { Navigation } from './components/Navigation'
import { AddItem } from './components/AddItem'
import { Items } from './components/ItemList'

export default class App extends Component {
  render() {
    return (
      <ItemState>
        <Router>
          <Navigation />

          <h1>My App</h1>

          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/add" component={AddItem} />
          </Switch>
        </Router>
      </ItemState>
    )
  }
}
