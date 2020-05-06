import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.scss'
import { ItemState } from './context/item/ItemState'
import { AlertState } from './context/alert/AlertState'
import { AuthState } from './context/auth/AuthState'

// Pages
import Home from './pages/Home'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AddItem from './pages/AddItem'

// Components
import { Header } from './components/header/Header'
import { Alert } from './components/Alert'
import { CheckAuth } from './components/auth/CheckAuth'
import ProtectedRoutes from './components/ProtectedRoutes'
import { paths } from './paths'

export const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ItemState>
          <BrowserRouter>
            <Header />

            <Alert />

            {/* @TODO: Seems weird to have a component just for checking auth. */}
            <CheckAuth />

            <Switch>
              <Route exact path={paths.home} component={Home} />
              <Route exact path={paths.register} component={Register} />

              <ProtectedRoutes>
                <Route exact path={paths.dashboard} component={Dashboard} />
                <Route exact path={paths.add} component={AddItem} />
              </ProtectedRoutes>
            </Switch>
          </BrowserRouter>
        </ItemState>
      </AlertState>
    </AuthState>
  )
}
