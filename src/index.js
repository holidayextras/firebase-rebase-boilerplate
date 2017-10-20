import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'
import { render } from 'react-dom'
import style from './sass/style.scss'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'
import Account from './containers/Account'

const NotFound = () => (<h1>404.. This page is not found!</h1>)

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path='/'>
      <IndexRoute component={Home} />
      <Route component={Login} path='/login' />
      <Route component={Home} path='/Home' />
      <Route component={Account} path='/account' />
      <Route component={NotFound} path='*' />
    </Route>
  </Router>
);

render(routes, document.getElementById('root'))
