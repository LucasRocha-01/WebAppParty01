import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';

import Dashboard from '../page/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
