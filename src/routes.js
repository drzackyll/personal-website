import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Resume from './components/Resume'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Resume} />
    <Route path="/resume" component={Resume} />
  </Route>
)

export default Routes
