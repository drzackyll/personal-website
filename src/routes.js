import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Resume from './components/resume';
import Work from './components/work';
import Home from './components/home';
import Blog from './components/blog';
import Contact from './components/contact';
import Portfolio from './components/portfolio';

const Routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/work" component={Work} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route path="/portfolio" component={Portfolio} />
    </Switch>
);

export default Routes;
