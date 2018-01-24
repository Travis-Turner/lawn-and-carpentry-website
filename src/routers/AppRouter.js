import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LandingPage from '../components/LandingPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route component={Header} />
      <Switch>
        <Route path="/" component={LandingPage} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
