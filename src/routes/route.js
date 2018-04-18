import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
  // Link,
} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
import { asyncComponent } from '../utils/asyncComponent';
import MainLayout from '../components/containers/layout/Layout';

const history = createHashHistory();

const Check = asyncComponent(() => import('../components/containers/check/Check'));
const ListB = asyncComponent(() => import('../components/containers/list/ListB'));
const ListC = asyncComponent(() => import('../components/containers/list/ListC'));
const noMatch = asyncComponent(() => import('../components/containers/no-match/noMatch'));

const routes = (
  <Router history={history} key={Math.random()}>
    <MainLayout history={history}>
      <Switch>
        <Redirect exact from={'/' || '/index.html'} to="/check" />
        <Route path="/check" component={Check} />
        <Route path="/list-b/:test" component={ListB} />
        <Route path="/list-c" component={ListC} />
        <Redirect exact from="/index.html" to="/list-a" />
        <Route component={noMatch} />
      </Switch>
    </MainLayout>
  </Router>
);

export default routes;
