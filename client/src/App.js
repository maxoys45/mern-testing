import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import { ItemState } from './context/item/ItemState'
import { AlertState } from './context/alert/AlertState'
import { AuthState } from './context/auth/AuthState'

// Pages
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import AddItem from './pages/AddItem'

// Components
import { Navigation } from './components/Navigation'
import { Alert } from './components/Alert'
import { CheckAuth } from './components/auth/CheckAuth'
import ProtectedRoutes from './components/ProtectedRoutes'
import { paths } from './paths'

export const App = () => {
  return (
    <AuthState>
      <ItemState>
        <AlertState>
          <BrowserRouter>
            <Navigation />

            <h1>My App</h1>

            <Alert />

            {/* @TODO: Seems weird to have a component just for checking auth. */}
            <CheckAuth />

            <Switch>
              <Route exact path={paths.login} component={Login} />
              <Route exact path={paths.register} component={Register} />

              <ProtectedRoutes>
                <Route exact path={paths.home} component={Home} />
                <Route exact path={paths.add} component={AddItem} />
              </ProtectedRoutes>
            </Switch>
          </BrowserRouter>
        </AlertState>
      </ItemState>
    </AuthState>
  )
}
