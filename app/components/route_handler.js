import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import CaseLayout from './case_layout';
import ConnectedCaseList from '../containers/connected_case_list';
import ConnectedCaseForm from '../containers/connected_case_form';
import FakeHome from './homepage';

// 'view' param should be 'new' or 'edit'. Todo: a redirect for other urls!
const RouteHandler = () =>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FakeHome} />
      <Route path="cases" component={CaseLayout}>
        <IndexRoute component={ConnectedCaseList} />
        <Route path=":view(/:caseId)" component={ConnectedCaseForm} />
      </Route>
    </Route>
  </Router>;

export default RouteHandler;
