import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Resume from './components/resume'
import Projects from './components/projects'
import Home from './components/home'
import Contact from './components/contact'

const Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Route>
)

export default Routes
