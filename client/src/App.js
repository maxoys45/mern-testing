import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import { ItemState } from './context/item/ItemState'
import { AlertState } from './context/alert/AlertState'
import { AuthState } from './context/auth/AuthState'

import { Navigation } from './components/Navigation'
import { Alert } from './components/Alert'
import { AuthContainer } from './components/auth/AuthContainer'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Items } from './components/ItemList'
import { AddItem } from './components/AddItem'

export const App = () => {
  return (
    <ItemState>
      <AlertState>
        <AuthState>
          <BrowserRouter>
            <Navigation />

            <h1>My App</h1>

            <Alert />

            <AuthContainer />

            <Switch>
              <Route exact path="/" component={Items} />
              <ProtectedRoutes>
                <Route exact path="/add" component={AddItem} />
              </ProtectedRoutes>
            </Switch>
          </BrowserRouter>
        </AuthState>
      </AlertState>
    </ItemState>
  )
}
