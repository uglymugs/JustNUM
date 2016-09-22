import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CaseLayout from './case_layout';
import CaseView from './case_form/case_view';
import ConnectedCaseList from '../containers/connected_case_list';
import ConnectedCaseEditView from '../containers/connected_case_edit_view';
import FakeHome from './homepage';

const RouteHandler = () =>
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FakeHome} />
      <Route path="cases" component={CaseLayout}>
        <IndexRoute component={ConnectedCaseList} />
        <Route path="new" component={CaseView} />
        <Route path="view/:caseId" component={CaseView} />
        <Route path="edit/:caseId" component={ConnectedCaseEditView} />
      </Route>
    </Route>
  </Router>;

export default RouteHandler;
