import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import App from './App'
import { SearchBooks } from './SearchBooks'

export const Path = {
  app: '/',
  searchBooks: '/searchBooks',
}

const routes = (
  <Switch>
    <Route exact path={Path.app} component={App} />
    <Route exact path={Path.searchBooks} component={SearchBooks} />
    <Redirect to={Path.app} />
  </Switch>
)

export default routes
