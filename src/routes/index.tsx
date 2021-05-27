import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../page/SignIn';
import SignUp from '../page/SignUp';

import PartiesTable from '../page/PartiesTable';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={PartiesTable} />
  </Switch>
);

export default Routes;
