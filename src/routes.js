import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Page from './pages';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Page} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
