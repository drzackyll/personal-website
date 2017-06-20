import React from 'react'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Resume from './components/resume'
import Projects from './components/projects'
import Home from './components/home'
import Blog from './components/blog'
import Contact from './components/contact'

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)

export default Routes
