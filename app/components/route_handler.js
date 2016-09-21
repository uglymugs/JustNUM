import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CaseLayout from './case_layout';
import CaseView from './case_form/case_view';
import CaseList from './case_list';

const RouteHandler = () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="cases" component={CaseLayout}>
        <IndexRoute component={CaseList} />
        <Route path="new" component={CaseView} />
        <Route path="view/:caseId" component={CaseView} />
        <Route path="edit/:caseId" component={CaseView} />
      </Route>
    </Route>
  </Router>;

export default RouteHandler;
