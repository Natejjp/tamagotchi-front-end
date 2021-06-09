import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </Layout>
  )
}
