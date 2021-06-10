import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Pets } from './components/Pets'

export function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Pets />
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
    </Layout>
  )
}
